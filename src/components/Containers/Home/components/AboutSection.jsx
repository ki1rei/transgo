import React from 'react';

const AboutSection = () => {
  const stats = [
    {
      id: 1,
      icon: '🛵',
      value: '10,000+',
      label: 'Mitra Pengguna',
    },
    {
      id: 2,
      icon: '✅',
      value: '98%',
      label: 'Kepuasan K3',
    },
    {
      id: 3,
      icon: '📋',
      value: '10+',
      label: 'SOP & Panduan',
    },
    {
      id: 4,
      icon: '👥',
      value: '500+',
      label: 'Pelatihan Keselamatan',
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="w-full h-96 bg-gradient-to-br from-pink-300 to-yellow-300 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <p className="text-8xl mb-4">👨‍💼</p>
                  <p className="text-xl font-semibold text-slate-800">Character Placeholder</p>
                  <p className="text-sm text-slate-700">(Gambar ilustrasi tim TransGo)</p>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Tentang Kami
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                TransGo adalah perusahaan transportasi digital yang berfokus pada
                keselamatan dan kenyamanan perjalanan.
              </p>
              <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                Melalui sistem digital Dokumen K3, TransGo memastikan seluruh pengemudi,
                teknisi, dan staf bekerja dengan standar keselamatan tertinggi.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl p-6 text-center hover:bg-opacity-20 transition-all duration-300"
                  >
                    <div className="text-4xl mb-3">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <p className="text-gray-300 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutSection;
