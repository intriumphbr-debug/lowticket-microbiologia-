'use client';

import { useEffect } from 'react';

interface ProductCarouselProps {
  title: string;
  subtitle: string;
  items: Array<{
    image: string;
    title: string;
  }>;
  reverse?: boolean;
}

const iconMap: Record<string, string> = {
  'Reflexo e reação': '&#9889;',
  'Quedas e defesas': '&#9679;',
  'Posicionamento': '&#9678;',
  'Saídas e bolas aéreas': '&#9650;',
  'Situações de 1x1': '&#9670;',
  'Jogo com os pés': '&#10132;',
  'Fundamentos': '&#9632;',
  'Treinos combinados': '&#10022;',
};

const subtitleMap: Record<string, string> = {
  'Reflexo e reação': 'Estímulo, reação e segunda defesa',
  'Quedas e defesas': 'Queda, encaixe e recuperação',
  'Posicionamento': 'Ângulo, cobertura e leitura',
  'Saídas e bolas aéreas': 'Saída, cruzamento e dividida',
  'Situações de 1x1': 'Espaço, tempo e decisão',
  'Jogo com os pés': 'Passe, domínio e reposição',
  'Fundamentos': 'Postura, deslocamento e encaixe',
  'Treinos combinados': 'Sequências e situações de jogo',
};

function CarouselCard({ title, image }: { title: string; image: string }) {
  if (image) {
    return (
      <div className="relative w-full h-full rounded-2xl overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          decoding="async"
        />
      </div>
    );
  }

  const sub = subtitleMap[title];

  return (
    <div
      className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3 p-4 border"
      style={{ backgroundColor: '#FFFFFF', borderColor: '#D8D4CD' }}
    >
      {/* Hexagon accent */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ backgroundColor: '#003F2D' }}
        dangerouslySetInnerHTML={{ __html: iconMap[title] ?? '&#9881;' }}
      />
      <p className="text-center font-grotesk text-sm sm:text-base leading-snug" style={{ color: '#101313' }}>
        {title}
      </p>
      {sub && (
        <p className="text-center text-[10px] sm:text-xs leading-snug" style={{ color: '#5E6267' }}>
          {sub}
        </p>
      )}
      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl"
        style={{ backgroundColor: '#003F2D' }}
      />
    </div>
  );
}

export function ProductCarousel({ title, subtitle, items, reverse = false }: ProductCarouselProps) {
  useEffect(() => {
    items.forEach((item) => {
      if (item.image) {
        const img = new Image();
        img.src = item.image;
        img.crossOrigin = 'anonymous';
      }
    });
  }, [items]);

  const trackItems = [...items, ...items];

  return (
    <section className="w-full bg-[#FFFFFF] overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="mobile-content">
        {/* Título e Subtítulo */}
        <div className="flex flex-col items-center text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty text-foreground">
            {title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-2xl" style={{ color: '#5E6267' }}>
            {subtitle}
          </p>
        </div>
      </div>

        <style>{`
          @keyframes marquee-forward {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 0.5rem)); }
          }
          @keyframes marquee-backward {
            0% { transform: translateX(calc(-50% - 0.5rem)); }
            100% { transform: translateX(0); }
          }
          .carousel-track {
            display: flex;
            width: max-content;
            gap: 1rem;
            will-change: transform;
          }
          .carousel-track.forward {
            animation: marquee-forward 40s linear infinite;
          }
          .carousel-track.backward {
            animation: marquee-backward 40s linear infinite;
          }
          .carousel-item {
            flex-shrink: 0;
            width: 200px;
            height: auto;
            aspect-ratio: 3 / 4;
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            .carousel-item { width: 240px; }
            .carousel-track { gap: 1.5rem; }
          }
          @media (min-width: 1025px) {
            .carousel-item { width: 280px; }
            .carousel-track { gap: 2rem; }
          }
        `}</style>

        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className={`carousel-track ${reverse ? 'backward' : 'forward'}`}>
            {trackItems.map((item, idx) => (
              <div key={idx} className="carousel-item">
                <CarouselCard title={item.title} image={item.image} />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
        </div>
    </section>
  );
}
