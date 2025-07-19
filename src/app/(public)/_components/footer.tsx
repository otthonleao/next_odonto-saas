import Link from "next/link";

export function Footer() {
	return (
    <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
      <p>
				Todos direitos reservados © {new Date().getFullYear()} - <Link href="https://github.com/otthnoleao" className="hover:text-black duration-300">@otthnoleao</Link>
      </p>
    </footer>
  )
}
