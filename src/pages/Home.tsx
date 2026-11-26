import React, { Suspense, lazy } from 'react';
import { HeroSection } from '../components/home/01_HeroSection';
import { VideoShowcaseSection } from '../components/home/05_VideoShowcaseSection';
import { CategoriesShowcaseSection } from '../components/home/03_CategoriesShowcaseSection';
import { ProductsCatalogCtaSection } from '../components/home/ProductsCatalogCtaSection';

// Lazy loading das seções inferiores da página para que o topo carregue imediatamente
const RealEnvironmentsSection = lazy(() =>
  import('../components/home/07_RealEnvironmentsSection').then((m) => ({ default: m.RealEnvironmentsSection }))
);
const ProductionEnvironmentSection = lazy(() =>
  import('../components/home/09_ProductionEnvironmentSection').then((m) => ({ default: m.ProductionEnvironmentSection }))
);
const ShowroomLocationSection = lazy(() =>
  import('../components/home/13_ShowroomLocationSection').then((m) => ({ default: m.ShowroomLocationSection }))
);

export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-[#141414]">
      {/* 01 Hero Section */}
      <HeroSection />

      {/* 02 Seção de Vídeo Institucional / Ateliê */}
      <VideoShowcaseSection />

      {/* 03 Três Categorias Principais (Cascata, Prancha, Raiz) */}
      <CategoriesShowcaseSection />

      {/* 04 CTA de Catálogo e Demais Produtos */}
      <ProductsCatalogCtaSection />

      {/* Seções secundárias com lazy loading sob demanda */}
      <Suspense fallback={<div className="min-h-[200px] w-full bg-[#141414]" />}>
        {/* 05 Ambientes Reais & Depoimentos Unificados */}
        <RealEnvironmentsSection />

        {/* 06 Estrutura & Bastidores da Produção */}
        <ProductionEnvironmentSection />

        {/* 07 Showroom & Localização Física */}
        <ShowroomLocationSection />
      </Suspense>
    </main>
  );
};
