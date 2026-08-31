import Image from 'next/image';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFB800" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Eu sempre buscava novas formas de variar os treinos sem fugir dos fundamentos importantes. O material me ajudou justamente nisso, porque tem muitas opções prontas e fica fácil escolher um treino de acordo com o que quero trabalhar com os goleiros naquele dia.  ',
      name: 'Lucas Ferreira',
      role: 'Treinador de Goleiros — Goiânia/GO',
      photo: '/images/testimonials/lucas-ferreira.webp',
      objectPosition: '50% 22%',
    },
    {
      quote:
        'O que mais me ajudou foi ter várias opções de treino em um só lugar. Antes eu acabava repetindo alguns exercícios ou procurando ideias em vários lugares. Agora ficou muito mais fácil variar o trabalho com os goleiros.',
      name: 'Rafael Martins',
      role: 'Treinador de Categoria de Base — Brasília/DF',
      photo: '/images/testimonials/rafael-martins.webp',
      objectPosition: '50% 26%',
    },
    {
      quote:
        'Eu estava procurando justamente novas opções para não ficar repetindo sempre os mesmos exercícios. Agora consigo abrir pelo celular e escolher rapidamente o que quero trabalhar naquele dia.',
      name: 'Bruno Carvalho',
      role: 'Professor de Escolinha de Futebol — São Paulo/SP',
      photo: '/images/testimonials/bruno-carvalho.webp',
      objectPosition: '50% 30%',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#F6F4EF' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#101313' }}>
            APROVADO POR QUEM TRABALHA COM FUTEBOL
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5D625F' }}>
            Confira a experiência de quem já utiliza os treinos na preparação e no desenvolvimento de goleiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #D9DDD9', borderRadius: '20px' }}
            >
              <StarRow />

              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#5D625F' }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div
                  className="relative w-11 h-11 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: '2px solid #003F2D' }}
                >
                  <Image
                    src={item.photo || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#101313' }}>
                    {item.name}
                  </span>
                  <span className="text-xs" style={{ color: '#8A8F94' }}>
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
