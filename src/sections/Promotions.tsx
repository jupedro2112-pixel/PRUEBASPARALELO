import { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Zap, Trophy, Crown } from 'lucide-react';

const promotions = [
  {
    id: '1',
    badge: 'Nueva Función',
    badgeColor: 'bg-blue-500',
    title: 'El Escudo de Stake',
    description: '3+ más selecciones para el escudo',
    cta: 'Leer más',
    icon: Shield,
    gradient: 'from-blue-600/20 to-blue-800/20',
    borderColor: 'hover:border-blue-500/50',
  },
  {
    id: '2',
    badge: 'Solo en Stake',
    badgeColor: 'bg-purple-500',
    title: "Cut N' Crash",
    description: 'Coreffect Interactive',
    cta: 'Leer más',
    icon: Zap,
    gradient: 'from-purple-600/20 to-purple-800/20',
    borderColor: 'hover:border-purple-500/50',
  },
  {
    id: '3',
    badge: 'Promoción',
    badgeColor: 'bg-orange-500',
    title: 'NBA',
    description: 'Pago a Medio Tiempo',
    cta: 'Leer más',
    icon: Trophy,
    gradient: 'from-orange-600/20 to-orange-800/20',
    borderColor: 'hover:border-orange-500/50',
  },
  {
    id: '4',
    badge: 'Only on Stake',
    badgeColor: 'bg-[#00E701]',
    title: 'Solo en Stake VIP Boost',
    description: '2x Progresión VIP',
    cta: 'Leer más',
    icon: Crown,
    gradient: 'from-green-600/20 to-green-800/20',
    borderColor: 'hover:border-[#00E701]/50',
  },
];

export default function Promotions() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#2C3038] rounded-lg flex items-center justify-center">
              <span className="text-[#00E701] text-lg">🎁</span>
            </div>
            <h2 className="text-xl font-bold text-white">Promociones</h2>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 bg-[#2C3038] hover:bg-[#3A3F4A] rounded-lg flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 bg-[#2C3038] hover:bg-[#3A3F4A] rounded-lg flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
        >
          {promotions.map((promo) => {
            const Icon = promo.icon;
            return (
              <div
                key={promo.id}
                className={`flex-shrink-0 w-[280px] snap-start group cursor-pointer`}
              >
                <div 
                  className={`relative h-40 rounded-xl overflow-hidden border border-transparent ${promo.borderColor} hover:border-opacity-50 transition-all duration-300 bg-gradient-to-br ${promo.gradient} bg-[#23262E] p-5`}
                >
                  {/* Badge */}
                  <span className={`inline-block px-2 py-1 text-xs font-semibold text-white ${promo.badgeColor} rounded-md mb-3`}>
                    {promo.badge}
                  </span>

                  {/* Content */}
                  <h3 className="text-white font-bold text-lg mb-1">{promo.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{promo.description}</p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-[#00E701] font-medium text-sm group-hover:gap-3 transition-all">
                    <span>{promo.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Decorative Icon */}
                  <div className="absolute right-4 bottom-4 opacity-10">
                    <Icon className="w-16 h-16" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
