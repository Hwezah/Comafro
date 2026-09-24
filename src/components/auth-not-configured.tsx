import Link from "next/link";

/** Shown on auth routes when the Clerk environment variables are not set. */
export function AuthNotConfigured() {
  return (
    <section style={{ maxWidth: "640px", margin: "0 auto", padding: "clamp(40px,6vw,84px) clamp(22px,5vw,80px)" }}>
      <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", letterSpacing: "0.1em", color: "var(--ochre-deep)" }}>
        Accounts
      </p>
      <h1 style={{ fontSize: "clamp(30px,4vw,44px)", marginTop: "18px" }}>Sign-in is not switched on yet.</h1>
      <p style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--ink-soft)", marginTop: "16px" }}>
        Set <code>NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY</code> and <code>CLERK_SECRET_KEY</code> in the deployment&apos;s
        environment variables and redeploy.
      </p>
      <p style={{ marginTop: "22px" }}>
        <Link href="/en" style={{ borderBottom: "1px solid var(--ochre)" }}>
          Back to the site
        </Link>
      </p>
    </section>
  );
}
