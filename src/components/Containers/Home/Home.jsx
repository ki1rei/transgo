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
      <div className="relative bg-background">
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
          <section className="relative flex items-center justify-between min-h-screen py-20 overflow-hidden">
            <div className="flex items-center justify-between w-full max-w-[1800px] mx-auto pl-16">
              {/* Left Content */}
              <div className="flex-1 max-w-3xl z-20 mb-56">
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Go Safe, Go Smart with TransGo!
                </h1>
                <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                  Di TransGo, kami percaya keselamatan kerja bisa berjalan
                  seiring kemajuan teknologi. Setiap langkah jadi lebih aman,
                  cerdas, dan efisien!
                </p>
                <div className="flex gap-4 flex-wrap">
                  <Link href="/dokumen-k3">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white rounded-full font-semibold transition-colors duration-300 text-lg">
                      Lihat Dokumen K3
                    </button>
                  </Link>
                  <button 
                    onClick={() => document.getElementById('tentang-kami').scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-4 border-2 text-primary border-primary hover:border-teal-500 hover:text-teal-400 rounded-full font-semibold transition-colors duration-300 text-lg"
                  >
                    Pelajari Tentang Kami
                  </button>
                </div>
              </div>

              {/* Right Image - Larger with overflow */}
              <div className="relative w-[60rem] h-[60rem] -mr-80 hidden md:block z-10">
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
          <section className="relative px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Dipercaya dan Diakui
                </h2>
                <p className="text-gray-300 text-lg">
                  TransGo mendapat kepercayaan pengguna di seluruh Indonesia
                  berkat layanan cepat, aman, dan teknologi yang terintegrasi.
                </p>
              </div>

              {/* Awards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="bg-white h-fit rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <Image src={award.icon} alt={award.title} width={100} height={100} className="mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-slate-900">
                      {award.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 3: About Section */}
          <section id="tentang-kami" className="relative mt-32">
            <div className="w-full pl-0 pr-6">
              <div className="flex items-center justify-between">
                {/* Left - Image Placeholder */}
                <div className="flex items-center justify-start w-full max-w-lg">
                  <Image src="/assets/img/transfood.png" alt="About Us" width={630} height={660} />
                </div>

                {/* Right - Content */}
                <div className="w-full pr-10 max-w-4xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                    Tentang Kami
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    TransGo adalah perusahaan transportasi digital yang berfokus
                    pada keselamatan dan kenyamanan perjalanan.
                  </p>
                  <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                    Melalui sistem digital Dokumen K3, TransGo memastikan
                    seluruh pengemudi, teknisi, dan staf bekerja dengan standar
                    keselamatan tertinggi.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat) => (
                      <div
                        key={stat.id}
                        className="bg-white flex items-center justify-center gap-4 rounded-xl px-6 py-4 text-center hover:bg-opacity-20 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between w-64">
                          <div className="mx-3">
                            <Image src={stat.icon} alt={stat.label} width={50} height={50} />
                          </div>
                          <div className="flex flex-col items-center justify-center mx-3 w-32">
                            <div className="text-gray-900 text-2xl md:text-3xl font-bold hover:text-white mb-2">
                              {stat.value}
                            </div>
                            <span className="text-gray-400 text-sm text-nowrap">{stat.label}</span>
                          </div>
                        </div>
                      </div>
                    ))}
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
