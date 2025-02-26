import { useState } from "react";
import { Home, People as Users, Inventory2 as Package, BarChart, Settings, Menu } from "@mui/icons-material";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-primary text-white h-screen transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <button className="p-3" onClick={() => setIsOpen(!isOpen)}>
        <Menu fontSize="large" />
      </button>
      <nav className="flex flex-col gap-4 p-4">
        {[
          { icon: Home, label: "Dashboard", link: "/dashboard" },
          { icon: Users, label: "Clientes", link: "/clientes" },
          { icon: Package, label: "Produtos", link: "/produtos" },
          { icon: BarChart, label: "Relatórios", link: "/relatorios" },
          { icon: Settings, label: "Configurações", link: "/configuracoes" },
        ].map(({ icon: Icon, label, link }) => (
          <Link key={label} href={link} className="flex items-center gap-3 p-2 hover:bg-secondary rounded-md">
            <Icon fontSize="medium" />
            {isOpen && <span>{label}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
