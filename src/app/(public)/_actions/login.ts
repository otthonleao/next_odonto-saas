'use server'

import { signIn } from "@/lib/auth"

export async function handleRegister(provider: string) {
	// Chama a função signIn do NextAuth para iniciar o processo de login
	// Passa o provider como parâmetro para indicar qual provedor de autenticação será usado
	// Redireciona o usuário para a página de dashboard após o login bem-sucedido
	await signIn(provider, { redirectTo: "/dashboard" })
}
