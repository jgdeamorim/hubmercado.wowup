import DashboardLayout from "@/layouts/DashboardLayout";
import Table from "@/components/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get("/api/produtos")
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Produtos</h1>
      <Table headers={["Nome", "Categoria", "Preço", "Estoque"]} data={produtos} />
    </DashboardLayout>
  );
}
