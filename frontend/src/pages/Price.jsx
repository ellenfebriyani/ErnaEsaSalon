import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import { priceCategories, promos, formatRupiah } from '../data/siteData.js'

export default function Price() {
  // State untuk mengatur indeks kategori aktif (Slider) menggunakan priceCategories
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi navigasi ke kategori sebelumnya
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? priceCategories.length - 1 : prev - 1));
  };

  // Fungsi navigasi ke kategori berikutnya
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === priceCategories.length - 1 ? 0 : prev + 1));
  };

  // Kategori aktif saat ini diambil dari data priceCategories
  const currentCat = priceCategories[currentIndex];

  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
      {/* 1. BANNER UTAMA */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-6">
        <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
          <PageBanner title="Our Price" img="/assets/our-price.png" />
        </div>
      </div>

      {/* 2. DAFTAR HARGA SINGLE CARD SLIDER */}
      <div className="max-w-6xl mx-auto w-full px-4 py-12">
        <div className="relative w-full bg-[#FFB8CA] rounded-0 overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
          
          {/* ================= PANAH NAVIGASI DI SAMPING GAMBAR & TULISAN ================= */}
          {/* Panah Kiri */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 text-[#C84870] hover:scale-110 transition-transform bg-white/60 p-1.5 rounded-full backdrop-blur-sm md:bg-transparent md:p-0"
            aria-label="Previous Category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Panah Kanan */}
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 text-[#C84870] hover:scale-110 transition-transform bg-white/60 p-1.5 rounded-full backdrop-blur-sm md:bg-transparent md:p-0"
            aria-label="Next Category"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* ================= ISI KONTEN CARD (ZIG-ZAG GRID) ================= */}
          
          {/* BLOK 1: FOTO KIRI ATAS */}
          <div className="w-full h-[350px] md:h-[480px] p-6 md:pt-6 md:pb-0 md:pr-0 md:pl-12">
            <img 
              src={`/assets/price/${currentCat.id}-banner1.png`}
              alt={`${currentCat.label} 1`} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* BLOK 1: TULISAN KANAN ATAS */}
          <div className="p-8 md:p-12 md:px-20 flex flex-col justify-center">
            <h3 className="font-['Cormorant_Garamond'] font-bold uppercase text-[18px] md:text-[22px] tracking-wider mb-6 text-gray-950">
              Pricelist for {currentCat.label}
              </h3>
            <ul className="space-y-4 max-w-[85%] md:max-w-full">
              {currentCat.items.slice(0, currentCat.splitAfter || 6).map((item) => (
                <li key={item.name} className="flex justify-between items-end text-[13px] md:text-[14px] text-gray-900 font-['Poppins']">
                  <span className="pr-1 leading-tight max-w-[70%]">{item.name}</span>
                  <span className="flex-1 border-b border-gray-800/60 mx-1 mb-1"></span>
                  <span className="font-medium whitespace-nowrap">{formatRupiah(item.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOK 2: TULISAN KIRI BAWAH */}
          <div className="p-8 md:p-12 md:px-20 flex flex-col justify-center order-2 md:order-1">
            <h3 className="font-['Cormorant_Garamond'] font-bold uppercase text-[18px] md:text-[22px] tracking-wider mb-6 text-gray-950">
              Pricelist for {currentCat.subLabel || currentCat.label}
              </h3>
            <ul className="space-y-4 max-w-[85%] md:max-w-full w-full">
              {currentCat.items.slice(currentCat.splitAfter || 6).map((item) => (
                <li key={item.name} className="flex justify-between items-end text-[13px] md:text-[14px] text-gray-900 font-['Poppins']">
                  <span className="pr-1 leading-tight max-w-[70%]">{item.name}</span>
                  <span className="flex-1 border-b border-gray-800/60 mx-1 mb-1"></span>
                  <span className="font-medium whitespace-nowrap">{formatRupiah(item.price)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BLOK 2: FOTO KANAN BAWAH */}
          <div className="w-full h-[350px] md:h-[480px] p-6 md:pt-0 md:pb-6 md:pl-0 md:pr-12 order-1 md:order-2">
            <img 
              src={`/assets/price/${currentCat.id}-banner2.png`}
              alt={`${currentCat.label} 2`} 
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

      {/* 3. PROMO SECTION */}
      <section className="bg-transparent mb-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-bold tracking-widest uppercase text-gray-950">
              PROMO
            </h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
            {promos.slice(0, 2).map((promo) => (
              <div key={promo.title} className="bg-white rounded-2xl overflow-hidden shadow-md p-1.5 md:p-3">
                <div className="w-full aspect-square bg-gray-100 rounded-xl overflow-hidden">
                  <img 
                    src={promo.img} 
                    alt={promo.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#FF758F] text-gray-950 py-7 border-t border-pink-300 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-['Poppins'] font-bold text-[20px] tracking-wider uppercase text-gray-950 leading-tight">ERNA ESA STUDIO</h3>
              <div className="flex items-start justify-center md:justify-start gap-3 mt-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <img src="/assets/icon-address-footer.png" alt="Address Icon" className="w-full h-full object-contain" />
                </div>
                <p className="font-['Poppins'] text-[11px] text-gray-900 leading-relaxed font-light max-w-xs">
                  Jl. Manggarai Utara 2 No.11 12, RT.9/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <img src="/assets/icon-phone-footer.png" alt="Phone Icon" className="w-full h-full object-contain" />
                </div>
                <p className="font-['Poppins'] text-[12px] text-gray-950 font-medium">+6285770594912</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="font-['Poppins'] font-bold text-[13px] tracking-wider uppercase mb-2">FOLLOW US :</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
                  <img src="/assets/icon-instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
                  <img src="/assets/icon-tiktok.png" alt="Tiktok" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Tengah */}
          <div className="flex justify-center">
            <div className="w-36 h-36 md:w-40 md:h-40 bg-white rounded-full p-2 shadow-inner flex items-center justify-center">
              <img src="/assets/logo-footer.png" alt="Erna Esa Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>

          {/* Kolom Kanan */}
          <div className="flex flex-col gap-6 md:items-end">
            <div className="md:text-left font-['Poppins']">
              <p className="font-bold text-[20px] tracking-wider uppercase mb-1">OPENING HOURS :</p>
              <p className="text-[16px] font-reguler text-gray-950">Senin - Minggu</p>
              <p className="text-[16px] text-gray-950 font-light mt-0.5">09.00 AM - 20.00 PM</p>
            </div>
            <div className="md:text-right font-['Poppins']">
              <p className="font-bold text-[14px] tracking-wider uppercase mb-2">OFFICIAL MARKETPLACE :</p>
              <div className="flex gap-3.5 justify-center md:justify-end">
                <a href="https://shopee.co.id" target="_blank" rel="noreferrer" className="w-12 h-12 hover:scale-110 transition-transform">
                  <img src="/assets/icon-shopee.png" alt="Shopee" className="w-full h-full object-contain" />
                </a>
                <a href="https://tokopedia.com" target="_blank" rel="noreferrer" className="w-12 h-12 hover:scale-110 transition-transform">
                  <img src="/assets/icon-tokopedia.png" alt="Tokopedia" className="w-full h-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400/30 mt-0 pt-6 text-center">
          <p className="font-['Poppins'] text-[12px] text-gray-900 font-light tracking-wide">
            © 2026 Erna Esa Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}