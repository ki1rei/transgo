import React from 'react';

const TopSection = () => {
  return (
    <section className="relative flex items-center justify-between min-h-screen gap-8 px-6 py-20 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
      <div className="flex items-center justify-between w-full gap-8">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Go Safe, Go Smart with TransGo!
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Di TransGo, kami percaya keselamatan kerja bisa berjalan seiring kemajuan teknologi. Setiap langkah jadi lebih aman, cerdas, dan efisien!
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold transition-colors duration-300">
              Lihat Dokumen K3
            </button>
            <button className="px-6 py-3 border-2 border-gray-400 hover:border-teal-500 text-gray-300 hover:text-teal-400 rounded-lg font-semibold transition-colors duration-300">
              Pelajari Tentang Kami
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="flex-1 hidden md:flex items-center justify-center">
          <div className="w-full h-96 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-white text-center">
              <p className="text-6xl mb-2">🏍️</p>
              <p className="text-xl font-semibold">TransGo Hero Image</p>
              <p className="text-sm text-gray-200">(Placeholder untuk gambar ilustrasi)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
