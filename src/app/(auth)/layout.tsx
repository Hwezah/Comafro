import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { clerkEnabled } from "@/lib/clerk";
import { fontVariables } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Comafro Limited",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const page = (
    <html lang="en" className={fontVariables}>
      <body>
        <main style={{ minHeight: "100vh" }}>{children}</main>
      </body>
    </html>
  );
  return clerkEnabled ? <ClerkProvider>{page}</ClerkProvider> : page;
}
