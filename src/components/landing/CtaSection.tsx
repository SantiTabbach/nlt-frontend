import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
							¿Listo para hacer la diferencia?
						</h2>
						<p className="mx-auto max-w-[600px] text-green-100 md:text-xl">
							Únete a nuestra comunidad y comienza a rescatar comida hoy mismo.
						</p>
					</div>
					<div className="space-x-4">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-600 shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
							href="/register"
						>
							Registrarse Gratis
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
