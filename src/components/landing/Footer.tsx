import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
			<p className="text-xs text-gray-500">
				© 2024 No la tires. Todos los derechos reservados.
			</p>
			<nav className="sm:ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-xs hover:underline underline-offset-4 text-gray-500"
					href="/terminos"
				>
					Términos de Servicio
				</Link>
				<Link
					className="text-xs hover:underline underline-offset-4 text-gray-500"
					href="/privacidad"
				>
					Privacidad
				</Link>
			</nav>
		</footer>
	);
};

export default Footer;
