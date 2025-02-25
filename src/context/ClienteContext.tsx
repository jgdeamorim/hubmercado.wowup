import { createContext, useContext, useState, ReactNode } from "react";

interface ClienteContextProps {
  cliente: string | null;
  setCliente: (cliente: string | null) => void;
}

const ClienteContext = createContext<ClienteContextProps | undefined>(undefined);

export const ClienteProvider = ({ children }: { children: ReactNode }) => {
  const [cliente, setCliente] = useState<string | null>(null);

  return (
    <ClienteContext.Provider value={{ cliente, setCliente }}>
      {children}
    </ClienteContext.Provider>
  );
};

export const useCliente = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error("useCliente deve ser usado dentro de um ClienteProvider");
  }
  return context;
};
