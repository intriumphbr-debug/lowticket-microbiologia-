'use client';

import { Check } from 'lucide-react';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #2B145F 0%, #24114F 100%)' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: 'rgba(214, 166, 46, 0.12)', color: '#E7C25E', borderColor: 'rgba(214, 166, 46, 0.45)' }}>
              COMPRA 100% SEGURA E PROTEGIDA
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
            <h1 className="font-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-pretty text-center max-w-4xl" style={{ color: '#FFFFFF' }}>
              MICROBIOLOGIA <span style={{ color: '#D6A62E' }}>VISUAL</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-center max-w-2xl" style={{ color: 'rgba(255,255,255,0.92)' }}>
              +140 recursos visuais para estudar, revisar e finalmente organizar a microbiologia na cabeça
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-center max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Mapas visuais, comparativos, fichas de revisão, resumos express e testes de memória para transformar assuntos cheios de nomes, classificações e processos em conteúdos muito mais fáceis de visualizar e revisar.
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <ImagePlaceholder
                label="Mockup do Microbiologia Visual"
                ratio="4 / 3"
                variant="dark"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#16C766',
                color: '#0A2A16',
                border: '1px solid #16C766',
                boxShadow: '0 8px 22px rgba(22, 199, 102, 0.4)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#12A85A';
                e.currentTarget.style.borderColor = '#12A85A';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(22, 199, 102, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#16C766';
                e.currentTarget.style.borderColor = '#16C766';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(22, 199, 102, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR O MICROBIOLOGIA VISUAL
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: 'rgba(255,255,255,0.78)' }}>Acesso imediato após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', 'Material 100% digital', 'Acesso imediato'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#FFFFFF' }}><span className="rounded-full flex items-center justify-center" style={{ backgroundColor: '#D6A62E', color: '#2B145F', width: '18px', height: '18px' }}><Check size={11} strokeWidth={3} aria-hidden="true" /></span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImagePlaceholder({
  label,
  ratio = '4 / 3',
  variant = 'light',
}: {
  label: string;
  ratio?: string;
  variant?: 'light' | 'dark';
}) {
  const dark = variant === 'dark';
  return (
    <div
      className="w-full max-w-lg flex flex-col items-center justify-center gap-2 rounded-2xl text-center"
      style={{
        aspectRatio: ratio,
        border: `1.5px dashed ${dark ? 'rgba(214, 166, 46, 0.55)' : '#D6A62E'}`,
        backgroundColor: dark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
        boxShadow: dark ? 'none' : '0 12px 30px rgba(43, 20, 95, 0.12)',
        padding: '20px',
      }}
    >
      <span
        className="flex items-center justify-center rounded-full text-lg"
        style={{
          width: '46px',
          height: '46px',
          backgroundColor: dark ? 'rgba(214, 166, 46, 0.15)' : '#EEF2F5',
          color: '#D6A62E',
          border: '1px solid rgba(214, 166, 46, 0.5)',
        }}
        aria-hidden="true"
      >
        +
      </span>
      <p className="font-grotesk text-sm sm:text-base" style={{ color: dark ? 'rgba(255,255,255,0.92)' : '#2B145F' }}>
        {label}
      </p>
      <p className="text-[11px] sm:text-xs" style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#43505C' }}>
        Imagem em breve
      </p>
    </div>
  );
}
