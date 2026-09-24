import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { isLocale } from "@/lib/i18n";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

const clerk = clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export default function proxy(req: NextRequest, event: NextFetchEvent) {
  const [, first = ""] = req.nextUrl.pathname.split("/");

  // "/" goes to the visitor's language: Arabic when the browser asks for it first.
  if (first === "") {
    const prefersArabic = /^ar\b/i.test(req.headers.get("accept-language") ?? "");
    return NextResponse.redirect(new URL(prefersArabic ? "/ar" : "/en", req.url));
  }

  // The public /en and /ar site is static and does not need Clerk.
  if (isLocale(first)) return NextResponse.next();

  return clerk(req, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
