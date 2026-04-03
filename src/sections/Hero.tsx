import { useRef, useState } from 'react';
import { Chrome, Facebook } from 'lucide-react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  bgGradient: string;
}

function Card3D({ children, className = '', bgGradient }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('rotateX(0deg) rotateY(0deg)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
    setGlarePosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseLeave = () => {
    setTransform('rotateX(0deg) rotateY(0deg)');
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      className={`relative cursor-pointer ${className}`}
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden transition-transform duration-100 ease-out"
        style={{ 
          transform: transform,
          transformStyle: 'preserve-3d',
          background: bgGradient,
        }}
      >
        {/* Glare effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
          }}
        />
        {children}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[500px] flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              El Casino con apuestas deportivas más grande del mundo
            </h1>
            
            <button className="btn-primary text-lg px-8 py-4">
              Registrarse
            </button>
            
            <div className="space-y-3">
              <p className="text-gray-400 text-sm">O regístrate con</p>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#2C3038] hover:bg-[#3A3F4A] text-white rounded-lg transition-colors">
                  <Chrome className="w-5 h-5" />
                  <span className="text-sm font-medium">Google</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-[#2C3038] hover:bg-[#3A3F4A] text-white rounded-lg transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span className="text-sm font-medium">Facebook</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right: 3D Cards */}
          <div className="relative h-[350px] hidden lg:block">
            {/* Casino Card */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-56 h-72 z-10 animate-float">
              <Card3D 
                bgGradient="linear-gradient(135deg, #1e3a5f 0%, #0d1f33 100%)"
                className="w-full h-full"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  {/* Decorative elements */}
                  <div className="relative w-full h-full">
                    {/* Dice */}
                    <div className="absolute top-4 left-4 w-16 h-16 bg-red-500 rounded-xl shadow-lg flex items-center justify-center transform -rotate-12">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    {/* Cards */}
                    <div className="absolute top-8 right-4 w-14 h-20 bg-white rounded-lg shadow-lg transform rotate-12 flex items-center justify-center">
                      <span className="text-3xl text-red-500">♠</span>
                    </div>
                    <div className="absolute top-12 right-8 w-14 h-20 bg-white rounded-lg shadow-lg transform rotate-6 flex items-center justify-center">
                      <span className="text-3xl text-red-500">♥</span>
                    </div>
                    {/* Chips */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#00E701] rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-[#1A1D24] font-bold text-xl">$</span>
                    </div>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00E701] rounded-full animate-live-pulse"></span>
                      Casino
                    </span>
                    <span className="text-[#00E701] font-bold">40.231</span>
                  </div>
                </div>
              </Card3D>
            </div>
            
            {/* Sports Card */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-72 animate-float" style={{ animationDelay: '1.5s' }}>
              <Card3D 
                bgGradient="linear-gradient(135deg, #0d5f3a 0%, #0d331f 100%)"
                className="w-full h-full"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="relative w-full h-full">
                    {/* Soccer Ball */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <div className="relative w-20 h-20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-6 h-6 bg-black transform rotate-45"></div>
                        </div>
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black transform rotate-45"></div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-black transform rotate-45"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 bg-black transform rotate-45"></div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-2 w-4 h-4 bg-black transform rotate-45"></div>
                      </div>
                    </div>
                    {/* Stake Logo */}
                    <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                      <span className="text-2xl font-bold text-white italic">Stake</span>
                    </div>
                    {/* Basketball */}
                    <div className="absolute bottom-8 right-4 w-12 h-12 bg-orange-500 rounded-full shadow-lg overflow-hidden">
                      <div className="absolute inset-0 border-2 border-black/30 rounded-full"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-black/30"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-black/30 transform -rotate-12"></div>
                    </div>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00E701] rounded-full animate-live-pulse"></span>
                      Deportes
                    </span>
                    <span className="text-[#00E701] font-bold">29.492</span>
                  </div>
                </div>
              </Card3D>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
