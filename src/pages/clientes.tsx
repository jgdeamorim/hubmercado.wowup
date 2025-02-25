import DashboardLayout from "@/layouts/DashboardLayout";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get("/api/clientes")
      .then((res) => setClientes(res.data))
      .catch((err) => console.error("Erro ao buscar clientes:", err));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Clientes</h1>
      <Table headers={["Nome", "E-mail", "Telefone"]} data={clientes} />
    </DashboardLayout>
  );
}
