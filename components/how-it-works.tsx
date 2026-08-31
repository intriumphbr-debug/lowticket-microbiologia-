export function HowItWorks() {
  const steps = [
    ['1', 'VISUALIZE', 'Encontre rapidamente o assunto que precisa estudar ou revisar.'],
    ['2', 'ENTENDA', 'Use mapas, esquemas, estruturas e explicações visuais para compreender o conceito.'],
    ['3', 'COMPARE', 'Separe conceitos e microrganismos parecidos com a coleção Não Confunda.'],
    ['4', 'FIXE', 'Revise com fichas, páginas express e coloque sua memória à prova com exercícios visuais.'],
  ];
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#321866' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-3 md:gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#FFFFFF' }}>
            Revisar Microbiologia Pode Ser Muito Mais Simples
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Em quatro etapas, você encontra o assunto, entende visualmente, compara informações importantes e fixa o conteúdo.
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
                border: '1px solid #E4DEEF',
                boxShadow: '0 12px 30px rgba(43, 20, 95, 0.10)',
                padding: '28px',
                transition: 'all 250ms ease',
              }}
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-full"
                style={{ height: '4px', backgroundColor: '#D6A62E' }}
              />
              <div
                className="rounded-full flex items-center justify-center text-xl font-bold font-grotesk mb-4"
                style={{
                  width: '52px',
                  height: '52px',
                  background: 'linear-gradient(135deg, #0A6C78 0%, #2B145F 100%)',
                  color: '#FFFFFF',
                  boxShadow: '0 6px 14px rgba(43, 20, 95, 0.25)',
                }}
              >
                {number}
              </div>
              <h3 className="font-grotesk text-base sm:text-lg mb-3" style={{ color: '#2B145F' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#43505C' }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .how-it-works-card:hover {
          transform: translateY(-4px);
          border-color: #D6A62E;
          box-shadow: 0 18px 38px rgba(43, 20, 95, 0.14);
        }
      `}</style>
    </section>
  );
}
