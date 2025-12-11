"use client";
import React, { useState, useMemo } from 'react';
import MainLayout from '@/layouts/MainLayout';
import Image from 'next/image';
import { X, Eye } from 'lucide-react';
import SearchBar from '@/components/Common/SearchBar';
import FilterDialog from '@/components/Common/FilterDialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const ContainerDokumenK3 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ category: 'all', tag: 'all' });
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Data SOP untuk setiap dokumen
  const sopData = {
    1: {
      title: "SOP Berkendara Aman",
      points: [
        "Patuhi seluruh rambu lalu lintas",
        "Jaga kecepatan pada batas yang diperbolehkan",
        "Hindari penggunaan ponsel saat berkendara",
        "Perhatikan kondisi cuaca dan jalan"
      ]
    },
    2: {
      title: "SOP Pemeliharaan Kendaraan",
      points: [
        "Lakukan servis berkala sesuai jadwal",
        "Periksa rem, lampu, ban, dan bahan bakar sebelum bekerja",
        "Jaga kebersihan kendaraan",
        "Laporkan kerusakan sebelum berdampak pada keselamatan"
      ]
    },
    3: {
      title: "SOP Penggunaan Helm dan Sabuk Pengaman",
      points: [
        "Driver wajib menggunakan helm SNI atau sabuk pengaman",
        "Sediakan helm cadangan layak untuk penumpang",
        "Pastikan helm terpasang dengan baik sebelum berkendara"
      ]
    },
    4: {
      title: "SOP Penanganan Cuaca Ekstrem",
      points: [
        "Hindari kecepatan tinggi saat hujan atau jalan licin",
        "Gunakan jas hujan standar",
        "Tunda perjalanan jika situasi membahayakan"
      ]
    },
    5: {
      title: "SOP Sapaan & Komunikasi Profesional",
      points: [
        "Sapa penumpang dengan ramah",
        "Tanyakan tujuan dan preferensi rute",
        "Hindari obrolan sensitif (politik, SARA, pribadi)"
      ]
    },
    6: {
      title: "SOP Kebersihan & Kenyamanan Layanan",
      points: [
        "Kendaraan bersih, harum, bebas asap rokok",
        "Sediakan tisu/hand sanitizer jika memungkinkan"
      ]
    },
    7: {
      title: "SOP Penanganan Keluhan Pelanggan",
      points: [
        "Dengarkan tanpa menyela",
        "Berikan solusi sesuai prosedur perusahaan",
        "Laporkan insiden melalui aplikasi bila perlu"
      ]
    },
    8: {
      title: "SOP Barang Penumpang",
      points: [
        "Bantu menaikkan dan menurunkan barang",
        "Pastikan tidak ada barang tertinggal",
        "Hindari memegang tas pribadi tanpa izin"
      ]
    },
    9: {
      title: "SOP Perlindungan Informasi Penumpang",
      points: [
        "Tidak menyimpan nomor penumpang di luar aplikasi",
        "Tidak menyebarkan informasi pribadi pelanggan",
        "Hanya hubungi melalui fitur resmi aplikasi"
      ]
    },
    10: {
      title: "SOP Verifikasi Identitas Pesanan",
      points: [
        "Cocokkan nama, nomor plat, dan tujuan di aplikasi",
        "Pastikan penumpang benar yang memesan",
        "Laporkan jika ada indikasi penyalahgunaan akun"
      ]
    },
    11: {
      title: "SOP Penerimaan Pesanan",
      points: [
        "Terima pesanan hanya jika sanggup menyelesaikan",
        "Jangan pilih-pilih order berdasarkan lokasi tertentu"
      ]
    },
    12: {
      title: "SOP Penjemputan Tepat Waktu",
      points: [
        "Tiba sesuai estimasi yang tertera",
        "Konfirmasi chat/telepon jika lokasi sulit ditemukan",
        "Tunggu sesuai batas waktu aplikasi"
      ]
    },
    13: {
      title: "SOP Pengantaran Sesuai Aplikasi",
      points: [
        "Ikuti rute terbaik/permintaan penumpang",
        "Akhiri perjalanan setelah penumpang turun di titik tujuan"
      ]
    },
    14: {
      title: "SOP Sistem Pembayaran",
      points: [
        "Terima pembayaran sesuai nominal aplikasi",
        "Gunakan metode e-wallet bila tersedia",
        "Berikan uang kembalian secara tepat"
      ]
    },
    15: {
      title: "SOP Penerapan Tarif Resmi",
      points: [
        "Tidak menambah tarif sepihak",
        "Laporkan apabila tarif tidak sesuai sistem"
      ]
    },
    16: {
      title: "SOP Keadaan Darurat Kecelakaan",
      points: [
        "Utamakan keselamatan diri dan penumpang",
        "Hubungi pihak berwenang dan perusahaan",
        "Bantu penumpang mencari pertolongan"
      ]
    },
    17: {
      title: "SOP Penumpang Berkebutuhan Khusus",
      points: [
        "Berikan bantuan naik turun kendaraan",
        "Dengarkan kebutuhan spesifik pelanggan",
        "Jaga sikap sopan dan tidak diskriminatif"
      ]
    },
    18: {
      title: "SOP Penanganan Penumpang Mabuk atau Agresif",
      points: [
        "Tetap tenang dan hindari perdebatan",
        "Jika membahayakan, hentikan perjalanan di tempat aman",
        "Laporkan kejadian ke perusahaan"
      ]
    },
    19: {
      title: "SOP Barang Berbahaya",
      points: [
        "Tolak muatan yang melanggar aturan (gas ilegal, senjata, dll.)",
        "Rujuk pada pedoman perusahaan sebelum menerima paket tertentu"
      ]
    },
    20: {
      title: "SOP Bencana & Situasi Darurat Kota",
      points: [
        "Ikuti arahan petugas berwenang",
        "Hindari wilayah terlarang atau terdampak",
        "Prioritaskan keselamatan daripada melanjutkan perjalanan"
      ]
    }
  };

  // Data dokumen K3
  const dokumenK3Data = [
    {
        id: 18,
        title: "Penanganan Penumpang Mabuk atau Agresif",
        description: "Utamakan keselamatan, minimalisir bahaya.",
        category: "Penanganan Khusus & Darurat",
        tags: ["#Keamanan", "#Darurat"],
        image: "/assets/img/thumbnail/penanganan-penumpang-mabuk-atau-agresif.png",
        color: "orange"
    },
    {
        id: 4,
        title: "Penanganan Cuaca Ekstrem",
        description: "Kurangi risiko cuaca buruk dengan kontrol lebih hati-hati.",
        category: "Keselamatan & Berkendara",
        tags: ["#Cuaca", "#Keselamatan"],
        image: "/assets/img/thumbnail/penanganan-cuaca-ekstrem.png",
        color: "red"
    },
    {
        id: 11,
        title: "Penerimaan Pesanan",
        description: "Terima order yang sesuai dan selesaikan dengan aman.",
        category: "Operasional Driver",
        tags: ["#Operasional", "#Order"],
        image: "/assets/img/thumbnail/penerimaan-pesanan.png",
        color: "green"
    },
    {
        id: 7,
        title: "Penanganan Keluhan Pelanggan",
        description: "Tanggapi keluhan dengan solusi & prosedur resmi.",
        category: "Etika & Layanan Pelanggan",
        tags: ["#CustomerCare", "#Layanan"],
        image: "/assets/img/thumbnail/penanganan-keluhan-pelanggan.png",
        color: "blue"
    },
    {
        id: 20,
        title: "Bencana & Situasi Darurat Kota",
        description: "Hindari area terdampak dan ikuti arahan pihak berwenang.",
        category: "Penanganan Khusus & Darurat",
        tags: ["#Bencana", "#Keselamatan"],
        image: "/assets/img/thumbnail/bencana-situasi-darurat-kota.png",
        color: "orange"
    },
    {
        id: 13,
        title: "Pengantaran Sesuai",
        description: "Antar hingga tujuan sesuai sebelum mengakhiri perjalanan.",
        category: "Operasional Driver",
        tags: ["#Delivery", "#PatuhSistem"],
        image: "/assets/img/thumbnail/pengantaran-sesuai.png",
        color: "green"
    },
    {
        id: 1,
        title: "Berkendara Aman",
        description: "Utamakan keselamatan dengan mematuhi aturan dan kondisi jalan.",
        category: "Keselamatan & Berkendara",
        tags: ["#Keselamatan", "#Kendaraan"],
        image: "/assets/img/thumbnail/berkendara-aman.png",
        color: "red"
    },
    {
        id: 9,
        title: "Perlindungan Informasi Penumpang",
        description: "Lindungi data penumpang dari penyalahgunaan.",
        category: "Privasi & Keamanan Data",
        tags: ["#Privasi", "#KeamananData"],
        image: "/assets/img/thumbnail/perlindungan-informasi-penumpang.png",
        color: "purple"
    },
    {
        id: 6,
        title: "Kebersihan & Kenyamanan Layanan",
        description: "Pastikan kendaraan bersih agar pelanggan nyaman.",
        category: "Etika & Layanan Pelanggan",
        tags: ["#Kebersihan", "#Kenyamanan"],
        image: "/assets/img/thumbnail/kebersihan-kenyamanan-layanan.png",
        color: "blue"
    },
    {
        id: 3,
        title: "Penggunaan Helm dan Sabuk Pengaman",
        description: "Wajib pakai perlindungan keselamatan.",
        category: "Keselamatan & Berkendara",
        tags: ["#SafetyGear", "#Keselamatan"],
        image: "/assets/img/thumbnail/penggunaan-helm-dan-sabuk-pengaman.png",
        color: "red"
    },
    {
        id: 14,
        title: "Sistem Pembayaran",
        description: "Ikuti metode dan nominal pembayaran sesuai aplikasi.",
        category: "Operasional Driver",
        tags: ["#Pembayaran", "#Keuangan"],
        image: "/assets/img/thumbnail/sistem-pembayaran.png",
        color: "green"
    },
    {
        id: 5,
        title: "Sapa & Komunikasi Profesional",
        description: "Berkomunikasi sopan dan profesional tanpa menyinggung privasi.",
        category: "Etika & Layanan Pelanggan",
        tags: ["#Etika", "#Komunikasi"],
        image: "/assets/img/thumbnail/sapaan-komunikasi-profesional.png",
        color: "blue"
    },
    {
        id: 17,
        title: "Penumpang Berkebutuhan Khusus",
        description: "Bantu dengan sopan sesuai kebutuhan pelanggan.",
        category: "Penanganan Khusus & Darurat",
        tags: ["#Prioritas", "#Disabilitas"],
        image: "/assets/img/thumbnail/penumpang-berkebutuhan-khusus.png",
        color: "orange"
    },
    {
        id: 10,
        title: "Verifikasi Identitas Pesanan",
        description: "Pastikan penumpang sesuai identitas di aplikasi.",
        category: "Privasi & Keamanan Data",
        tags: ["#Keamanan", "#Verifikasi"],
        image: "/assets/img/thumbnail/verifikasi-identitas-pesanan.png",
        color: "purple"
    },
    {
        id: 12,
        title: "Penjemputan Tepat Waktu",
        description: "Datang tepat waktu & informasikan bila ada kendala.",
        category: "Operasional Driver",
        tags: ["#OnTime", "#Service"],
        image: "/assets/img/thumbnail/penjemputan-tepat-waktu.png",
        color: "green"
    },
    {
        id: 2,
        title: "Pemeliharaan Kendaraan",
        description: "Pastikan kendaraan layak jalan sebelum bekerja.",
        category: "Keselamatan & Berkendara",
        tags: ["#Maintenance", "#Safety"],
        image: "/assets/img/thumbnail/pemeliharaan-kendaraan.png",
        color: "red"
    },
    {
        id: 19,
        title: "Barang Berbahaya",
        description: "Tolak muatan ilegal demi keselamatan hukum & operasional.",
        category: "Penanganan Khusus & Darurat",
        tags: ["#Keamanan", "#Kargo"],
        image: "/assets/img/thumbnail/barang-berbahaya.png",
        color: "orange"
    },
    {
        id: 15,
        title: "Penerapan Tarif Resmi",
        description: "Gunakan tarif resmi tanpa tambahan ilegal.",
        category: "Operasional Driver",
        tags: ["#Tarif", "#PatuhAturan"],
        image: "/assets/img/thumbnail/penerapan-tarif-resmi.png",
        color: "green"
    },
    {
        id: 8,
        title: "Barang Penumpang",
        description: "Bantu barang penumpang tanpa melanggar privasi.",
        category: "Etika & Layanan Pelanggan",
        tags: ["#Layanan", "#Barang"],
        image: "/assets/img/thumbnail/barang-penumpang.png",
        color: "blue"
    },
    {
        id: 16,
        title: "Keadaan Darurat Kecelakaan",
        description: "Keselamatan utama, segera hubungi pihak berwenang.",
        category: "Penanganan Khusus & Darurat",
        tags: ["#Darurat", "#Safety"],
        image: "/assets/img/thumbnail/keadaan-darurat-kecelakaan.png",
        color: "orange"
    }
];



  // Extract unique categories and tags
  const categories = useMemo(() => {
    return [...new Set(dokumenK3Data.map(doc => doc.category))];
  }, []);

  const tags = useMemo(() => {
    const allTags = dokumenK3Data.flatMap(doc => doc.tags);
    return [...new Set(allTags)];
  }, []);

  // Filter and search logic
  const filteredData = useMemo(() => {
    return dokumenK3Data.filter(doc => {
      // Search filter
      const matchesSearch = searchQuery === '' ||
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = filters.category === 'all' || doc.category === filters.category;

      // Tag filter
      const matchesTag = filters.tag === 'all' || doc.tags.includes(filters.tag);

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, filters]);

  const itemsPerPage = 16;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value) => {
    setFilters(prev => ({ ...prev, category: value }));
    setCurrentPage(1);
  };

  const handleTagChange = (value) => {
    setFilters(prev => ({ ...prev, tag: value }));
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setFilters({ category: 'all', tag: 'all' });
    setCurrentPage(1);
  };

  const hasActiveFilters = filters.category !== 'all' || filters.tag !== 'all';

  const getCategoryColor = (color) => {
    const colors = {
      blue: "bg-blue-200 text-blue-500",
      purple: "bg-[#F4F3FF] text-[#7839EE]",
      orange: "bg-[#FEF6EE] text-[#E04F16]",
      green: "bg-green-200 text-green-500",
      red: "bg-red-200 text-red-400"
    };
    return colors[color] || colors.blue;
  };

  const handleCardClick = (doc) => {
    setSelectedDoc(doc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDoc(null);
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-background py-16 sm:py-20">
        <div className="w-full px-4 sm:px-6 mx-auto">
          {/* Header */}
          <div className="my-4 sm:my-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Dokumen K3
            </h1>
            
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <SearchBar onSearch={handleSearch} placeholder="Cari dokumen..." />
              <FilterDialog hasActiveFilters={hasActiveFilters}>
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Filter Dokumen</h3>
                    <p className="text-sm text-gray-400">
                      Pilih kategori atau tags untuk memfilter dokumen K3
                    </p>
                  </div>

                  {/* Category Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Kategori
                    </label>
                    <Select value={filters.category} onValueChange={handleCategoryChange}>
                      <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-white focus:ring-teal-500">
                        <SelectValue placeholder="Pilih kategori" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-white">
                        <SelectItem value="all" className="focus:bg-slate-800 focus:text-white">
                          Semua Kategori
                        </SelectItem>
                        {categories.map((category) => (
                          <SelectItem 
                            key={category} 
                            value={category}
                            className="focus:bg-slate-800 focus:text-white"
                          >
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Tags Filter */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Tags
                    </label>
                    <Select value={filters.tag} onValueChange={handleTagChange}>
                      <SelectTrigger className="w-full bg-slate-900 border-slate-700 text-white focus:ring-teal-500">
                        <SelectValue placeholder="Pilih tag" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-700 text-white">
                        <SelectItem value="all" className="focus:bg-slate-800 focus:text-white">
                          Semua Tags
                        </SelectItem>
                        {tags.map((tag) => (
                          <SelectItem 
                            key={tag} 
                            value={tag}
                            className="focus:bg-slate-800 focus:text-white"
                          >
                            {tag}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={handleResetFilters}
                    variant="outline"
                    className="w-full bg-slate-900 border-slate-700 hover:bg-slate-700 text-white"
                    disabled={!hasActiveFilters}
                  >
                    <X className="w-4 h-4 mr-2" />
                    Reset Filter
                  </Button>
                </div>
              </FilterDialog>
            </div>
          </div>

          {/* Grid Cards */}
          {currentData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {currentData.map((doc) => (
                <div
                  key={doc.id}
                  onClick={() => handleCardClick(doc)}
                  className="group bg-backgroundsecondary hover:bg-gradient-to-r hover:from-[#4DB8B2] hover:to-[#A6FBD4] rounded-3xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col h-full relative"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-48 w-full py-4 px-3">
                    {/* Category Badge */}
                    <span className={`absolute top-5 right-7 z-10 text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(doc.color)}`}>
                      {doc.category}
                    </span>
                    <div className="relative h-full w-full">
                      <Image src={doc.image} alt={doc.title} fill className='object-contain' />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 h-fit transition-colors duration-300">
                      {doc.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 h-fit group-hover:text-slate-500 transition-colors duration-300">
                      {doc.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-row gap-2 mt-auto w-full justify-center">
                      {doc.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#263238] text-gray-300 text-xs px-4 py-2 rounded-full w-full group-hover:bg-white group-hover:text-slate-900 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 sm:py-20 mb-8 sm:mb-12">
              <div className="bg-backgroundsecondary rounded-3xl p-6 sm:p-10 text-center max-w-md mx-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-slate-700 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Dokumen Tidak Ditemukan</h3>
                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">
                  {searchQuery && hasActiveFilters
                    ? `Tidak ada dokumen yang cocok dengan pencarian "${searchQuery}" dan filter yang dipilih.`
                    : searchQuery
                    ? `Tidak ada dokumen yang cocok dengan pencarian "${searchQuery}".`
                    : 'Tidak ada dokumen yang cocok dengan filter yang dipilih.'}
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery('');
                    handleResetFilters();
                  }}
                  className="bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white"
                >
                  Reset Pencarian & Filter
                </Button>
              </div>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && selectedDoc && (
            <div 
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeModal}
            >
              <div 
                className="bg-backgroundsecondary rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-backgroundsecondary p-4 sm:p-6 border-b border-slate-700 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-2 sm:mb-3 ${getCategoryColor(selectedDoc.color)}`}>
                      {selectedDoc.category}
                    </span>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                      {sopData[selectedDoc.id]?.title || selectedDoc.title}
                    </h2>
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-2 hover:bg-slate-700 rounded-full transition-colors flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 sm:p-6">
                  {/* Document Image */}
                  <div className="relative h-36 sm:h-48 w-full mb-4 sm:mb-6 rounded-xl overflow-hidden bg-transparent">
                    <Image 
                      src={selectedDoc.image} 
                      alt={selectedDoc.title} 
                      fill 
                      className='object-cover object-top' 
                    />
                  </div>

                  {/* SOP Points */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-teal-400 mb-3 sm:mb-4">Poin-Poin SOP:</h3>
                    <ul className="space-y-2 sm:space-y-3">
                      {sopData[selectedDoc.id]?.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base">
                          <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                            {index + 1}
                          </span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-slate-700">
                    <div className="flex flex-wrap gap-2">
                      {selectedDoc.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-[#263238] text-gray-300 text-xs px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 0 && (
            <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                «
              </button>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 sm:px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                ‹
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-[#4DB8B2] to-[#A6FBD4] hover:from-[#3da7a1] hover:to-[#8ee8c0] text-white'
                      : 'bg-slate-800 text-white hover:bg-slate-700'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                ›
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 sm:px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm sm:text-base"
              >
                »
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ContainerDokumenK3;