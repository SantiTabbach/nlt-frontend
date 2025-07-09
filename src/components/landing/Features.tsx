import { Heart, ShoppingBag, Users } from 'lucide-react';
import React from 'react';

const Features = () => {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white">
			<div className="container px-4 md:px-6 mx-auto">
				<div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<ShoppingBag className="h-8 w-8 text-green-600" />
						</div>
						<h3 className="text-xl font-bold text-green-800">Para Comercios</h3>
						<p className="text-gray-600">
							Vende tus excedentes de comida a precios reducidos y reduce el
							desperdicio de tu business.
						</p>
					</div>
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<Users className="h-8 w-8 text-green-600" />
						</div>
						<h3 className="text-xl font-bold text-green-800">Para Clientes</h3>
						<p className="text-gray-600">
							Descubre comida deliciosa a precios increíbles mientras ayudas al
							medio ambiente.
						</p>
					</div>
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
							<Heart className="h-8 w-8 text-green-600" />
						</div>
						<h3 className="text-xl font-bold text-green-800">
							Para el Planeta
						</h3>
						<p className="text-gray-600">
							Cada compra evita que comida perfectamente buena termine en la
							basura.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
