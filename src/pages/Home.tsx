import React from 'react';
import { HeroSection } from '../components/home/01_HeroSection';
import { VideoShowcaseSection } from '../components/home/05_VideoShowcaseSection';
import { CategoriesShowcaseSection } from '../components/home/03_CategoriesShowcaseSection';
import { ProductsCatalogCtaSection } from '../components/home/ProductsCatalogCtaSection';
import { RealEnvironmentsSection } from '../components/home/07_RealEnvironmentsSection';
import { ShowroomLocationSection } from '../components/home/13_ShowroomLocationSection';

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

      {/* 05 Ambientes Reais & Depoimentos Unificados (com Destaque Sorocaba) */}
      <RealEnvironmentsSection />

      {/* 06 Showroom & Localização Física */}
      <ShowroomLocationSection />
    </main>
  );
};
