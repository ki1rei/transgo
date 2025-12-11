"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Mixins/Navbar/Navbar';
import Footer from '@/components/Mixins/Footer';

const MainLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Navbar />

      <main className="pt-24 pb-24 mt-40 mb-40">{children}</main>

      <Footer />
    </>
  );
};

export default MainLayout;
