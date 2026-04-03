import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookiesAccepted');
    if (!hasAccepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
      <div className="bg-[#23262E] border border-[#3A3F4A] rounded-xl p-4 shadow-2xl">
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <p className="text-gray-300 text-sm">
              Usamos cookies con fines funcionales y analíticos.{' '}
              <a 
                href="#" 
                className="text-[#00E701] hover:underline"
              >
                Leer más
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-[#00E701] hover:bg-[#00ff00] text-[#1A1D24] text-sm font-semibold rounded-lg transition-colors"
            >
              Aceptar
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Cerrar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
