'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { ForWhomSection } from '@/components/for-whom-section';
import { PricingSection } from '@/components/pricing-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

// Páginas reais das coleções (substitua `image` pelos arquivos do Microbiologia Visual)
const carrossel1 = [
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Não Confunda', tag: 'Comparativo' },
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
  { image: '', title: 'Revisão Express', tag: 'Revisão' },
  { image: '', title: 'Teste sua Memória', tag: 'Teste' },
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
  { image: '', title: 'Não Confunda', tag: 'Comparativo' },
];

const carrossel2 = [
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
  { image: '', title: 'Revisão Express', tag: 'Revisão' },
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Teste sua Memória', tag: 'Teste' },
  { image: '', title: 'Não Confunda', tag: 'Comparativo' },
  { image: '', title: 'Revisão Express', tag: 'Revisão' },
  { image: '', title: 'Mapa Visual', tag: 'Mapas Visuais' },
  { image: '', title: 'Ficha Visual', tag: 'Fichas Visuais' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#FAFAF8' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <ProductCarousel title="Conheça o Microbiologia Visual por Dentro" subtitle="Veja como assuntos que normalmente aparecem em textos extensos, tabelas e anotações passam a ser apresentados de maneira visual, organizada e fácil de consultar." items={carrossel1} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="Do Conteúdo Completo à Revisão de Última Hora" subtitle="Estude um assunto com mais detalhes quando tiver tempo ou abra uma página rápida quando precisar lembrar dos pontos principais." items={carrossel2} reverse={true} />
      <ForWhomSection />
      <Testimonials />
      <div ref={offerRef}><PricingSection /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
