import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import CookieBanner from '@/components/layout/CookieBanner';
import Hero from '@/sections/Hero';
import SearchBar from '@/sections/SearchBar';
import TrendingGames from '@/sections/TrendingGames';
import TrendingSports from '@/sections/TrendingSports';
import Promotions from '@/sections/Promotions';
import LiveBets from '@/sections/LiveBets';
import FAQ from '@/sections/FAQ';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1D24]">
      {/* Fixed Header */}
      <Header />
      
      {/* Fixed Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="md:pl-16 pt-16">
        <Hero />
        <SearchBar />
        <TrendingGames />
        <TrendingSports />
        <Promotions />
        <LiveBets />
        <FAQ />
        <Footer />
      </main>
      
      {/* Cookie Banner */}
      <CookieBanner />
    </div>
  );
}

export default App;
