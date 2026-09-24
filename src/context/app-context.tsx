"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import type { Locale } from "@/lib/i18n";

/** "light" is the cream palette, "mono" the black, white & tan one. */
export type Theme = "light" | "mono";

export const THEME_KEY = "comafro-theme";

type AppContextValue = {
  lang: Locale;
  theme: Theme;
  toggleTheme: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
};

const AppContext = createContext<AppContextValue | null>(null);

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getThemeSnapshot(): Theme {
  try {
    return localStorage.getItem(THEME_KEY) === "mono" ? "mono" : "light";
  } catch {
    return "light";
  }
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export function AppProvider({
  lang,
  children,
}: {
  lang: Locale;
  children: React.ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribe,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [menu, setMenu] = useState({ open: false, path: "" });
  const pathname = usePathname();
  // The drawer closes whenever the route changes.
  const menuOpen = menu.open && menu.path === pathname;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    try {
      localStorage.setItem(THEME_KEY, theme === "mono" ? "light" : "mono");
    } catch {}
    listeners.forEach((listener) => listener());
  }, [theme]);

  const toggleMenu = useCallback(
    () => setMenu({ open: !menuOpen, path: pathname }),
    [menuOpen, pathname]
  );
  const closeMenu = useCallback(() => setMenu({ open: false, path: "" }), []);

  const value = useMemo(
    () => ({ lang, theme, toggleTheme, menuOpen, toggleMenu, closeMenu }),
    [lang, theme, toggleTheme, menuOpen, toggleMenu, closeMenu]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within an AppProvider");
  return context;
}
