"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react";

import type { Locale } from "@/lib/i18n";

/** "light" is the cream palette, "dark" the dark grey one. */
export type Theme = "light" | "dark";

export const THEME_KEY = "comafro-theme";

type AppContextValue = {
  lang: Locale;
  theme: Theme;
  toggleTheme: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  /** Contact side panel (tablet and desktop). */
  panelOpen: boolean;
  openPanel: () => void;
  closePanel: () => void;
  /** Site search overlay. */
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  /** Mock sign-in dialog (placeholder until real auth). */
  authOpen: boolean;
  openAuth: () => void;
  closeAuth: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function AppProvider({ lang, children }: { lang: Locale; children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getServerThemeSnapshot);
  const [menu, setMenu] = useState({ open: false, path: "" });
  const [panel, setPanel] = useState({ open: false, path: "" });
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const pathname = usePathname();
  // The drawer and the side panel close whenever the route changes.
  const menuOpen = menu.open && menu.path === pathname;
  const panelOpen = panel.open && panel.path === pathname;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    try {
      localStorage.setItem(THEME_KEY, theme === "dark" ? "light" : "dark");
    } catch {}
    listeners.forEach((listener) => listener());
  }, [theme]);

  const toggleMenu = useCallback(() => setMenu({ open: !menuOpen, path: pathname }), [menuOpen, pathname]);
  const closeMenu = useCallback(() => setMenu({ open: false, path: "" }), []);
  const openPanel = useCallback(() => setPanel({ open: true, path: pathname }), [pathname]);
  const closePanel = useCallback(() => setPanel({ open: false, path: "" }), []);
  const openSearch = useCallback(() => {
    setMenu({ open: false, path: "" });
    setSearchOpen(true);
  }, []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  const openAuth = useCallback(() => {
    setMenu({ open: false, path: "" });
    setAuthOpen(true);
  }, []);
  const closeAuth = useCallback(() => setAuthOpen(false), []);

  const value = useMemo(
    () => ({
      lang,
      theme,
      toggleTheme,
      menuOpen,
      toggleMenu,
      closeMenu,
      panelOpen,
      openPanel,
      closePanel,
      searchOpen,
      openSearch,
      closeSearch,
      authOpen,
      openAuth,
      closeAuth,
    }),
    [
      lang,
      theme,
      toggleTheme,
      menuOpen,
      toggleMenu,
      closeMenu,
      panelOpen,
      openPanel,
      closePanel,
      searchOpen,
      openSearch,
      closeSearch,
      authOpen,
      openAuth,
      closeAuth,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
}
