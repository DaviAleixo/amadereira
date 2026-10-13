import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { WhatsAppFloating } from './components/layout/WhatsAppFloating';
import { ScrollToTop } from './components/layout/ScrollToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#141414] text-[#f3e2ba] selection:bg-[#be7b4c] selection:text-[#141414]">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppFloating />
    </div>
  );
};

export default App;
