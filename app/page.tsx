'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { ForWhomSection } from '@/components/for-whom-section';
import { BonusSection } from '@/components/bonus-section';
import { OfferSection } from '@/components/offer-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

const carrossel1 = [
  { image: '/images/treinos/treino-039.webp', title: 'Treino 039 — Reposição e Reposicionamento Defensivo' },
  { image: '/images/treinos/treino-024.webp', title: 'Treino 024 — Defesa Meia-Altura com Deslocamento' },
  { image: '/images/treinos/treino-020.webp', title: 'Treino 020 — Circuito de Reflexo e Recuperação' },
  { image: '/images/treinos/treino-035.webp', title: 'Treino 035 — Cobertura do Gol em Movimentação Ofensiva' },
  { image: '/images/treinos/treino-049.webp', title: 'Treino 049 — Rebatida Orientada em Bola Aérea' },
  { image: '/images/treinos/treino-042.webp', title: 'Treino 042 — Saída no 1x1 com Ataque à Bola' },
  { image: '/images/treinos/treino-062.webp', title: 'Treino 062 — Domínio Orientado e Passe' },
  { image: '/images/treinos/treino-030.webp', title: 'Treino 030 — Circuito de Quedas e Defesas' },
];

const carrossel2 = [
  { image: '/images/treinos/treino-073.webp', title: 'Treino 073 — Saída do Gol + Reposição Rápida' },
  { image: '/images/treinos/treino-060.webp', title: 'Treino 060 — Circuito de Decisões no 1x1' },
  { image: '/images/treinos/treino-080b.webp', title: 'Treino 080 — Circuito Completo do Goleiro' },
  { image: '/images/treinos/treino-078.webp', title: 'Treino 078 — Cruzamento + Segunda Bola' },
  { image: '/images/treinos/treino-058.webp', title: 'Treino 058 — Saída Baixa no Pé do Atacante' },
  { image: '/images/treinos/treino-040.webp', title: 'Treino 040 — Circuito de Posicionamento Completo' },
  { image: '/images/treinos/treino-069.webp', title: 'Treino 069 — Construção Rápida após Defesa' },
  { image: '/images/treinos/treino-066.webp', title: 'Treino 066 — Jogo com os Pés sob Pressão' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#003F2D' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel title="Conheça os Treinos por Dentro" subtitle="Veja como cada treino é organizado para você entender rapidamente a montagem, a execução e o que trabalhar com seus goleiros." items={carrossel1} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="TREINOS ADAPTÁVEIS PARA DIFERENTES CATEGORIAS" subtitle="Encontre rapidamente os treinos indicados para cada categoria e utilize as adaptações conforme a idade e o nível técnico dos seus goleiros." items={carrossel2} reverse={true} />
      <ForWhomSection />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef} id="checkout"><OfferSection onCtaClick={handleCtaClick} /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
