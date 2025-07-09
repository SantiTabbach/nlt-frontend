import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="flex flex-col items-center space-y-4 text-center">
					<div className="space-y-2">
						<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
							Rescata comida, salva el planeta
						</h1>
						<p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
							Conectamos comercios con excedentes de comida con personas que
							quieren hacer la diferencia. Reduce el desperdicio alimentario y
							ahorra dinero.
						</p>
					</div>
					<div className="space-x-4">
						<Link
							className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
							href="/register"
						>
							Comenzar ahora
							<ArrowRight className="ml-2 h-4 w-4" />
						</Link>
						<Link
							className="inline-flex h-12 items-center justify-center rounded-md border border-green-600 bg-white px-8 text-sm font-medium text-green-600 shadow-sm transition-colors hover:bg-green-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-green-600"
							href="/como-funciona"
						>
							Cómo funciona
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
