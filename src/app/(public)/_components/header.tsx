'use client';

import React from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";

export function Header() {

	const [isOpen, setIsOpen] = React.useState(false);

	// Simulando uma sessão de usuário lodado.
	// true = usuário logado
	// false = usuário não logado
	const session = false;

	const navItems = [
		{ href: "/", label: "Home" },
		{ href: "/profissionais", label: "Profissionais" },
		{ href: "/pacientes", label: "Pacientes" },
		{ href: "/consultas", label: "Consultas" },
		{ href: "/dashboard", label: "Dashboard" },

	];

	const RenderNavLinks = () => (
		<>
			{navItems.map((item) => (
				<Button
					key={item.href}
					asChild
					className="bg-transparent hover:bg-transparent text-black shadow-none"
					onClick={() => setIsOpen(false)}
				>
					<Link href={item.href} className="text-base">{item.label}</Link>
				</Button>
			))}

			{/*
			Renderiza o link de acesso à clínica se o usuário estiver logado
			Caso contrário, renderiza o botão de acesso à clínica */}
			{session ? (
				<Link href="/dashboard" className="flex items-center justify-center gap-2">
					Acessar Clínica
				</Link>
			) : (
				<Button className="flex items-center justify-center gap-2 ml-4 mr-4">
					<LogIn />Fazer Login
				</Button>
			)}
		</>
	)

	return (
		<header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-amber-50">

			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="text-3xl font-bold text-zinc-900">
					Odonto<span className="text-blue-800">SaaS</span>
				</Link>

				{/* Oculta o menu em telas pequenas */}
				<nav className="hidden md:flex items-center space-x-4">
					<RenderNavLinks />
				</nav>

				{/* Menu lateral para telas pequenas */}
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button className="text-black hover:bg-transparent" variant="ghost" size="icon">
							<Menu className="h-6 w-6" />
						</Button>
					</SheetTrigger>

					<SheetContent side="right" className="w-[240px] sm:w-[300px] z-[9999]">
						<SheetHeader>
							<SheetTitle>Menu</SheetTitle>
							<SheetDescription>Sistema Odontológico</SheetDescription>
						</SheetHeader>
						<nav className="flex flex-col space-y-4 mt-6">
							<RenderNavLinks />
						</nav>
					</SheetContent>
				</Sheet>

			</div>
		</header>
	);
}
