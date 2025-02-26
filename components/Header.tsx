import { Notifications, AccountCircle } from "@mui/icons-material";
import { useCliente } from "@/context/ClienteContext";

interface Cliente {
  id: number;
  nome: string;
}

interface HeaderProps {
  clientes: Cliente[];
}

const Header = ({ clientes }: HeaderProps) => {
  const { cliente, setCliente } = useCliente();

  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <h1 className="text-xl font-semibold">Painel de Controle</h1>

      <select className="border p-2 rounded" onChange={(e) => setCliente(e.target.value)} value={cliente}>
        <option value="">Selecione um Cliente</option>
        {clientes.map((c) => (
          <option key={c.id} value={c.id}>{c.nome}</option>
        ))}
      </select>

      <div className="flex items-center gap-4">
        <Notifications fontSize="large" className="text-gray-600 hover:text-black cursor-pointer" />
        <AccountCircle fontSize="large" className="text-gray-600 hover:text-black cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
