"use client";

/**
 * Placeholder accounts: a Clerk-style sign-in card backed by a session kept in
 * localStorage. Nothing is sent anywhere and no environment variables are needed.
 * Swap for real Clerk components once auth is implemented.
 */

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

import { useApp } from "@/context/app-context";
import type { Locale } from "@/lib/i18n";

export type MockSession = { name: string; email: string; since: string };

const SESSION_KEY = "comafro-session";
const listeners = new Set<() => void>();
let cached: { raw: string | null; value: MockSession | null } = { raw: null, value: null };

function read(): MockSession | null {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(SESSION_KEY);
  } catch {}
  if (raw !== cached.raw) {
    let value: MockSession | null = null;
    try {
      value = raw ? (JSON.parse(raw) as MockSession) : null;
    } catch {}
    cached = { raw, value };
  }
  return cached.value;
}

function write(session: MockSession | null) {
  try {
    if (session) localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else localStorage.removeItem(SESSION_KEY);
  } catch {}
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => e.key === SESSION_KEY && listener();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

export function useMockSession() {
  const session = useSyncExternalStore(subscribe, read, () => null);
  return {
    session,
    signIn: (name: string, email: string) => write({ name, email, since: new Date().toISOString() }),
    signOut: () => write(null),
  };
}

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("") || "?";

const nameFromEmail = (email: string) =>
  email
    .split("@")[0]!
    .split(/[._-]+/)
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase() + w.slice(1))
    .join(" ") || "Buyer";

// ---------------------------------------------------------------------------

const COPY = {
  en: {
    account: "Account",
    signInTitle: "Sign in to Comafro",
    signUpTitle: "Create your account",
    signInSub: "Welcome back! Please sign in to continue",
    signUpSub: "Welcome! Please fill in the details to get started.",
    google: "Continue with Google",
    or: "or",
    name: "Full name",
    email: "Email address",
    password: "Password",
    cont: "Continue",
    noAccount: "Don’t have an account?",
    haveAccount: "Already have an account?",
    signUp: "Sign up",
    signIn: "Sign in",
    badEmail: "Enter a valid email address.",
    shortPassword: "Password must be at least 8 characters.",
    demo: "Demo sign-in · accounts are coming soon. Your session stays on this device.",
    signedInAs: "Signed in as",
    signOut: "Sign out",
    close: "Close",
    demoUser: "Demo Buyer",
  },
  ar: {
    account: "الحساب",
    signInTitle: "تسجيل الدخول إلى كومافرو",
    signUpTitle: "إنشاء حساب",
    signInSub: "مرحبًا بعودتكم! سجّلوا الدخول للمتابعة",
    signUpSub: "مرحبًا! أدخلوا بياناتكم للبدء.",
    google: "المتابعة باستخدام Google",
    or: "أو",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    cont: "متابعة",
    noAccount: "ليس لديكم حساب؟",
    haveAccount: "لديكم حساب بالفعل؟",
    signUp: "إنشاء حساب",
    signIn: "تسجيل الدخول",
    badEmail: "أدخلوا بريدًا إلكترونيًا صحيحًا.",
    shortPassword: "يجب ألا تقل كلمة المرور عن ٨ أحرف.",
    demo: "تسجيل دخول تجريبي · الحسابات قريبًا. تبقى جلستكم على هذا الجهاز فقط.",
    signedInAs: "مسجّل الدخول باسم",
    signOut: "تسجيل الخروج",
    close: "إغلاق",
    demoUser: "مشترٍ تجريبي",
  },
} satisfies Record<Locale, Record<string, string>>;

const KUFI = "var(--font-kufi),sans-serif";
// Deliberately permissive: one "@", something before it, a dot-separated domain after it.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// ---------------------------------------------------------------------------

