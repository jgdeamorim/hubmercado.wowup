import React from 'react';

interface Notificacao {
  id: number;
  mensagem: string;
}

interface NotificationsProps {
  notificacoes: Notificacao[];
}

const Notifications: React.FC<NotificationsProps> = ({ notificacoes }) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Notificações</h2>
      <ul>
        {notificacoes.map((notificacao) => (
          <li key={notificacao.id} className="border-b p-2">{notificacao.mensagem}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Notifications);
