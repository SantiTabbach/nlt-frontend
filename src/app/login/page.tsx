'use client';

import type React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import LoginForm from '@/features/users/components/LoginForm';

export default function LoginPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
			<div className="max-w-md w-full">
				<div className="text-center mb-8">
					<Link
						href="/"
						className="inline-flex items-center text-green-600 hover:text-green-700 mb-4"
					>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Volver al inicio
					</Link>
					<h1 className="text-3xl font-bold text-green-800 mb-2">
						Iniciar Sesión
					</h1>
					<p className="text-gray-600">Accede a tu cuenta de No la tires</p>
				</div>
				<LoginForm />
				<div className="flex flex-col">
					<Link href="/customer">temporal customer</Link>
					<Link href="/business">temporal business</Link>
				</div>
			</div>
		</div>
	);
}
