import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: '¿Quiénes son Stake.com?',
    answer: 'Stake.com lidera la industria del juego online desde 2017 ofreciendo una amplia variedad de opciones de casino online y apuestas deportivas. Actualmente opera en todo el mundo con 15 idiomas diferentes disponibles. Stake Casino es una plataforma reputada y segura que cuenta con divisas de todo el mundo y opciones de criptoapuestas para juegos de slots online, originales de Stake y juegos de casino en vivo. La sección de Deportes de Stake ofrece cuotas inmejorables en los principales eventos deportivos, incluyendo una amplia gama de ligas de eSports. Ofrecemos bonos de apuestas y promociones asiduamente y una experiencia exclusiva en nuestro Club VIP.',
  },
  {
    id: '2',
    question: '¿Stake Tiene Licencia?',
    answer: 'Sí, Stake está operado y pertenece a Medium Rare N.V., con número de registro 145353 y dirección registrada en Curaçao. Contamos con todas las licencias necesarias para operar como plataforma de juego online.',
  },
  {
    id: '3',
    question: '¿Es Seguro Apostar en Stake?',
    answer: 'Absolutamente. Stake utiliza la última tecnología de encriptación SSL para proteger todos los datos de los usuarios. Además, todos nuestros juegos están verificados por terceros para garantizar la equidad y transparencia. Contamos con medidas de seguridad de nivel bancario.',
  },
  {
    id: '4',
    question: '¿Con Qué Divisas Puedo Apostar?',
    answer: 'Stake acepta múltiples divisas incluyendo USD, EUR, GBP, CAD, AUD, JPY y una amplia variedad de criptomonedas como Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), Dogecoin (DOGE) y muchas más.',
  },
  {
    id: '5',
    question: '¿A Qué Tipo de Juegos de Casino Puedo Jugar?',
    answer: 'En Stake encontrarás una amplia variedad de juegos incluyendo: slots de los mejores proveedores, juegos originales exclusivos de Stake, casino en vivo con crupieres reales, ruleta, blackjack, póker, baccarat y muchos más.',
  },
  {
    id: '6',
    question: '¿En Qué Deportes Puedo Apostar?',
    answer: 'Stake ofrece apuestas deportivas en fútbol, baloncesto, tenis, béisbol, hockey sobre hielo, fútbol americano, MMA, boxeo, golf, rugby, cricket y una extensa selección de eSports incluyendo CS:GO, Dota 2, League of Legends, Valorant y más.',
  },
  {
    id: '7',
    question: '¿Cómo Puedo Ver Las Retransmisiones en Directo?',
    answer: 'Stake ofrece transmisiones en vivo de eventos deportivos seleccionados directamente en la plataforma. Simplemente navega a la sección de deportes, selecciona un evento con el icono de "EN VIVO" y disfruta de la transmisión gratuita mientras apuestas.',
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-[#3A3F4A]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 px-4 text-left hover:bg-[#23262E] transition-colors rounded-lg"
      >
        <span className="text-white font-medium pr-4">{item.question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}
      >
        <p className="px-4 text-gray-400 text-sm leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('1');

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          ¿Tienes Más Preguntas?
        </h2>
        
        <div className="bg-[#1A1D24] rounded-xl">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
