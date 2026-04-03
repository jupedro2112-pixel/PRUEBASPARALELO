import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Casino', href: '#', active: false },
  { label: 'Deportes', href: '#', active: false },
  { label: 'Promociones', href: '#', active: false },
  { label: 'Afiliado', href: '#', active: false },
  { label: 'Club VIP', href: '#', active: false },
  { label: 'Blog', href: '#', active: false },
  { label: 'Foro', href: '#', active: false },
  { label: 'Patrocinios', href: '#', active: false },
  { label: 'Juego Responsable', href: '#', active: false },
];

export default function Header() {
  const [showMore, setShowMore] = useState(false);

  const visibleLinks = navLinks.slice(0, 5);
  const moreLinks = navLinks.slice(5);

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#1A1D24] border-b border-[#3A3F4A] z-50">
      <div className="h-full flex items-center justify-between px-4">
        {/* Left: Logo and Nav */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold text-white italic tracking-tight">
              Stake
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {visibleLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-[#2C3038]"
              >
                {link.label}
              </a>
            ))}
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-[#2C3038]"
              >
                <span>Más</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showMore ? 'rotate-180' : ''}`} />
              </button>
              
              {showMore && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#23262E] border border-[#3A3F4A] rounded-xl shadow-xl py-2 animate-in fade-in slide-in-from-top-2">
                  {moreLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#2C3038] transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Language */}
          <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-[#2C3038]">
            <Globe className="w-4 h-4" />
            <span>ES</span>
          </button>

          {/* Support */}
          <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-[#2C3038]">
            <span>Soporte en vivo</span>
          </button>

          {/* Auth Buttons */}
          <button className="px-4 py-2 text-sm font-medium text-white hover:bg-[#2C3038] rounded-lg transition-colors">
            Iniciar sesión
          </button>
          <button className="px-4 py-2 text-sm font-semibold text-[#1A1D24] bg-[#00E701] hover:bg-[#00ff00] rounded-lg transition-colors">
            Registrarse
          </button>
        </div>
      </div>
    </header>
  );
}
