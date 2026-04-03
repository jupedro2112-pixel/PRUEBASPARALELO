import { useState } from 'react';
import { 
  Menu, 
  Dices, 
  Trophy, 
  Gift, 
  Users, 
  Crown, 
  Newspaper, 
  MessageSquare,
  Shield,
  HeartHandshake
} from 'lucide-react';

const sidebarItems = [
  { icon: Menu, label: 'Menú', href: '#' },
  { icon: Dices, label: 'Casino', href: '#', active: true },
  { icon: Trophy, label: 'Deportes', href: '#' },
  { icon: Gift, label: 'Promociones', href: '#' },
  { icon: Users, label: 'Afiliado', href: '#' },
  { icon: Crown, label: 'Club VIP', href: '#' },
  { icon: Newspaper, label: 'Blog', href: '#' },
  { icon: MessageSquare, label: 'Foro', href: '#' },
  { icon: Shield, label: 'Patrocinios', href: '#' },
  { icon: HeartHandshake, label: 'Juego Responsable', href: '#' },
];

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="fixed left-0 top-16 bottom-0 w-16 bg-[#1A1D24] border-r border-[#3A3F4A] z-40 hidden md:flex flex-col items-center py-4 overflow-y-auto scrollbar-hide">
      {sidebarItems.map((item) => {
        const Icon = item.icon;
        const isHovered = hoveredItem === item.label;
        
        return (
          <a
            key={item.label}
            href={item.href}
            className={`relative flex items-center justify-center w-12 h-12 mb-2 rounded-xl transition-all duration-200 group ${
              item.active 
                ? 'bg-[#2C3038] text-white' 
                : 'text-gray-400 hover:text-white hover:bg-[#2C3038]'
            }`}
            onMouseEnter={() => setHoveredItem(item.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Icon className={`w-5 h-5 transition-transform duration-200 ${isHovered ? 'scale-110' : ''}`} />
            
            {/* Tooltip */}
            <span className="absolute left-full ml-3 px-3 py-2 bg-[#23262E] text-white text-sm rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-[#3A3F4A]">
              {item.label}
            </span>
          </a>
        );
      })}
    </aside>
  );
}
