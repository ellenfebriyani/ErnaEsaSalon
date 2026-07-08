import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import { salon, productCategories, courseItems, formatRupiah, waLink } from '../data/siteData.js'

export default function ProductCourse() {
  // State untuk mengontrol indeks geser carousel course
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0)

  // Tepat 5 Kategori Navigasi Utama sesuai desain gambar
  const serviceCategories = [
    { id: 'course', label: 'Course' },
    { id: 'deodorant', label: 'Deodorant' },
    { id: 'press-nail', label: 'Press Nail' },
    { id: 'body-care', label: 'Body Care' },
    { id: 'lainnya', label: 'Lainnya' },
  ]

  // Handler Navigasi Carousel Course
  const nextCourse = () => {
    setCurrentCourseIndex((prev) => (prev + 1) % courseItems.length)
  }

  const prevCourse = () => {
    setCurrentCourseIndex((prev) => (prev - 1 + courseItems.length) % courseItems.length)
  }

  // Mengambil 2 item aktif sekaligus untuk ditampilkan di desktop
  const firstCourse = courseItems[currentCourseIndex]
  const secondCourse = courseItems[(currentCourseIndex + 1) % courseItems.length]

  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
      
      {/* 1. BANNER UTAMA (CATEGORY) */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-6">
        <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.15)]">
          <PageBanner title="Category" img="/assets/banner-category.png" />
        </div>
      </div>

      {/* 2. CATEGORY QUICK-NAV STICKY (Sesuai kode request & berjumlah tepat 5 tombol) */}
      <div className="sticky top-[80px] z-30 bg-[#FFE9F0] border-b border-pink-200 mt-6 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex justify-start md:justify-center gap-8 py-4">
            {[
              { id: 'course', label: 'Course' },
              { id: 'deodorant', label: 'Deodorant' },
              { id: 'pressnail', label: 'Press Nail' },
              { id: 'bodycare', label: 'Body Care' },
              { id: 'lainnya', label: 'Lainnya' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  const element = document.getElementById(cat.id);
                  if (element) {
                    // Menghitung offset jarak agar scroll tidak terhalang sticky navbar melayang
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

      {/* ================= SECTION: COURSE ================= */}
      {courseItems && courseItems.length > 0 && (
        <div id="course" className="w-full pt-10">
          <div className="max-w-6xl mx-auto w-full px-4 text-center">
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[32px] tracking-widest uppercase text-gray-950 mb-6">
              COURSE
            </h2>
            
            {/* Container pembungkus utama yang dikunci maksimal selebar card (max-w-4xl) */}
            <div className="relative w-full max-w-4xl mx-auto px-6 md:px-10">
              
              {/* Panah Kiri - Digeser merapat menggunakan md:-left-2 */}
              <button 
                onClick={prevCourse}
                className="absolute left-0 md:-left-2 top-1/2 -translate-y-1/2 text-[#C84870] hover:text-[#58001C] text-4xl font-bold transition-colors z-10 p-2 select-none"
              >
                ❮
              </button>

              {/* 1 Card Besar Melebar */}
              <div className="w-full bg-[#FFAEC7] rounded-[24px] p-6 md:p-8 shadow-md flex flex-col md:flex-row gap-8 items-center text-left border border-white/30 transition-all duration-300">
                
                {/* Frame Foto Utama ala Polaroid Tanpa Tag Atas (Full Gambar) */}
                <div className="w-full sm:w-[260px] bg-white rounded-[16px] p-3 shadow-inner border border-white/60 shrink-0 flex flex-col items-center">
                  <div className="w-full h-[240px] rounded-lg overflow-hidden">
                    <img 
                      src={courseItems[currentCourseIndex].img} 
                      alt={courseItems[currentCourseIndex].name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>

                {/* Detail Deskripsi Teks */}
                <div className="flex flex-col justify-between h-full py-1 font-['Poppins'] text-gray-950 w-full">
                  <div>
                    <h3 className="font-['Cormorant_Garamond'] font-bold text-[26px] leading-tight mb-4">
                      {courseItems[currentCourseIndex].name}
                    </h3>
                    <ul className="text-[14px] list-disc pl-5 space-y-1.5 font-medium leading-relaxed">
                      {(courseItems[currentCourseIndex].features || courseItems[currentCourseIndex].points || []).map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-[18px] font-extrabold tracking-wide mb-4">
                      {courseItems[currentCourseIndex].price}
                    </p>
                  </div>
                </div>

              </div>

              {/* Panah Kanan - Digeser merapat menggunakan md:-right-2 */}
              <button 
                onClick={nextCourse}
                className="absolute right-0 md:-right-2 top-1/2 -translate-y-1/2 text-[#C84870] hover:text-[#58001C] text-4xl font-bold transition-colors z-10 p-2 select-none"
              >
                ❯
              </button>

            </div>
          </div>
          
          {/* Garis Pembatas Lurus Sampai Ujung Halaman */}
          <hr className="w-full border-t border-gray-950/30 mt-16" />
        </div>
      )}


      {/* ================= SECTIONS: KATALOG PRODUK DINAMIS ================= */}
      {/* Melakukan perulangan otomatis dari productCategories (Deodorant, Press Nail, Body Care, Lainnya) */}
      {productCategories.map((cat, index) => (
        <div 
          key={cat.id} 
          id={cat.id === 'produk-lainnya' ? 'lainnya' : cat.id} 
          className="w-full pt-12"
        >
          <div className="max-w-6xl mx-auto w-full px-4">
            {/* Judul Kategori Tetap Berada di Tengah */}
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[28px] tracking-widest uppercase text-gray-950 text-center mb-8">
              {cat.label}
            </h2>
            
            {/* Grid 3 Kolom disesuaikan agar item di dalamnya sejajar rapi ke atas (items-start) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start justify-items-center">
              {cat.items?.map((item) => (
                <div key={item.name} className="flex flex-col items-start w-[220px]">
                  
                  {/* Bingkai Kotak Siku dengan Tambahan Stroke Warna Putih (border-2 border-white) */}
                  <div className="w-[220px] h-[220px] bg-white overflow-hidden shadow-sm border-8 border-white mb-4 rounded-none">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Judul Produk: Menggunakan font Cormorant Garamond & Otomatis Rata Kiri */}
                  <h4 className="font-['Cormorant_Garamond'] text-[16px] font-bold text-gray-950 w-full text-left leading-tight mb-1 line-clamp-2 min-h-[38px]">
                    {item.name}
                  </h4>
                  
                  {/* Harga Produk: Menggunakan teks mentah tanpa formatRupiah & Otomatis Rata Kiri */}
                  <p className="font-['Poppins'] text-[14px] font-bold text-gray-950 text-left mb-3 w-full">
                    {item.price}
                  </p>
                  
                  {/* Tombol Marketplace dengan bentuk membulat lonjong (rounded-full / rounded 24) */}
                 <a
                    href="https://shopee.co.id/wangiterusbyernaesa#product_list"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block text-center w-full bg-[#C84870] hover:bg-[#58001C] text-white py-1.5 font-['Poppins'] text-[12px] font-bold shadow-sm transition-all uppercase rounded-full tracking-wider"
                  >
                    MARKETPLACE
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Menampilkan Garis Pembatas Lurus Di Setiap Akhir Section, Kecuali Section Paling Bawah */}
          {index !== productCategories.length - 1 ? (
            <hr className="w-full border-t border-gray-950/30 mt-16" />
          ) : (
            <div className="mb-24" />
          )}
        </div>
      ))}
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