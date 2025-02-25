import { useState, useEffect } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("dark-mode") === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("dark-mode", !darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-300 rounded-md dark:bg-gray-700">
      {darkMode ? <Brightness7 fontSize="medium" /> : <Brightness4 fontSize="medium" />}
    </button>
  );
}
