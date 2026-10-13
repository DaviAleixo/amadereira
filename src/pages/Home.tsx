import React, { lazy, Suspense } from 'react';
import { HeroSection } from '../components/home/01_HeroSection';

const VideoShowcaseSection = lazy(() => import('../components/home/05_VideoShowcaseSection').then(m => ({ default: m.VideoShowcaseSection })));
const CategoriesShowcaseSection = lazy(() => import('../components/home/03_CategoriesShowcaseSection').then(m => ({ default: m.CategoriesShowcaseSection })));
const ProductsCatalogCtaSection = lazy(() => import('../components/home/ProductsCatalogCtaSection').then(m => ({ default: m.ProductsCatalogCtaSection })));
const RealEnvironmentsSection = lazy(() => import('../components/home/07_RealEnvironmentsSection').then(m => ({ default: m.RealEnvironmentsSection })));
const ShowroomLocationSection = lazy(() => import('../components/home/13_ShowroomLocationSection').then(m => ({ default: m.ShowroomLocationSection })));

export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-[#141414]">
      {/* 01 Hero Section (Renderizado imediatamente para LCP instantâneo) */}
      <HeroSection />

      {/* Seções abaixo da dobra carregadas sob demanda para não bloquear o carregamento inicial */}
      <Suspense fallback={<div className="min-h-[200px] w-full bg-[#141414]" />}>
        {/* 02 Seção de Vídeo Institucional / Ateliê */}
        <VideoShowcaseSection />

        {/* 03 Três Categorias Principais (Cascata, Prancha, Raiz) */}
        <CategoriesShowcaseSection />

        {/* 04 CTA de Catálogo e Demais Produtos */}
        <ProductsCatalogCtaSection />

        {/* 05 Ambientes Reais & Depoimentos Unificados (com Destaque Sorocaba) */}
        <RealEnvironmentsSection />

        {/* 06 Showroom & Localização Física */}
        <ShowroomLocationSection />
      </Suspense>
    </main>
  );
};
