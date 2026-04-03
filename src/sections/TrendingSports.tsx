import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { sportsData } from '@/data/games';

export default function TrendingSports() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
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
              <span className="text-[#00E701] text-lg">⚡</span>
            </div>
            <h2 className="text-xl font-bold text-white">Deportes en tendencia</h2>
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
          {sportsData.map((sport) => (
            <div
              key={sport.id}
              className="flex-shrink-0 w-[160px] sm:w-[180px] snap-start group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:brightness-110">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${sport.color}`} />
                
                {/* Image */}
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg uppercase tracking-wide">
                    {sport.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
