import DashboardLayout from "@/layouts/DashboardLayout";
import Graphs from "@/components/Graphs";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Relatorios() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    axios.get("/api/relatorios")
      .then((res) => setDados(res.data))
      .catch((err) => console.error("Erro ao buscar relatório:", err));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Relatórios</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        {dados ? (
          <Graphs dados={dados} />
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </DashboardLayout>
  );
}
