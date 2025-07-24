import { DefaultSession, User } from "next-auth";

// Importando o tipo User do next-auth para estender a interface Session
// Isso permite adicionar propriedades personalizadas ao usuário na sessão
// Esssas propriedades podem incluir as infos de um usuário no banco de dados
// e outras informações adicionais que você deseja incluir na sessão
declare module "next-auth" {
	// Adiciona propriedades personalizadas ao tipo User
  interface Session {
    user: User & DefaultSession["user"];
	}
}

interface User {
  id: string;
  name: string;
  email: string;
	emailVerified?: null | string | boolean
  image?: string;
	stripe_customer_id?: string;
	times: string[];
	address?: string;
	phone?: string;
	status: boolean;
  createdAt: string;
  updatedAt: string;
}
