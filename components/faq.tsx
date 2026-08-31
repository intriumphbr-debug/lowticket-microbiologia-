'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem os 80 treinos são indicados?',
      a: 'O material foi desenvolvido principalmente para treinadores de goleiros, treinadores de categorias de base, professores de escolinhas e profissionais de Educação Física que trabalham com formação e treinamento de goleiros.',
    },
    {
      q: 'Para quais categorias os treinos são indicados?',
      a: 'O material reúne exercícios indicados da iniciação às categorias de base, incluindo referências para Sub-7, Sub-9, Sub-11, Sub-13, Sub-15 e Sub-17. Cada página informa as categorias e o nível mais adequados para aquele treino.',
    },
    {
      q: 'Preciso de muitos equipamentos?',
      a: 'Não. A maioria dos treinos utiliza materiais comuns no futebol, como bolas, cones e gol. Em cada página você encontra exatamente os materiais necessários.',
    },
    {
      q: 'Os treinos mostram como organizar o exercício?',
      a: 'Sim. Cada treino apresenta montagem, execução passo a passo, séries ou repetições, progressão, adaptação, correções e um diagrama visual para facilitar a aplicação.',
    },
    {
      q: 'Como recebo e acesso o material?',
      a: 'Após a confirmação do pagamento, você recebe as instruções de acesso imediatamente pelo WhatsApp ou e-mail cadastrado na compra.',
    },
    {
      q: 'O pagamento é único?',
      a: 'Sim. Você paga apenas uma vez e não existe mensalidade ou assinatura.',
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'Você pode acessar e conhecer o material durante 7 dias. Caso não atenda às suas expectativas, poderá solicitar o reembolso dentro do prazo da garantia.',
    },
  ];

  return (
    <section className="w-full py-14 px-0" style={{ backgroundColor: '#003F2D' }}>
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center uppercase"
          style={{ color: '#FFFFFF', fontSize: '32px', fontWeight: 700, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D9DDD9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(0, 0, 0, 0.12)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#101313',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#003F2D',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid #EDECE6',
                      backgroundColor: '#F6F4EF',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#333733', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