/** Header account icon: opens the sign-in card, or a small menu when signed in. */
export function AccountButton() {
  const { lang, openAuth } = useApp();
  const { session, signOut } = useMockSession();
  const [menu, setMenu] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const c = COPY[lang];

  useEffect(() => {
    if (!menu) return;
    const onDoc = (e: MouseEvent) => !wrap.current?.contains(e.target as Node) && setMenu(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(false);
    document.addEventListener("click", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [menu]);

  return (
    <div ref={wrap} style={{ position: "relative", display: "flex", alignSelf: "stretch" }}>
      <button
        type="button"
        data-hdr-icon=""
        aria-label={session ? `${c.account}: ${session.name}` : c.signIn}
        aria-haspopup={session ? "menu" : "dialog"}
        aria-expanded={session ? menu : undefined}
        onClick={() => (session ? setMenu(!menu) : openAuth())}
        className="hover-stripes"
        style={iconButton}
      >
        {session ? (
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "999px",
              display: "grid",
              placeItems: "center",
              background: "var(--ink)",
              color: "var(--bg)",
              fontSize: "11.5px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            {initials(session.name)}
          </span>
        ) : (
          <UserIcon />
        )}
      </button>
      {session && menu && (
        <div
          role="menu"
          dir={lang === "ar" ? "rtl" : undefined}
          style={{
            position: "absolute",
            top: "calc(100% + 10px)",
            right: 0,
            zIndex: 70,
            minWidth: "240px",
            background: "var(--paper)",
            border: "1px solid rgba(var(--ink-rgb),0.2)",
            boxShadow: "0 14px 34px rgba(var(--ink-rgb),0.16)",
            padding: "14px 16px",
            ...(lang === "ar" ? { fontFamily: KUFI } : {}),
          }}
        >
          <p style={{ fontSize: "12px", color: "var(--muted)" }}>{c.signedInAs}</p>
          <p style={{ fontSize: "15px", fontWeight: 600, marginTop: "4px" }}>{session.name}</p>
          <p
            dir="ltr"
            style={{
              fontSize: "13px",
              color: "var(--muted)",
              marginTop: "2px",
              textAlign: lang === "ar" ? "right" : "left",
            }}
          >
            {session.email}
          </p>
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              signOut();
              setMenu(false);
            }}
            className="hover-btn-outline"
            style={{
              marginTop: "14px",
              width: "100%",
              padding: "10px 12px",
              border: "1px solid rgba(var(--ink-rgb),0.3)",
              background: "transparent",
              color: "var(--ink)",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {c.signOut}
          </button>
        </div>
      )}
    </div>
  );
}

export const iconButton: React.CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: "40px",
  minHeight: "32px",
  alignSelf: "stretch",
  padding: 0,
  border: 0,
  background: "transparent",
  color: "var(--ink)",
  cursor: "pointer",
  flex: "0 0 auto",
};

// ---------------------------------------------------------------------------

/** Clerk-style sign-in / sign-up card. */
export function AuthDialog() {
  const { lang, authOpen, closeAuth } = useApp();
  const { signIn } = useMockSession();
  const [mode, setMode] = useState<"in" | "up">("in");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const ar = lang === "ar";
  const c = COPY[lang];

  useEffect(() => {
    if (!authOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeAuth();
    document.addEventListener("keydown", onKey);
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = "hidden";
    requestAnimationFrame(() => emailRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      root.style.overflow = previous;
    };
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  const finish = (n: string, e: string) => {
    signIn(n, e);
    setPassword("");
    setError("");
    closeAuth();
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const mail = email.trim().toLowerCase();
    if (!EMAIL_RE.test(mail)) return setError(c.badEmail);
    if (password.length < 8) return setError(c.shortPassword);
    finish(mode === "up" && name.trim() ? name.trim() : nameFromEmail(mail), mail);
  };

  const field: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "14.5px",
    border: "1px solid rgba(var(--ink-rgb),0.25)",
    borderRadius: "6px",
    background: "var(--bg)",
    color: "var(--ink)",
    outline: "none",
  };
  const labelStyle: React.CSSProperties = { display: "grid", gap: "6px", fontSize: "13px", fontWeight: 500 };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={mode === "in" ? c.signInTitle : c.signUpTitle}
      style={{ position: "fixed", inset: 0, zIndex: 110, display: "grid", placeItems: "center", padding: "16px" }}
    >
      <div
        onClick={closeAuth}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "rgba(8,10,9,0.55)" }}
      />
      <div
        dir={ar ? "rtl" : undefined}
        style={{
          position: "relative",
          width: "min(400px, 100%)",
          maxHeight: "calc(100dvh - 32px)",
          overflowY: "auto",
          background: "var(--paper)",
          color: "var(--ink)",
          borderRadius: "12px",
          boxShadow: "0 24px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(var(--ink-rgb),0.08)",
          ...(ar ? { fontFamily: KUFI } : {}),
        }}
      >
        <button
          type="button"
          onClick={closeAuth}
          aria-label={c.close}
          className="hover-accent"
          style={{
            position: "absolute",
            top: "10px",
            [ar ? "left" : "right"]: "10px",
            width: "36px",
            height: "36px",
            display: "grid",
            placeItems: "center",
            border: 0,
            background: "transparent",
            color: "var(--muted)",
            cursor: "pointer",
          }}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
        </button>

        <div style={{ padding: "34px 32px 26px", textAlign: "center" }}>
          <Image
            src="/assets/comafro-mark.png"
            alt=""
            width={179}
            height={184}
            style={{ height: "40px", width: "auto", margin: "0 auto" }}
          />
          <h2
            style={{ fontSize: "18px", fontWeight: 700, letterSpacing: "-0.01em", marginTop: "18px", lineHeight: 1.3 }}
          >
            {mode === "in" ? c.signInTitle : c.signUpTitle}
          </h2>
          <p style={{ fontSize: "13.5px", color: "var(--muted)", marginTop: "6px" }}>
            {mode === "in" ? c.signInSub : c.signUpSub}
          </p>

          <button
            type="button"
            onClick={() => finish(c.demoUser, "buyer@example.com")}
            className="hover-btn-outline"
            style={{
              marginTop: "22px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "6px",
              border: "1px solid rgba(var(--ink-rgb),0.2)",
              background: "var(--bg)",
              color: "var(--ink)",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            <GoogleIcon />
            {c.google}
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: "20px 0",
              color: "var(--muted)",
              fontSize: "13px",
            }}
          >
            <span style={{ flex: 1, height: "1px", background: "rgba(var(--ink-rgb),0.15)" }} />
            {c.or}
            <span style={{ flex: 1, height: "1px", background: "rgba(var(--ink-rgb),0.15)" }} />
          </div>

          <form onSubmit={submit} noValidate style={{ display: "grid", gap: "14px", textAlign: ar ? "right" : "left" }}>
            {mode === "up" && (
              <label style={labelStyle}>
                {c.name}
                <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" style={field} />
              </label>
            )}
            <label style={labelStyle}>
              {c.email}
              <input
                ref={emailRef}
                type="email"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                inputMode="email"
                style={field}
              />
            </label>
            <label style={labelStyle}>
              {c.password}
              <input
                type="password"
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === "in" ? "current-password" : "new-password"}
                style={field}
              />
            </label>
            {error && (
              <p role="alert" style={{ fontSize: "13px", color: "#B42318" }}>
                {error}
              </p>
            )}
            <button
              type="submit"
              className="hover-btn"
              style={{
                marginTop: "4px",
                padding: "11px 12px",
                borderRadius: "6px",
                border: 0,
                background: "var(--ink)",
                color: "var(--bg)",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              {c.cont} {ar ? "←" : "→"}
            </button>
          </form>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(var(--ink-rgb),0.1)",
            background: "var(--bg2)",
            padding: "16px 24px",
            textAlign: "center",
            borderRadius: "0 0 12px 12px",
          }}
        >
          <p style={{ fontSize: "13.5px", color: "var(--muted)" }}>
            {mode === "in" ? c.noAccount : c.haveAccount}{" "}
            <button
              type="button"
              onClick={() => {
                setMode(mode === "in" ? "up" : "in");
                setError("");
              }}
              style={{
                border: 0,
                background: "transparent",
                padding: 0,
                color: "var(--ink)",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              {mode === "in" ? c.signUp : c.signIn}
            </button>
          </p>
          <p style={{ fontSize: "11.5px", color: "var(--muted)", marginTop: "10px", lineHeight: 1.5 }}>{c.demo}</p>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="25"
      height="25"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <circle cx="12" cy="8.25" r="4.25" />
      <path d="M4.25 21c.9-4.1 4-6.25 7.75-6.25s6.85 2.15 7.75 6.25" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.5 12.3c0-.8-.1-1.5-.2-2.2H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2-1.9 3.2-4.7 3.2-8.1Z"
      />
      <path
        fill="#34A853"
        d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.7c-1 .7-2.2 1-3.7 1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.8A11 11 0 0 0 12 23Z"
      />
      <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7.1H2.1a11 11 0 0 0 0 9.8l3.7-2.8Z" />
      <path
        fill="#EA4335"
        d="M12 5.4c1.6 0 3.1.6 4.2 1.6l3.2-3.2A11 11 0 0 0 2.1 7.1l3.7 2.8C6.7 7.3 9.1 5.4 12 5.4Z"
      />
    </svg>
  );
}
