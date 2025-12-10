import React from 'react';

const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      icon: '🏅',
      title: 'Aplikasi Transportasi Favorit 2025',
    },
    {
      id: 2,
      icon: '🏅',
      title: 'Top Customer Experience App" – Indonesia Digital Awards',
    },
    {
      id: 3,
      icon: '🏅',
      title: 'Platform Mobilitas Digital Paling Inovatif 2025',
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Dipercaya dan Diakui
          </h2>
          <p className="text-gray-300 text-lg">
            TransGo mendapat kepercayaan pengguna di seluruh Indonesia berkat layanan cepat,
            aman, dan teknologi yang terintegrasi.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-6xl mb-4">{award.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">
                {award.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
