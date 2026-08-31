ero colocar ela 'use client';

import { Check, X } from 'lucide-react';

const beforeItems = [
  'Procura exercícios de goleiro em vários lugares',
  'Acaba repetindo sempre os mesmos treinos',
  'Perde tempo tentando organizar cada sessão',
  'Não sabe como adaptar o exercício para diferentes níveis',
  'Fica em dúvida sobre montagem, progressão e correções',
];

const afterItems = [
  'Escolhe o treino de acordo com o objetivo',
  'Encontra toda a sessão organizada em uma página',
  'Consulta rapidamente montagem e execução',
  'Visualiza o exercício pelo diagrama',
  'Utiliza progressões e adaptações para diferentes categorias',
];

export function BeforeAfterSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-28" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:mb-16 md:gap-5">
          <h2
            className="max-w-4xl font-grotesk text-3xl leading-[1.1] text-balance md:text-5xl md:leading-tight md:text-pretty"
            style={{ color: '#FFFFFF' }}
          >
            De “Qual Treino Eu Faço Hoje?” para um{' '}
            <span style={{ color: '#7BE0A3' }}>Treino de Goleiros Pronto para Aplicar</span>
          </h2>
          <p
            className="max-w-2xl text-center text-base leading-[1.55] md:text-lg md:leading-relaxed"
            style={{ color: '#D5DDD8' }}
          >
            Pare de perder tempo procurando exercícios separados. Escolha o objetivo, abra o treino e consulte toda a organização em uma única página.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 lg:gap-10">
          <article
            className="group flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(180,35,24,0.12)]"
            style={{ backgroundColor: '#FFF5F4', borderColor: '#E3A29C', boxShadow: '0 14px 35px rgba(23, 25, 28, 0.08)' }}
          >
            <header
              className="border-b px-[22px] py-4 md:px-7 md:py-5"
              style={{ background: 'linear-gradient(135deg, #B42318 0%, #D13A2F 100%)', borderColor: 'rgba(255,255,255,0.18)' }}
            >
              <span className="font-grotesk text-lg font-bold tracking-[0.18em] text-white">ANTES</span>
            </header>
            <ul className="flex flex-1 flex-col justify-center gap-4 px-[22px] py-[22px] md:gap-[18px] md:px-8 md:py-9">
              {beforeItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-[1.5] md:leading-relaxed" style={{ color: '#30343A' }}>
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full md:size-7" style={{ backgroundColor: '#FFE3E0' }}>
                    <X aria-hidden="true" className="size-4" strokeWidth={3} style={{ color: '#D92D20' }} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article
            className="group flex h-full flex-col overflow-hidden rounded-[20px] border transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(7,148,71,0.14)]"
            style={{ backgroundColor: '#F1FFF6', borderColor: '#8BDEB1', boxShadow: '0 14px 35px rgba(23, 25, 28, 0.08)' }}
          >
            <header
              className="border-b px-[22px] py-4 md:px-7 md:py-5"
              style={{ background: 'linear-gradient(135deg, #16C766 0%, #08A94F 100%)', borderColor: 'rgba(255,255,255,0.18)' }}
            >
              <span className="font-grotesk text-lg font-bold tracking-[0.18em] text-white">DEPOIS</span>
            </header>
            <ul className="flex flex-1 flex-col justify-center gap-4 px-[22px] py-[22px] md:gap-[18px] md:px-8 md:py-9">
              {afterItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-[1.5] md:leading-relaxed" style={{ color: '#30343A' }}>
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full md:size-7" style={{ backgroundColor: '#DDFBEA' }}>
                    <Check aria-hidden="true" className="size-4" strokeWidth={3} style={{ color: '#079447' }} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
