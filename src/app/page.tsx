import Link from "next/link"
import { ArrowRight, Leaf, ShoppingBag, Users, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/80 backdrop-blur-sm">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-green-800">No la tires</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/login">
            Iniciar Sesión
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/register">
            Registrarse
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
                Rescata comida, salva el planeta
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                Conectamos comercios con excedentes de comida con personas que quieren hacer la diferencia. Reduce el
                desperdicio alimentario y ahorra dinero.
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

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Para Comercios</h3>
              <p className="text-gray-600">
                Vende tus excedentes de comida a precios reducidos y reduce el desperdicio de tu negocio.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Para Usuarios</h3>
              <p className="text-gray-600">
                Descubre comida deliciosa a precios increíbles mientras ayudas al medio ambiente.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-800">Para el Planeta</h3>
              <p className="text-gray-600">Cada compra evita que comida perfectamente buena termine en la basura.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 No la tires. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/terminos">
            Términos de Servicio
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="/privacidad">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
