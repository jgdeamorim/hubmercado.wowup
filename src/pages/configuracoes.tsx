import DashboardLayout from "@/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Configuracoes() {
  const [credenciais, setCredenciais] = useState({
    bling_api_key: "",
    mercadolivre_access_token: "",
  });

  useEffect(() => {
    axios.get("/api/credenciais")
      .then((res) => setCredenciais(res.data))
      .catch((err) => console.error("Erro ao buscar credenciais:", err));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredenciais({ ...credenciais, [e.target.name]: e.target.value });
  };

  const salvarConfiguracoes = () => {
    axios.post("/api/credenciais", credenciais)
      .then(() => alert("Configurações salvas com sucesso!"))
      .catch((err) => console.error("Erro ao salvar configurações:", err));
  };

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Configurações</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <label className="block font-semibold mb-2">API Key Bling</label>
        <input type="text" name="bling_api_key" value={credenciais.bling_api_key} onChange={handleChange} className="w-full p-2 border rounded" />

        <label className="block font-semibold mt-4 mb-2">Access Token Mercado Livre</label>
        <input type="text" name="mercadolivre_access_token" value={credenciais.mercadolivre_access_token} onChange={handleChange} className="w-full p-2 border rounded" />

        <button onClick={salvarConfiguracoes} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Salvar Configurações
        </button>
      </div>
    </DashboardLayout>
  );
}
