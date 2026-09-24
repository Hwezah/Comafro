"use client";

import { useApp } from "@/context/app-context";

/** Fixed pill that switches between the cream and the black, white & tan palettes. */
export function ThemeToggle() {
  const { theme, toggleTheme } = useApp();
  const mono = theme === "mono";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={mono ? "Switch to cream theme" : "Switch to black, white & tan"}
      className="hover-ochre-border"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "6px 8px",
        border: "1px solid rgba(var(--ink-rgb),0.2)",
        borderRadius: "999px",
        background: "var(--paper)",
        boxShadow: "0 2px 10px rgba(var(--ink-rgb),0.1)",
        cursor: "pointer",
        WebkitAppearance: "none",
      }}
    >
      <span
        style={{
          position: "relative",
          display: "block",
          width: "42px",
          height: "20px",
          borderRadius: "999px",
          background: "var(--bg2)",
          flex: "0 0 auto",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: "2px",
            left: mono ? "24px" : "2px",
            width: "16px",
            height: "16px",
            borderRadius: "999px",
            background: "var(--ink)",
            transition: "left .26s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </span>
      <span
        style={{
          fontFamily: "var(--font-jetbrains),monospace",
          fontSize: "9.5px",
          letterSpacing: "0.12em",
          color: "var(--muted)",
          paddingRight: "2px",
        }}
      >
        {mono ? "TAN" : "CREAM"}
      </span>
    </button>
  );
}
