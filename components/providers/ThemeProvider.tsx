
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextType = {
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const STORAGE_KEY = "kut-erasmus-theme";

const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "system";

  const saved = localStorage.getItem(STORAGE_KEY);

  return saved === "dark" || saved === "light" || saved === "system"
    ? saved
    : "system";
}

function applyTheme(theme: Theme): ResolvedTheme {
  const resolved = theme === "system" ? getSystemTheme() : theme;

  document.documentElement.setAttribute("data-theme", resolved);

  return resolved;
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, updateTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] =
    useState<ResolvedTheme>("light");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    const initialTheme: Theme =
      saved === "dark" || saved === "light" || saved === "system"
        ? saved
        : "system";

    updateTheme(initialTheme);
    setResolvedTheme(applyTheme(initialTheme));

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;

      const nextTheme: Theme =
        event.newValue === "dark" ||
        event.newValue === "light" ||
        event.newValue === "system"
          ? event.newValue
          : "system";

      updateTheme(nextTheme);
      setResolvedTheme(applyTheme(nextTheme));
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

 useLayoutEffect(() => {
  const saved = localStorage.getItem(STORAGE_KEY);

  const initialTheme: Theme =
    saved === "dark" || saved === "light" || saved === "system"
      ? saved
      : "system";

  updateTheme(initialTheme);
  setResolvedTheme(applyTheme(initialTheme));

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== STORAGE_KEY) return;

    const nextTheme: Theme =
      event.newValue === "dark" ||
      event.newValue === "light" ||
      event.newValue === "system"
        ? event.newValue
        : "system";

    updateTheme(nextTheme);
    setResolvedTheme(applyTheme(nextTheme));
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener("storage", handleStorage);
  };
}, []); 

  const setTheme = (newTheme: Theme) => {
    localStorage.setItem(STORAGE_KEY, newTheme);
    updateTheme(newTheme);
    setResolvedTheme(applyTheme(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}
