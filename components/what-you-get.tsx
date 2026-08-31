export function WhatYouGet() {
  const colecoes = [
    ['40', 'MAPAS VISUAIS', 'Entenda estruturas, processos, classificações e relações importantes por meio de mapas ricos em elementos visuais.'],
    ['30', 'NÃO CONFUNDA', 'Compare conceitos, organismos, testes e processos que normalmente geram dúvida.'],
    ['40', 'FICHAS VISUAIS', 'Revise características, identificação, habitat, virulência e importância dos principais microrganismos.'],
    ['15', 'REVISÃO EXPRESS', 'Grandes assuntos resumidos visualmente para uma revisão rápida e objetiva.'],
    ['15', 'TESTE SUA MEMÓRIA', 'Questões, associações, verdadeiro ou falso, identificação visual e desafios para ajudar na fixação.'],
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FAFAF8' }}>
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty sm:text-4xl md:text-5xl" style={{ color: '#062B45' }}>
            <span style={{ color: '#075F72' }}>140 Recursos Visuais</span> Organizados em 5 Coleções
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed sm:text-base md:text-lg" style={{ color: '#43505C' }}>
            Um sistema completo de estudo e revisão para consultar microbiologia de diferentes maneiras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {colecoes.map(([count, title, description]) => (
            <article
              key={title}
              className="group relative flex min-h-[220px] flex-col rounded-[18px] border bg-white p-6 shadow-[0_8px_24px_rgba(6,43,69,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#D6A62E] hover:shadow-[0_14px_30px_rgba(6,43,69,0.12)]"
              style={{ borderColor: '#E1E6EA' }}
            >
              <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#D6A62E] opacity-70 transition-opacity duration-250 group-hover:opacity-100" />
              <div className="flex items-baseline gap-2">
                <span className="font-grotesk text-4xl leading-none sm:text-5xl" style={{ color: '#075F72' }}>
                  {count}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#4B1F78' }}>
                  Recursos
                </span>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty sm:text-xl" style={{ color: '#062B45' }}>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: '#43505C' }}>{description}</p>
              </div>
              <div className="mt-5 h-px w-12 bg-[#D6A62E] opacity-50 transition-all duration-250 group-hover:w-20 group-hover:opacity-90" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
