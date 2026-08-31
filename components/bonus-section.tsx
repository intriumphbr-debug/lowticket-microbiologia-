export function BonusSection() {
  const bonuses = [
    {
      title: '20 Aquecimentos Específicos para Goleiros',
      price: 'R$ 27,00',
      num: '1',
      image: '/images/bonus-aquecimentos-goleiros.webp',
      description: 'Aquecimentos práticos para trabalhar ativação, mobilidade, coordenação, deslocamentos, reação e contato com bola antes da parte principal do treinamento.',
    },
    {
      title: '20 Treinos para Fazer com Apenas 1 Goleiro',
      price: 'R$ 29,00',
      num: '2',
      image: '/images/bonus-treinos-1-goleiro.webp',
      description: 'Treinos práticos pensados para situações em que há somente um goleiro disponível, com exercícios de reflexo, técnica, posicionamento, deslocamento, defesas e jogo com os pés',
    },
    {
      title: 'Calendário de Treinos para Goleiros',
      price: 'R$ 19,90',
      num: '3',
      image: '/images/bonus-planner-goleiros.webp',
      description: 'Ficha prática para organizar objetivos, exercícios, duração e distribuição dos treinamentos durante a semana.',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 text-white" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
      <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
        <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty">
          RECEBA 3 BÔNUS PARA COMPLETAR SEUS TREINOS
        </h2>
        <p className="text-base sm:text-lg max-w-2xl" style={{ color: '#D7ECDF' }}>
          Materiais complementares para variar as sessões de treinamento e facilitar ainda mais o planejamento.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        {bonuses.map((bonus, idx) => (
          <div
            key={idx}
            className="bonus-card flex flex-col h-full"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid #DED9D1',
              boxShadow: '0 14px 35px rgba(23, 25, 28, 0.10)',
              transition: 'all 250ms ease',
            }}
          >
            {/* Container da Imagem */}
            <div className="px-5 sm:px-6 pt-6 sm:pt-7 pb-4 sm:pb-5 flex items-center justify-center" style={{ minHeight: '260px', height: 'auto' }}>
              <img
                src={bonus.image}
                alt={bonus.title}
                className="w-full max-h-[420px] object-contain"
              />
            </div>

            {/* Stars */}
            <div className="px-5 sm:px-6 flex gap-1">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} className="text-lg" style={{ color: '#FFD166' }}>&#9733;</span>
              ))}
            </div>

            {/* Info */}
            <div className="px-5 sm:px-6 pb-6 sm:pb-7 pt-4 sm:pt-5 flex flex-col gap-3 flex-grow">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider" style={{ color: '#16C766' }}>
                BÔNUS {bonus.num}
              </p>
              <h3 className="font-grotesk text-base sm:text-lg leading-snug" style={{ color: '#17191C' }}>
                {bonus.title}
              </h3>
              <p className="text-xs sm:text-sm flex-grow" style={{ color: '#4E5358' }}>
                {bonus.description}
              </p>
              <p className="text-xs sm:text-sm line-through" style={{ color: '#777B80' }}>
                De {bonus.price}
              </p>
              <div
                className="inline-block text-xs font-bold uppercase px-3 sm:px-4 py-2 rounded-full whitespace-nowrap"
                style={{ backgroundColor: '#16C766', color: '#FFFFFF' }}
              >
                HOJE GRÁTIS
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
