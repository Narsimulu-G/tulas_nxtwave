import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("tis-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch {}
    return "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("tis-theme", theme);
    } catch {}
  }, [theme]);

  return [
    theme,
    () => setTheme((current) => (current === "light" ? "dark" : "light")),
  ];
}
