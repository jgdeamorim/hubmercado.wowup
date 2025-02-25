import DashboardLayout from "@/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getPerfil } from "@/services/api";

export default function Perfil() {
  const [perfil, setPerfil] = useState({ nome: "", email: "" });

  useEffect(() => {
    getPerfil()
      .then((data) => setPerfil(data))
      .catch((err) => console.error("Erro ao buscar perfil:", err));
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-xl font-semibold mb-4">Meu Perfil</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p><strong>Nome:</strong> {perfil.nome}</p>
        <p><strong>Email:</strong> {perfil.email}</p>
      </div>
    </DashboardLayout>
  );
}
