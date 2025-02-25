import { useEffect, useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ModeChanger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-300 rounded-md dark:bg-gray-700">
      {theme === "light" ? <Brightness4 fontSize="medium" /> : <Brightness7 fontSize="medium" />}
    </button>
  );
}
