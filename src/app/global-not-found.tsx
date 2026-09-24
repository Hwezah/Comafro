import type { Metadata } from "next";
import Link from "next/link";

import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found — Comafro Limited",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <main
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "18px",
            padding: "0 clamp(22px,5vw,80px)",
            maxWidth: "1440px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontFamily: "var(--font-jetbrains),monospace", fontSize: "11.5px", letterSpacing: "0.1em", color: "var(--ochre-deep)" }}>
            404
          </p>
          <h1 style={{ fontSize: "clamp(34px,4.6vw,56px)" }}>This page is not on the route.</h1>
          <p style={{ fontSize: "16px", color: "var(--ink-soft)" }}>
            <Link href="/en" style={{ borderBottom: "1px solid var(--ochre)" }}>
              Back to the home page
            </Link>
          </p>
        </main>
      </body>
    </html>
  );
}
