export interface Game {
  id: string;
  name: string;
  provider: string;
  players: number;
  image: string;
  color: string;
}

export const trendingGames: Game[] = [
  {
    id: '1',
    name: 'Sweet Bonanza 1000',
    provider: 'Pragmatic Play',
    players: 981,
    image: 'https://images.unsplash.com/photo-1582056615449-5dcb2332b3b4?w=300&h=400&fit=crop',
    color: 'from-pink-500 to-purple-600',
  },
  {
    id: '2',
    name: 'Gates of Olympus 1000',
    provider: 'Pragmatic Play',
    players: 786,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    color: 'from-blue-500 to-cyan-600',
  },
  {
    id: '3',
    name: 'Jelly Express',
    provider: 'Pragmatic Play',
    players: 646,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop',
    color: 'from-green-400 to-teal-500',
  },
  {
    id: '4',
    name: 'Power of Ten',
    provider: 'Hacksaw Gaming',
    players: 193,
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=400&fit=crop',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: '5',
    name: 'Wild Ruin',
    provider: 'Pocket Play',
    players: 140,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=400&fit=crop',
    color: 'from-red-500 to-pink-600',
  },
  {
    id: '6',
    name: 'Sugar Rush 1000',
    provider: 'Pragmatic Play',
    players: 716,
    image: 'https://images.unsplash.com/photo-1499195333224-3ce974eecb47?w=300&h=400&fit=crop',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: '7',
    name: 'Gates of Olympus Super Scatter',
    provider: 'Pragmatic Play',
    players: 550,
    image: 'https://images.unsplash.com/photo-1605806616949-1e87b487bc2a?w=300&h=400&fit=crop',
    color: 'from-amber-400 to-yellow-500',
  },
  {
    id: '8',
    name: 'Sword Drop',
    provider: 'Giga',
    players: 140,
    image: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?w=300&h=400&fit=crop',
    color: 'from-indigo-500 to-blue-600',
  },
  {
    id: '9',
    name: 'Mines',
    provider: 'Stake Originals',
    players: 298,
    image: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=300&h=400&fit=crop',
    color: 'from-gray-600 to-gray-800',
  },
  {
    id: '10',
    name: 'Dice',
    provider: 'Stake Originals',
    players: 412,
    image: 'https://images.unsplash.com/photo-1551431009-a802eebd77b7?w=300&h=400&fit=crop',
    color: 'from-emerald-400 to-green-500',
  },
];

export const sportsData = [
  { id: '1', name: 'Fútbol', image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=300&h=400&fit=crop', color: 'from-blue-600 to-blue-800' },
  { id: '2', name: 'Baloncesto', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=300&h=400&fit=crop', color: 'from-orange-500 to-red-600' },
  { id: '3', name: 'Fútbol americano', image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=300&h=400&fit=crop', color: 'from-red-600 to-red-800' },
  { id: '4', name: 'Béisbol', image: 'https://images.unsplash.com/photo-1562077772-3bd5d61c5c39?w=300&h=400&fit=crop', color: 'from-blue-500 to-indigo-600' },
  { id: '5', name: 'Tenis', image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=300&h=400&fit=crop', color: 'from-green-500 to-emerald-600' },
  { id: '6', name: 'Hockey sobre hielo', image: 'https://images.unsplash.com/photo-1544298621-6e7a3f47e4a7?w=300&h=400&fit=crop', color: 'from-cyan-500 to-blue-600' },
  { id: '7', name: 'Críquet', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=300&h=400&fit=crop', color: 'from-green-600 to-teal-700' },
  { id: '8', name: 'MMA', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=300&h=400&fit=crop', color: 'from-red-500 to-rose-600' },
];
