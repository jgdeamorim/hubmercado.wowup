import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import AuthLayout from "@/layouts/AuthLayout";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, senha });
      localStorage.setItem("token", response.data.access_token);
      router.push("/dashboard");
    } catch (error) {
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input type="email" placeholder="E-mail" className="border p-2 w-full mb-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" className="border p-2 w-full mb-2" value={senha} onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin} className="bg-primary text-white w-full p-2 rounded">Entrar</button>
    </AuthLayout>
  );
}
