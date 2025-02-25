import { Line } from "react-chartjs-2";

export default function Graphs({ dados }) {
  const data = {
    labels: dados.meses,
    datasets: [
      {
        label: "Faturamento Mensal",
        data: dados.faturamento,
        borderColor: "#4A90E2",
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Faturamento</h2>
      <Line data={data} />
    </div>
  );
}
