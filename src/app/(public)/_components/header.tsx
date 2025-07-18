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
import { Menu } from "lucide-react";

export function Header() {
	return (
		<header className="fixed top-0 right-0 left-0 z-[999] py-4 px-6 bg-amber-50">

			<div className="container mx-auto flex items-center justify-between">
				<Link href="/" className="text-3xl font-bold text-zinc-900">
					Odonto<span className="text-blue-800">SaaS</span>
				</Link>

				<nav className="hidden md:flex items-center">
					<Link href="/" className="text-lg">Home</Link>
					<Link href="/dashboard" className="text-lg">Dashboard</Link>
				</nav>

				<Sheet>
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
						<nav>
							<Link href="/" className="text-lg">Home</Link>
							<Link href="/dashboard" className="text-lg">Dashboard</Link>
						</nav>
					</SheetContent>
				</Sheet>

			</div>
		</header>
	);
}
