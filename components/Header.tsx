import React from 'react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <ThemeToggle />
    </header>
  );
};

export default React.memo(Header);
