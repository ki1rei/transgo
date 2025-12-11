"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/layouts/MainLayout";

const ContainerHome = () => {
  const awards = [
    {
      id: 1,
      icon: "/assets/img/Medal.png",
      title: "Aplikasi Transportasi Favorit 2025",
    },
    {
      id: 2,
      icon: "/assets/img/Medal.png",
      title: 'Top Customer Experience App" – Indonesia Digital Awards',
    },
    {
      id: 3,
      icon: "/assets/img/Medal.png",
      title: "Platform Mobilitas Digital Paling Inovatif 2025",
    },
  ];

  const stats = [
    {
      id: 1,
      icon: "/assets/img/Motor-Scooter.png",
      value: "10,000+",
      label: "Mitra Pengguna",
    },
    {
      id: 2,
      icon: "/assets/img/Check-Mark-Button.png",
      value: "98%",
      label: "Kepuasan K3",
    },
    {
      id: 3,
      icon: "/assets/img/Blue-Book.png",
      value: "10+",
      label: "SOP & Panduan",
    },
    {
      id: 4,
      icon: "/assets/img/Worker.png",
      value: "500+",
      label: "Pelatihan Keselamatan",
    },
  ];

  return (
    <MainLayout>
      {/* Main Container with Global Background Pattern */}
      <div className="relative bg-background overflow-x-hidden">
        {/* Diagonal Stripe Background Pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <svg
            className="w-full h-full opacity-5"
            viewBox="0 0 1441 1208"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Diagonal parallelogram shape */}
            <polygon points="0,310 1440,150 1440,750 0,600" fill="white" />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10">
          {/* SECTION 1: Hero / Top Section */}
          <section className="relative flex items-center justify-center lg:justify-between min-h-screen py-20 px-4 sm:px-6 lg:px-0 overflow-hidden overflow-x-clip">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1800px] mx-auto lg:pl-16">
              {/* Left Content */}
              <div className="flex-1 max-w-3xl z-20 lg:mb-56 text-center lg:text-left order-2 lg:order-1">
                <h1 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
                >
                  Go Safe, Go Smart with TransGo!
                </h1>
                <p 
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0"
                >
                  Di TransGo, kami percaya keselamatan kerja bisa berjalan
                  seiring kemajuan teknologi. Setiap langkah jadi lebih aman,
                  cerdas, dan efisien!
                </p>
                <div 
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex gap-3 sm:gap-4 flex-col sm:flex-row sm:flex-wrap justify-center lg:justify-start"
                >
                  <Link href="/dokumen-k3">
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white rounded-full font-semibold transition-colors duration-300 text-base sm:text-lg">
                      Lihat Dokumen K3
                    </button>
                  </Link>
                  <button 
                    onClick={() => document.getElementById('tentang-kami').scrollIntoView({ behavior: 'smooth' })}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 text-primary border-primary hover:border-teal-500 hover:text-teal-400 rounded-full font-semibold transition-colors duration-300 text-base sm:text-lg"
                  >
                    Pelajari Tentang Kami
                  </button>
                </div>
              </div>

              {/* Right Image - Larger with overflow */}
              <div 
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="relative w-full sm:w-[30rem] md:w-[40rem] lg:w-[60rem] h-[20rem] sm:h-[25rem] md:h-[35rem] lg:h-[60rem] lg:-mr-80 z-10 order-1 lg:order-2 mb-6 lg:mb-0"
              >
                <Image 
                  src="/assets/img/Hero-Motorcycle.png" 
                  alt="TransGo Hero" 
                  fill  
                  className="object-contain"
                />
              </div>
            </div>
          </section>

          {/* SECTION 2: Awards Section */}
          <section className="relative px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-10 sm:mb-16">
                <h2 
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  Dipercaya dan Diakui
                </h2>
                <p 
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-gray-300 text-base sm:text-lg px-2 sm:px-0"
                >
                  TransGo mendapat kepercayaan pengguna di seluruh Indonesia
                  berkat layanan cepat, aman, dan teknologi yang terintegrasi.
                </p>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {awards.map((award, index) => (
                  <div
                    key={award.id}
                    data-aos="zoom-in"
                    data-aos-delay={index * 100}
                    className="bg-white h-fit rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <Image src={award.icon} alt={award.title} width={100} height={100} className="mx-auto mb-4 w-16 h-16 sm:w-24 sm:h-24" />
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                      {award.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: About Section */}
          <section id="tentang-kami" className="relative mt-16 sm:mt-24 lg:mt-32 pb-10">
            <div className="w-full px-4 sm:px-6 lg:pl-0 lg:pr-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
                {/* Image - First on mobile, left on desktop */}
                <div 
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className="flex items-center justify-center lg:justify-start w-full lg:max-w-lg order-1"
                >
                  <Image 
                    src="/assets/img/transfood.png" 
                    alt="About Us" 
                    width={630} 
                    height={660} 
                    className="w-48 sm:w-64 md:w-80 lg:w-full lg:max-w-none"
                  />
                </div>

                {/* Content - Second on mobile, right on desktop */}
                <div className="w-full lg:pr-10 lg:max-w-4xl order-2">
                  <h2 
                    data-aos="fade-up"
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-center"
                  >
                    Tentang Kami
                  </h2>
                  <p 
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed text-center lg:text-left"
                  >
                    TransGo adalah perusahaan transportasi digital yang berfokus
                    pada keselamatan dan kenyamanan perjalanan.
                  </p>
                  <p 
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed text-center lg:text-left"
                  >
                    Melalui sistem digital Dokumen K3, TransGo memastikan
                    seluruh pengemudi, teknisi, dan staf bekerja dengan standar
                    keselamatan tertinggi.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {stats.map((stat, index) => (
                      <div
                        key={stat.id}
                        data-aos="flip-up"
                        data-aos-delay={index * 100}
                        className="group bg-white hover:bg-gradient-to-r hover:from-[#4DB8B2] hover:to-[#A6FBD4] flex items-center justify-center gap-4 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-center hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
                      >
                        <div className="flex items-center justify-center sm:justify-between w-full sm:w-64 gap-3 sm:gap-0">
                          <div className="mx-2 sm:mx-3 flex-shrink-0">
                            <Image src={stat.icon} alt={stat.label} width={50} height={50} className="w-10 h-10 sm:w-12 sm:h-12" />
                          </div>
                          <div className="flex flex-col items-center justify-center mx-2 sm:mx-3 sm:w-32">
                            <div className="text-gray-900 group-hover:text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2 transition-colors duration-300">
                              {stat.value}
                            </div>
                            <span className="text-gray-400 group-hover:text-white/80 text-xs sm:text-sm whitespace-nowrap transition-colors duration-300">{stat.label}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: Contact Section */}
          <section id="hubungi-kami" className="relative mt-24 sm:mt-32 lg:mt-48 pb-0 lg:pb-0">
            <div className="w-full px-4 sm:px-6">
              <div className="max-w-7xl mx-auto lg:relative lg:min-h-[400px]">
                <div className="flex flex-col mb-20 lg:mb-0 lg:flex-row items-center justify-between gap-8 lg:gap-16">
                  {/* Left Content */}
                  <div 
                    data-aos="fade-right"
                    className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
                  >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
                      Hubungi Kami
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg mb-2 leading-relaxed">
                      Ada pertanyaan tentang perjalananmu? Tim kami siap membantu kapan saja.
                    </p>
                    <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                      Tetap bergerak tanpa hambatan bersama TransGo!
                    </p>
                    
                    <button 
                      data-aos="fade-up"
                      data-aos-delay="200"
                      className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white rounded-full font-semibold transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-xl"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                      Hubungi Kami
                    </button>
                  </div>

                  {/* Right Image */}
                  <div 
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    className="w-full lg:w-1/2 flex items-end justify-center order-1 lg:order-2 lg:absolute lg:bottom-0 lg:right-0"
                  >
                    <div className="relative w-48 sm:w-56 md:w-64 lg:w-80 max-w-xs lg:max-w-sm">
                      <Image 
                        src="/assets/img/Contact-Us.png" 
                        alt="Contact Us" 
                        width={500} 
                        height={600} 
                        className="object-contain w-full h-auto object-bottom"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContainerHome;
