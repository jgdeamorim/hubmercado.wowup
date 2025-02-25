import axios from "axios";

export const login = async (email: string, senha: string) => {
  const response = await axios.post("/api/auth/login", { email, senha });
  localStorage.setItem("token", response.data.access_token);
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
