import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-600 text-white rounded">
      {darkMode ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default React.memo(ThemeToggle);
