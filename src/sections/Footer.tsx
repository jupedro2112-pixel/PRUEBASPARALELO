const footerLinks = {
  casino: {
    title: 'Casino',
    links: [
      { label: 'Juegos de casino', href: '#' },
      { label: 'Slots', href: '#' },
      { label: 'Casino en vivo', href: '#' },
      { label: 'Ruleta', href: '#' },
      { label: 'Blackjack', href: '#' },
      { label: 'Póker', href: '#' },
      { label: 'Editores', href: '#' },
      { label: 'Promos y competiciones', href: '#' },
      { label: 'Stake Engine', href: '#' },
      { label: 'Stake Vendors', href: '#' },
    ],
  },
  sports: {
    title: 'Deportes',
    links: [
      { label: 'Apuestas deportivas', href: '#' },
      { label: 'Deportes en vivo', href: '#' },
      { label: 'Fútbol', href: '#' },
      { label: 'Básquet', href: '#' },
      { label: 'Tenis', href: '#' },
      { label: 'eSports', href: '#' },
      { label: 'Promociones', href: '#' },
      { label: 'Reglas de deportes', href: '#' },
      { label: 'Reglas de carreras', href: '#' },
    ],
  },
  support: {
    title: 'Soporte',
    links: [
      { label: 'Centro de ayuda', href: '#' },
      { label: 'Verificación', href: '#' },
      { label: 'Juego responsable', href: '#' },
      { label: 'Soporte en vivo', href: '#' },
      { label: 'Autoexclusión', href: '#' },
      { label: 'Solicitudes legales', href: '#' },
    ],
  },
  about: {
    title: 'Sobre Nosotros',
    links: [
      { label: 'Club VIP', href: '#' },
      { label: 'Afiliado', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política Anti-Lavado', href: '#' },
      { label: 'Términos y Condiciones', href: '#' },
    ],
  },
  payment: {
    title: 'Información de pago',
    links: [
      { label: 'Depósitos y retiros', href: '#' },
      { label: 'Guía de divisas', href: '#' },
      { label: 'Guía de criptos', href: '#' },
      { label: 'Criptos soportadas', href: '#' },
      { label: 'Guía de la Caja Fuerte', href: '#' },
      { label: 'Cuánto apostar', href: '#' },
    ],
  },
  guides: {
    title: 'Preguntas Frecuentes',
    links: [
      { label: 'Guías prácticas', href: '#' },
      { label: 'Guía del casino online', href: '#' },
      { label: 'Apuestas deportivas', href: '#' },
      { label: 'Ver deportes en vivo', href: '#' },
      { label: 'Guía de Stake VIP', href: '#' },
      { label: 'Margen de la Casa', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-[#111318] pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#3A3F4A] pt-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white italic">Stake</span>
            </div>
            
            <p className="text-gray-500 text-sm text-center md:text-right">
              © 2026 Stake.com | Todos los Derechos Reservados.
            </p>
          </div>
          
          {/* Legal Text */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">
              Stake está operado y pertenece a Medium Rare N.V., con número de registro 145353 y dirección registrada Seru Loraweg 17 B, Curaçao.
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Las empresas agentes de pago son Medium Rare Limited y MRS Tech Limited. Contáctanos en support@stake.com.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
