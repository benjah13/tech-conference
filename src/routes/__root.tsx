import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import '../styles/globals.css'

function RootComponent() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}

function Navigation() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary-600">
            TechConf 2025
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              activeProps={{ className: 'text-primary-600 font-semibold' }}
            >
              Acceuil
            </Link>
            <Link 
              to="/schedule" 
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              activeProps={{ className: 'text-primary-600 font-semibold' }}
            >
              Programme
            </Link>
            <Link 
              to="/sponsors" 
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              activeProps={{ className: 'text-primary-600 font-semibold' }}
            >
              Sponsors
            </Link>
          </div>
          

        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechConf 2025</h3>
            <p className="text-gray-400">
              Une conférence Tech, par des passionnés pour des passionnés.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/schedule" className="hover:text-white transition-colors">Programme</Link></li>
              <li><Link to="/sponsors" className="hover:text-white transition-colors">Sponsors</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@techconf2025.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>Aix-en-Provence, France</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Nous suivre</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p>&copy; 2025 TechConf. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
