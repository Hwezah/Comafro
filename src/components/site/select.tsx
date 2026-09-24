"use client";

import { useEffect, useRef, useState } from "react";

type SelectProps = {
  name: string;
  options: string[];
  rtl?: boolean;
  style?: React.CSSProperties;
};

/**
 * Custom dropdown from the design: a styled face and panel over a hidden native
 * <select> that still carries the form value.
 */
export function Select({ name, options, rtl = false }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(-1);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  const align = rtl ? "right" : "left";

  return (
    <div ref={wrapRef} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          width: "100%",
          border: `1px solid ${open ? "var(--ink)" : "rgba(var(--ink-rgb),0.35)"}`,
          background: "var(--paper)",
          color: "var(--ink)",
          padding: "11px 13px",
          font: "inherit",
          fontSize: "15px",
          lineHeight: "1.3",
          cursor: "pointer",
          WebkitAppearance: "none",
          textAlign: align,
          direction: rtl ? "rtl" : undefined,
          boxShadow: open ? "0 0 0 3px rgba(var(--ink-rgb),0.08)" : "none",
          transition: "border-color .16s,box-shadow .16s",
        }}
      >
        <span>{options[selected]}</span>
        <span
          style={{
            width: "9px",
            height: "9px",
            flex: "0 0 auto",
            borderRight: "1.5px solid var(--muted)",
            borderBottom: "1.5px solid var(--muted)",
            transform: open ? "rotate(-135deg) translateY(-2px)" : "rotate(45deg) translateY(-2px)",
            transition: "transform .2s cubic-bezier(.4,0,.2,1)",
          }}
        />
      </button>
      <div
        role="listbox"
        style={{
          position: "absolute",
          zIndex: 60,
          top: "calc(100% + 6px)",
          left: 0,
          right: 0,
          background: "var(--paper)",
          border: "1px solid rgba(var(--ink-rgb),0.3)",
          boxShadow: "0 14px 34px rgba(var(--ink-rgb),0.16)",
          maxHeight: "264px",
          overflow: "auto",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-6px)",
          pointerEvents: open ? "auto" : "none",
          direction: rtl ? "rtl" : undefined,
          transition: "opacity .16s ease,transform .18s cubic-bezier(.22,.7,.2,1)",
        }}
      >
        {options.map((option, i) => (
          <button
            key={option}
            type="button"
            role="option"
            aria-selected={i === selected}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
            onClick={(e) => {
              e.preventDefault();
              setSelected(i);
              setOpen(false);
            }}
            style={{
              display: "block",
              width: "100%",
              textAlign: align,
              border: 0,
              background: i === selected || i === hovered ? "var(--bg2)" : "transparent",
              color: "var(--ink)",
              font: "inherit",
              fontSize: "15px",
              fontWeight: i === selected ? 600 : 400,
              padding: "11px 13px",
              cursor: "pointer",
              transition: "background .14s,color .14s",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <select
        name={name}
        value={options[selected]}
        onChange={(e) => setSelected(e.target.selectedIndex)}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none", width: "1px", height: "1px" }}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
