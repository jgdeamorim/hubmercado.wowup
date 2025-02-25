import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepta erros da API e loga no console
const handleRequestError = (error: any) => {
  console.error("Erro na requisição:", error.response?.data || error.message);
  throw error.response?.data || error;
};

// 📌 **Autenticação**
export const login = async (email: string, senha: string) => {
  try {
    const response = await api.post("/auth/login", { email, senha });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    return handleRequestError(error);
  }
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
    localStorage.removeItem("token");
  } catch (error) {
    return handleRequestError(error);
  }
};

export const getPerfil = async () => {
  try {
    return await api.get("/perfil").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Clientes**
export const getClientes = async () => {
  try {
    return await api.get("/clientes").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Produtos**
export const getProdutos = async () => {
  try {
    return await api.get("/produtos").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Relatórios**
export const getRelatorios = async () => {
  try {
    return await api.get("/relatorios").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Notificações**
export const getNotificacoes = async () => {
  try {
    return await api.get("/notificacoes").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Mercado Livre**
export const getProdutosML = async () => {
  try {
    return await api.get("/mercadolivre/produtos").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};

// 📌 **Bling**
export const getProdutosBling = async () => {
  try {
    return await api.get("/bling/produtos").then((res) => res.data);
  } catch (error) {
    return handleRequestError(error);
  }
};
