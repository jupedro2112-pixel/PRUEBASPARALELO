import { useState } from 'react';

interface Bet {
  id: string;
  game: string;
  user: string;
  time: string;
  bet: string;
  multiplier: string;
  payout: string;
  isWin: boolean;
}

const casinoBets: Bet[] = [
  { id: '1', game: 'Mines', user: 'Oculto', time: '12:27 p.m.', bet: '$718.18', multiplier: '6,26×', payout: '$4,492.54', isWin: true },
  { id: '2', game: 'Gates of Olympus 1000', user: 'Oculto', time: '12:27 p.m.', bet: '$2,000.00', multiplier: '0,11×', payout: '-$1,789.00', isWin: false },
  { id: '3', game: 'Duck Hunters', user: 'Oculto', time: '12:27 p.m.', bet: '$1,077.34', multiplier: '0,19×', payout: '-$877.31', isWin: false },
  { id: '4', game: 'Baccarat', user: 'Oculto', time: '12:27 p.m.', bet: '$3,095.00', multiplier: '2,00×', payout: '$6,190.00', isWin: true },
  { id: '5', game: 'Seamen', user: 'Oculto', time: '12:27 p.m.', bet: '$344.72', multiplier: '23,70×', payout: '$8,168.44', isWin: true },
  { id: '6', game: 'San Quentin', user: 'Oculto', time: '12:27 p.m.', bet: '$501.31', multiplier: '3,34×', payout: '$1,675.07', isWin: true },
  { id: '7', game: 'Brazilian Roulette', user: 'Oculto', time: '12:27 p.m.', bet: '$45,000.00', multiplier: '0,00×', payout: '-$45,000.00', isWin: false },
];

const sportsBets: Bet[] = [
  { id: '1', game: 'Real Madrid vs Barcelona', user: 'Oculto', time: '12:25 p.m.', bet: '$500.00', multiplier: '2,10×', payout: '$1,050.00', isWin: true },
  { id: '2', game: 'Lakers vs Warriors', user: 'Oculto', time: '12:23 p.m.', bet: '$1,200.00', multiplier: '1,85×', payout: '-$1,200.00', isWin: false },
  { id: '3', game: 'NFL: Chiefs vs 49ers', user: 'Oculto', time: '12:20 p.m.', bet: '$800.00', multiplier: '1,95×', payout: '$1,560.00', isWin: true },
  { id: '4', game: 'Wimbledon Final', user: 'Oculto', time: '12:18 p.m.', bet: '$300.00', multiplier: '3,50×', payout: '-$300.00', isWin: false },
  { id: '5', game: 'UFC 300', user: 'Oculto', time: '12:15 p.m.', bet: '$2,000.00', multiplier: '1,75×', payout: '$3,500.00', isWin: true },
];

const raceLeaderboard = [
  { id: '1', user: 'CryptoKing', wagered: '$1,250,000', prize: '$50,000' },
  { id: '2', user: 'LuckyStrike', wagered: '$980,000', prize: '$30,000' },
  { id: '3', user: 'HighRoller99', wagered: '$750,000', prize: '$20,000' },
  { id: '4', user: 'StakeMaster', wagered: '$620,000', prize: '$10,000' },
  { id: '5', user: 'BetPro', wagered: '$480,000', prize: '$5,000' },
];

const tabs = [
  { id: 'casino', label: 'Apuestas de Casino' },
  { id: 'sports', label: 'Apuestas Deportivas' },
  { id: 'race', label: 'Clasificación de la Carrera' },
];

export default function LiveBets() {
  const [activeTab, setActiveTab] = useState('casino');

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-[#2C3038] text-white'
                  : 'text-gray-400 hover:text-white hover:bg-[#23262E]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-[#23262E] rounded-xl overflow-hidden">
          {activeTab === 'casino' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#3A3F4A]">
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Juego</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Usuario</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Hora</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Monto de Apuesta</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Multiplicador</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Pago</th>
                  </tr>
                </thead>
                <tbody>
                  {casinoBets.map((bet) => (
                    <tr 
                      key={bet.id} 
                      className="border-b border-[#3A3F4A]/50 hover:bg-[#2C3038] transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3 text-white text-sm">{bet.game}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{bet.user}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{bet.time}</td>
                      <td className="px-4 py-3 text-white text-sm">{bet.bet}</td>
                      <td className="px-4 py-3 text-white text-sm">{bet.multiplier}</td>
                      <td className={`px-4 py-3 text-sm font-medium ${bet.isWin ? 'text-[#00E701]' : 'text-red-500'}`}>
                        {bet.payout}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'sports' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#3A3F4A]">
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Evento</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Usuario</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Hora</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Monto de Apuesta</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Cuota</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Pago</th>
                  </tr>
                </thead>
                <tbody>
                  {sportsBets.map((bet) => (
                    <tr 
                      key={bet.id} 
                      className="border-b border-[#3A3F4A]/50 hover:bg-[#2C3038] transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3 text-white text-sm">{bet.game}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{bet.user}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{bet.time}</td>
                      <td className="px-4 py-3 text-white text-sm">{bet.bet}</td>
                      <td className="px-4 py-3 text-white text-sm">{bet.multiplier}</td>
                      <td className={`px-4 py-3 text-sm font-medium ${bet.isWin ? 'text-[#00E701]' : 'text-red-500'}`}>
                        {bet.payout}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'race' && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#3A3F4A]">
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Posición</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Usuario</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Total Apostado</th>
                    <th className="text-left px-4 py-3 text-gray-400 text-sm font-medium">Premio</th>
                  </tr>
                </thead>
                <tbody>
                  {raceLeaderboard.map((entry, index) => (
                    <tr 
                      key={entry.id} 
                      className="border-b border-[#3A3F4A]/50 hover:bg-[#2C3038] transition-colors cursor-pointer"
                    >
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                          index === 0 ? 'bg-yellow-500 text-black' :
                          index === 1 ? 'bg-gray-400 text-black' :
                          index === 2 ? 'bg-orange-600 text-white' :
                          'bg-[#2C3038] text-gray-400'
                        }`}>
                          {index + 1}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-white text-sm">{entry.user}</td>
                      <td className="px-4 py-3 text-white text-sm">{entry.wagered}</td>
                      <td className="px-4 py-3 text-[#00E701] text-sm font-medium">{entry.prize}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
