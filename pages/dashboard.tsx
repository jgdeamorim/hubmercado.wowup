import DashboardLayout from "@/layouts/DashboardLayout";
import Widgets from "@/components/Widgets";
import Graphs from "@/components/Graphs";

export default function Dashboard() {
  const dados = {
    meses: ["Jan", "Fev", "Mar", "Abr", "Mai"],
    faturamento: [1000, 1200, 1500, 2000, 2200],
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Widgets title="Total de Vendas" value="R$ 12.500" />
        <Widgets title="Clientes Ativos" value="320" />
        <Widgets title="Pedidos Pendentes" value="15" />
      </div>
      <div className="mt-6">
        <Graphs dados={dados} />
      </div>
    </DashboardLayout>
  );
}
