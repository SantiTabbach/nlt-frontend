import { Leaf } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	return (
		<header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
			<Link className="flex items-center justify-center" href="/">
				<Leaf className="h-8 w-8 text-green-600" />
				<span className="ml-2 text-2xl font-bold text-green-800">
					No la tires
				</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:text-green-600 transition-colors"
					href="/login"
				>
					Iniciar Sesión
				</Link>
				<Link
					className="text-sm font-medium hover:text-green-600 transition-colors"
					href="/register"
				>
					Registrarse
				</Link>
			</nav>
		</header>
	);
};

export default Header;
