import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-4">
      <ul>
        <li className="mb-2"><a href="/dashboard">Dashboard</a></li>
        <li className="mb-2"><a href="/clientes">Clientes</a></li>
        <li className="mb-2"><a href="/produtos">Produtos</a></li>
      </ul>
    </aside>
  );
};

export default React.memo(Sidebar);
