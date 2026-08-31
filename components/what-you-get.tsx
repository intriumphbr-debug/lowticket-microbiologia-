export function WhatYouGet() {
  const modules = [
    ['🧤', 'Fundamentos e Domínio Corporal', '10 treinos', 'Postura base, deslocamentos, encaixes, coordenação, quedas iniciais e fundamentos essenciais.'],
    ['⚡', 'Reflexo e Reação', '10 treinos', 'Estímulos visuais e sonoros, reação curta, segunda defesa e sequências rápidas.'],
    ['🥅', 'Quedas e Defesas', '10 treinos', 'Quedas laterais, bolas rasteiras, meia-altura, rebotes e recuperação após a defesa.'],
    ['🎯', 'Posicionamento', '10 treinos', 'Fechamento de ângulo, cobertura do gol, ajuste corporal e leitura da finalização.'],
    ['🙌', 'Saídas do Gol e Bolas Aéreas', '10 treinos', 'Saídas baixas, cruzamentos, bolas altas, divididas, encaixes e intervenções aéreas.'],
    ['🆚', 'Situações de 1x1', '10 treinos', 'Fechamento de espaço, tempo de saída, tomada de decisão e intervenção diante do atacante.'],
    ['⚽', 'Jogo com os Pés e Reposição', '10 treinos', 'Passe curto e longo, domínio orientado, reposição com as mãos e saída sob pressão.'],
    ['📋', 'Treinos Combinados e Situações de Jogo', '10 treinos', 'Sequências que unem diferentes fundamentos e aproximam o treinamento das situações reais da partida.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty text-[#FFFFFF] sm:text-4xl md:text-5xl">
            <span className="text-[#7BE0A3]">80 Treinos</span> ORGANIZADOS POR OBJETIVO
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#D5DDD8] sm:text-base md:text-lg">
            Uma biblioteca prática para trabalhar os principais fundamentos e situações enfrentadas pelo goleiro.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {modules.map(([emoji, title, count, description]) => (
            <article
              key={title}
              className="group relative flex min-h-[230px] flex-col rounded-[18px] border bg-white p-5 shadow-[0_8px_24px_rgba(23,25,28,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#003F2D] hover:shadow-[0_14px_30px_rgba(23,25,28,0.12)] sm:p-6"
              style={{ borderColor: '#D9DDD9' }}
            >
              <div className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-[#003F2D] opacity-70 transition-opacity duration-250 group-hover:opacity-100 sm:inset-x-6" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border text-[21px]" style={{ backgroundColor: '#E7F4EC', borderColor: '#B7ECC4' }}>
                  <span aria-hidden="true">{emoji}</span>
                </div>
                <span className="mt-1 shrink-0 rounded-full border px-3 py-1 text-xs font-bold leading-none whitespace-nowrap" style={{ backgroundColor: '#E7F4EC', color: '#003F2D', borderColor: '#B7ECC4' }}>
                  {count}
                </span>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty text-[#101313] sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5D625F]">{description}</p>
              </div>
              <div className="mt-5 h-px w-12 bg-[#002D21] opacity-40 transition-all duration-250 group-hover:w-20 group-hover:opacity-80" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
