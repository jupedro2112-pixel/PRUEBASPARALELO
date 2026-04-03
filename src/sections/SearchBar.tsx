import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

const categories = [
  { label: 'Casino', value: 'casino' },
  { label: 'Deportes', value: 'sports' },
  { label: 'Slots', value: 'slots' },
  { label: 'Casino en vivo', value: 'live' },
];

const tabs = [
  'Juegos en tendencia',
  'Recientes',
  'Favoritos',
  'Originales de Stake',
  'Slots',
  'Casino en vivo',
];

export default function SearchBar() {
  const [selectedCategory, setSelectedCategory] = useState('casino');
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState('Juegos en tendencia');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
          {/* Category Selector */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-4 py-3 bg-[#23262E] hover:bg-[#2C3038] border border-[#3A3F4A] rounded-lg text-white transition-colors min-w-[140px]"
            >
              <span className="font-medium">
                {categories.find(c => c.value === selectedCategory)?.label}
              </span>
              <ChevronDown className={`w-4 h-4 ml-auto transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 w-full bg-[#23262E] border border-[#3A3F4A] rounded-xl shadow-xl py-2 z-20 animate-in fade-in slide-in-from-top-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setShowDropdown(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-[#2C3038] transition-colors ${
                      selectedCategory === cat.value ? 'text-[#00E701]' : 'text-gray-300'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Busca tu juego"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-stake w-full pl-12"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mt-4 overflow-x-auto scrollbar-hide pb-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                activeTab === tab
                  ? 'bg-[#2C3038] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#23262E]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
