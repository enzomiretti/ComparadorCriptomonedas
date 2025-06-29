import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};
