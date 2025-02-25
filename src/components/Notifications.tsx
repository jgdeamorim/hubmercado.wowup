import { useEffect, useState } from "react";
import { getNotificacoes } from "@/services/api";

export default function Notifications() {
  const [notificacoes, setNotificacoes] = useState([]);

  useEffect(() => {
    getNotificacoes()
      .then((data) => setNotificacoes(data))
      .catch((err) => console.error("Erro ao buscar notificações:", err));
  }, []);

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Notificações</h2>
      <ul>
        {notificacoes.map((notificacao) => (
          <li key={notificacao.id} className="border-b p-2">{notificacao.mensagem}</li>
        ))}
      </ul>
    </div>
  );
}
