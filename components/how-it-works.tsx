export function HowItWorks() {
  const steps = [
    ['1', 'Escolha o objetivo', 'Defina o que deseja trabalhar: reflexo, quedas, posicionamento, bolas aéreas, 1x1, jogo com os pés ou outro fundamento.'],
    ['2', 'Confira a categoria', 'Veja rapidamente as categorias e o nível indicados para aquele treinamento.'],
    ['3', 'Abra o treino', 'Consulte materiais, montagem, execução, séries, progressão e correções.'],
    ['4', 'Aplique e adapte', 'Use o diagrama visual e ajuste o exercício de acordo com o nível dos seus goleiros.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FFFFFF' }}>
            Organizar um Treino de Goleiros Pode Ser Simples
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#D5DDD8' }}>
            Em quatro etapas, você escolhe o objetivo, encontra o treino adequado e leva tudo pronto para o campo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">
          {steps.map(([number, title, description]) => (
            <div
              key={number}
              className="how-it-works-card relative flex flex-col items-center text-center h-full"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                border: '1px solid #DED9D1',
                boxShadow: '0 12px 30px rgba(23, 25, 28, 0.08)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#003F2D' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'linear-gradient(135deg, #003F2D 0%, #002D21 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(0, 45, 33, 0.25)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3" style={{ color: '#101313' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#5D625F' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #003F2D;
          box-shadow: 0 18px 38px rgba(23, 25, 28, 0.12);
        }
      `}</style>
    </section>
  );
}
