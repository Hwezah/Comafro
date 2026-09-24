import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { fontVariables } from "../fonts";
import "../globals.css";

export const metadata: Metadata = {
  title: "Comafro Limited",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={fontVariables}>
        <body>
          <main style={{ minHeight: "100vh" }}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
