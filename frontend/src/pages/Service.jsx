import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { serviceCategories, formatRupiah, slugify } from '../data/siteData.js'

export default function Service() {
  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">

       {/* 1. BANNER UTAMA: Dibuat melayang di dalam kotak pembungkus */}
            <div className="max-w-6xl mx-auto w-full px-4 pt-6">
              <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
                <PageBanner title="Our Service" img="/assets/our-service.png" />
              </div>
            </div>

      {/* 1. CATEGORY QUICK-NAV: Mengikuti warna tombol appointment dengan radius 5px */}
      <div className="sticky top-[80px] z-30 bg-[#FFE9F0] border-b border-pink-200 mt-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          {/* Jarak py-4 dibuat sedikit lebih longgar agar tombol terlihat lebih turun dan proposional */}
          <div className="flex justify-start md:justify-center gap-3 py-4">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  const element = document.getElementById(cat.id);
                  if (element) {
                    // Jarak kompensasi tinggi sticky navbar (atur nilai ini jika kurang turun/terlalu turun)
                    const offset = 140; 
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="flex-shrink-0 bg-[#C84870] hover:bg-[#58001C] text-white font-bold px-5 py-2 rounded-[3.5px] text-sm uppercase tracking-wider transition-colors shadow-sm"
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. AREA DAFTAR TREATMENT SECTION */}
      <div className="bg-[#FFE9F0] min-h-screen py-12">
        <div className="w-full space-y-16">
          
          {/* ========================================================================= */}
          {/* KELOMPOK A: KATEGORI SLIDER (NAIL, EYELASH, SULAM, WAXING, IPL, HAIR)     */}
          {/* ========================================================================= */}
          {serviceCategories
            .filter(cat => {
              const idClean = cat.id.toLowerCase();
              return !idClean.includes('underarm') && !idClean.includes('face') && !idClean.includes('tato') && !idClean.includes('tindik');
            })
            .map((cat, index) => (
              <section key={cat.id} className="relative group">
                
                {/* Garis hitam melintang sepanjang halaman (Kecuali kategori pertama / NAIL) */}
                {index !== 0 && (
                  <div className="border-t border-black w-full mb-12"></div>
                )}

                <div className="max-w-6xl mx-auto px-4">
                  {/* Judul Kategori */}
                  <h2 id={cat.id} className="text-2xl md:text-3xl text-center mb-8 font-['Cormorant_Garamond'] font-bold tracking-widest text-gray-900 uppercase scroll-mt-24">
                    {cat.label}
                  </h2>

                  {/* WRAPPER SLIDER DAN PANAH KUSTOM */}
                  <div className="relative flex items-center px-4 md:px-8">
                    
                    {/* Tombol Panah Kiri */}
                    <button 
                      onClick={() => {
                        const slider = document.getElementById(`slider-${cat.id}`);
                        if (slider) slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
                      }}
                      className="absolute left-0 z-10 text-[#C84870] hover:text-[#58001C] text-4xl font-light hidden md:block select-none transition-colors"
                    >
                      &#10094;
                    </button>

                    {/* Container Slider Card */}
                    <div 
                      id={`slider-${cat.id}`}
                      className="w-full flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
                    >
                      {cat.items.map((item) => (
                        <div
                          key={item.name}
                          className="min-w-[90%] md:min-w-[calc(50%-12px)] max-w-[90%] md:max-w-[calc(50%-12px)] snap-start flex flex-col bg-[#FFB3C6] border border-pink-200 rounded-none shadow-md overflow-hidden flex-shrink-0"
                        >
                          {/* Blok Atas Card */}
                          <div className="flex gap-4 p-4 items-start">
                            <img
                              src={`/assets/treatments/${cat.id}-${slugify(item.name)}.png`} 
                              onError={(e) => { e.target.src = `https://picsum.photos/seed/${item.name}/120/120` }}
                              alt={item.name}
                              className="w-24 h-24 md:w-28 md:h-28 rounded-none object-cover flex-shrink-0 border border-white p-1 bg-white shadow-sm"
                            />
                            <div className="flex-1">
                              <h3 className="font-['Cormorant_Garamond'] font-bold text-lg md:text-xl text-gray-950 leading-tight mb-2">
                                {item.name}
                              </h3>
                              <p className="text-xs text-gray-800 font-light leading-relaxed line-clamp-3">
                                {item.description || "Perawatan kecantikan berkualitas tinggi dari tim ahli kami."}
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-black w-full"></div>

                          {/* Blok Bawah Card */}
                          <div className="flex justify-between items-center p-4 bg-[#FFB3C6]">
                            <div className="flex items-center gap-2 text-sm text-gray-950 font-normal">
                              <span className="text-lg">🕒</span> 
                              <span>Durasi {item.duration}</span>
                            </div>
                            <div className="text-right flex flex-col justify-center">
                              <span className="text-xs text-gray-800 font-light leading-none mb-0.5">Harga</span>
                              <span className="font-['Poppins'] font-semibold text-base text-gray-950">
                                {formatRupiah(item.price)}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tombol Panah Kanan */}
                    <button 
                      onClick={() => {
                        const slider = document.getElementById(`slider-${cat.id}`);
                        if (slider) slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
                      }}
                      className="absolute right-0 z-10 text-[#C84870] hover:text-[#58001C] text-4xl font-light hidden md:block select-none transition-colors"
                    >
                      &#10095;
                    </button>

                  </div>
                </div>
              </section>
            ))}


          {/* ========================================================================= */}
          {/* KELOMPOK B: KATEGORI MANUAL GRID (UNDERARM, FACE TREATMENT, TATO & TINDIK) */}
          {/* ========================================================================= */}
          {serviceCategories
            .filter(cat => {
              const idClean = cat.id.toLowerCase();
              return idClean.includes('underarm') || idClean.includes('face') || idClean.includes('tato') || idClean.includes('tindik');
            })
            .map((cat) => (
              <section key={cat.id} className="relative group">
                
                {/* Garis hitam pemisah melintang selalu muncul untuk kelompok B */}
                <div className="border-t border-black w-full mb-12"></div>

                <div className="max-w-6xl mx-auto px-4">
                  {/* Judul Kategori */}
                  <h2 id={cat.id} className="text-2xl md:text-3xl text-center mb-8 font-['Cormorant_Garamond'] font-bold tracking-widest text-gray-900 uppercase scroll-mt-24">
                    {cat.label}
                  </h2>

                  {/* Wrapper Isi: Menggunakan grid 2 kolom langsung tanpa pembungkus slider/panah */}
                  <div className="w-full grid md:grid-cols-2 gap-6 pb-4">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col bg-[#FFB3C6] border border-pink-200 rounded-none shadow-md overflow-hidden"
                      >
                        {/* Blok Atas Card */}
                        <div className="flex gap-4 p-4 items-start">
                          <img
                            src={`/assets/treatments/${cat.id}-${slugify(item.name)}.png`} 
                            onError={(e) => { e.target.src = `https://picsum.photos/seed/${item.name}/120/120` }}
                            alt={item.name}
                            className="w-24 h-24 md:w-28 md:h-28 rounded-none object-cover flex-shrink-0 border border-white p-1 bg-white shadow-sm"
                          />
                          <div className="flex-1">
                            <h3 className="font-['Cormorant_Garamond'] font-bold text-lg md:text-xl text-gray-950 leading-tight mb-2">
                              {item.name}
                            </h3>
                            <p className="text-xs text-gray-800 font-light leading-relaxed line-clamp-3">
                              {item.description || "Perawatan kecantikan berkualitas tinggi dari tim ahli kami."}
                            </p>
                          </div>
                        </div>

                        <div className="border-t border-black w-full"></div>

                        {/* Blok Bawah Card */}
                        <div className="flex justify-between items-center p-4 bg-[#FFB3C6]">
                          <div className="flex items-center gap-2 text-sm text-gray-950 font-normal">
                            <span className="text-lg">🕒</span> 
                            <span>Durasi {item.duration}</span>
                          </div>
                          <div className="text-right flex flex-col justify-center">
                            <span className="text-xs text-gray-800 font-light leading-none mb-0.5">Harga</span>
                            <span className="font-['Poppins'] font-semibold text-base text-gray-950">
                              {formatRupiah(item.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </section>
            ))}

        </div>
      </div>
      

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#FF758F] text-gray-950 py-7 border-t border-pink-300">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          
          {/* Kolom Kiri: Nama Salon, Address & Sosmed */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-['Poppins'] font-bold text-[20px] tracking-wider uppercase text-gray-950 leading-tight">
                ERNA ESA STUDIO
              </h3>
              
              {/* ADDRESS di Footer */}
              <div className="flex items-start justify-center md:justify-start gap-3 mt-3">
                <div className="w-6 h-6 flex-shrink-0 mt-0.5">
                  <img 
                    src="/assets/icon-address-footer.png" 
                    alt="Address Icon" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <p className="font-['Poppins'] text-[11px] text-gray-900 leading-relaxed font-light max-w-xs">
                  Jl. Manggarai Utara 2 No.11 12, RT.9/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850.
                </p>
              </div>

              {/* TELEPHONE di Footer */}
              <div className="flex items-center justify-center md:justify-start gap-3 mt-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <img 
                    src="/assets/icon-phone-footer.png" 
                    alt="Phone Icon" 
                    className="w-full h-full object-contain" 
                  />
                </div>
                <p className="font-['Poppins'] text-[12px] text-gray-950 font-medium">
                  +6285770594912
                </p>
              </div>
            </div>
            
            {/* Sosmed */}
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

          {/* Kolom Tengah: Logo Bulat */}
          <div className="flex justify-center">
            <div className="w-36 h-36 md:w-40 md:h-40 bg-white rounded-full p-2 shadow-inner flex items-center justify-center">
              <img src="/assets/logo-footer.png" alt="Erna Esa Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>

          {/* Kolom Kanan: Jam Buka & Marketplace */}
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

        {/* Hak Cipta Paling Bawah */}
        <div className="border-t border-pink-400/30 mt-0 pt-6 text-center">
          <p className="font-['Poppins'] text-[12px] text-gray-900 font-light tracking-wide">
            © 2026 Erna Esa Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
