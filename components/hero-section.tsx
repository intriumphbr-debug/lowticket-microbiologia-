'use client';

export function HeroSection({ onCtaClick }: { onCtaClick: () => void }) {
  const scrollToOffer = () => document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content flex flex-col items-center">
        <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-12">
          <div className="text-center">
            <p className="text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border" style={{ backgroundColor: '#DCF7E3', color: '#0F7A3D', borderColor: '#B7ECC4' }}>
              🔒 COMPRA 100% SEGURA E PROTEGIDA
            </p>
          </div>
          <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
            <h1 className="font-grotesk text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-pretty text-center max-w-4xl" style={{ color: '#FFFFFF' }}>
              <span style={{ color: '#7BE0A3' }}>80 Treinos de Goleiros Prontos</span> para Aplicar 
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center max-w-2xl" style={{ color: '#D5DDD8' }}>
              Tenha treinos completos e organizados para trabalhar reflexo, quedas, posicionamento, saídas do gol, bolas aéreas, situações de 1x1, jogo com os pés e muito mais. Execução passo a passo, adaptações e diagramas visuais.
            </p>
          </div>
          <div className="w-full flex justify-center py-2 sm:py-4 md:py-6 overflow-visible">
            <div className="w-full max-w-2xl flex justify-center items-center">
              <img
                src="/images/hero-mockup-goleiros.webp"
                alt="Coleção completa: 80 Treinos Prontos para Goleiros e os 3 bônus — 20 Aquecimentos Específicos, 20 Treinos para 1 Goleiro e Planner de Treinos para Goleiros"
                className="w-full h-auto max-w-md sm:max-w-lg md:max-w-2xl"
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 sm:gap-3 w-full">
            <button
              onClick={scrollToOffer}
              className="w-full sm:w-auto font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-12 rounded-full text-sm sm:text-base md:text-lg active:scale-95 cta-animate"
              style={{
                background: '#16C766',
                color: '#FFFFFF',
                border: '1px solid #16C766',
                boxShadow: '0 8px 22px rgba(22, 199, 102, 0.28)',
                transition: 'all 200ms ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0EAD55';
                e.currentTarget.style.borderColor = '#0EAD55';
                e.currentTarget.style.boxShadow = '0 10px 28px rgba(14, 173, 85, 0.36)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#16C766';
                e.currentTarget.style.borderColor = '#16C766';
                e.currentTarget.style.boxShadow = '0 8px 22px rgba(22, 199, 102, 0.28)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              QUERO ACESSAR OS 80 TREINOS
            </button>
            <p className="text-xs sm:text-sm text-center" style={{ color: '#D5DDD8' }}>Acesso imediato no seu WhatsApp ou e-mail após a confirmação do pagamento.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
            {['Pagamento único', 'Consulte quando precisar', '7 dias de garantia', 'Acesso imediato'].map((label) => <div key={label} className="flex items-center gap-1.5 text-xs sm:text-sm font-medium" style={{ color: '#FFFFFF' }}><span className="rounded-full flex items-center justify-center text-white text-[10px] font-bold" style={{ backgroundColor: '#22C55E', width: '18px', height: '18px' }}>✓</span>{label}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
