/**
 * Clerk is optional: the public site builds and runs without it. Auth routes
 * (/sign-in, /sign-up, /dashboard) switch on once both keys are set, e.g. in
 * Vercel → Project → Settings → Environment Variables.
 */
export const clerkEnabled = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY
);
