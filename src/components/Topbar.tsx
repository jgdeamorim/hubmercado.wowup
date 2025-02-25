import { useEffect, useState } from "react";
import { Notifications, AccountCircle } from "@mui/icons-material";
import { useCliente } from "@/context/ClienteContext";
import { getClientes } from "@/services/api";

export default function Topbar() {
  const { cliente, setCliente } = useCliente();
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getClientes()
      .then((data) => setClientes(data))
      .catch((err) => console.error("Erro ao carregar clientes:", err));
  }, []);

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
}
