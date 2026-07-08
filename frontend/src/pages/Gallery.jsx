import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import { galleryCategories, galleryItems } from '../data/siteData.js'

export default function Gallery() {
  const [active, setActive] = useState('All')

  // ====== 1. DI SINI LOGIKA FILTER YANG KITA UBAH ======
  const filtered = galleryItems.filter((item) => {
    // Jika tombol All atau All Gallery aktif, kunci agar hanya menampilkan kategori 'Nail'
    if (active === 'All' || active === 'All Gallery') {
      return true;
    }
    // Jika tombol lain diklik, tampilkan sesuai kategorinya
    return item.category === active
  })

  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
      {/* 1. BANNER UTAMA */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-6">
        <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.15)]">
          <PageBanner title="Our Gallery" img="/assets/judul-about.png" />
        </div>
      </div>

      {/* 2. SECTION TITLE & FILTER BUTTONS */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-8 pb-8 text-center select-none">
        {/* Judul Utama Menggunakan Cormorant Garamond */}
        <h2 className="font-['Cormorant_Garamond'] text-[24px] font-[800] text-[#2D2D2D] uppercase leading-tight tracking-normal antialiased">
          OUR GALERY
        </h2>
        <p className="font-['Cormorant_Garamond'] text-[16px] font-[700] text-[#1A1A1A] uppercase mt-0 tracking-normal antialiased">
          LET'S SEE OUR GALERY
        </p>

        {/* Filter Buttons: Kotak tegas & Menggunakan Font Poppins */}
        <div className="flex gap-3 flex-wrap justify-center mt-8">
          {galleryCategories.map((cat) => {
            const displayLabel = cat.toLowerCase() === 'all' ? 'ALL GALLERY' : cat.toUpperCase();
            
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-['Poppins'] px-5 py-2 rounded-[4px] text-[11px] font-bold tracking-widest transition-colors duration-200 ${
                  active === cat
                    ? 'bg-[#58001C] text-white shadow-md'
                    : 'bg-[#B32650] text-white hover:bg-[#58001C]'
                }`}
              >
                {displayLabel}
              </button>
            )
          })}
        </div>
      </div>

      {/* 3. AREA GRID FOTO */}
      <div className="bg-[#FFC0D3] flex-grow w-full py-12 px-6 md:px-12 shadow-[inset_0_4px_6px_rgba(0,0,0,0.05)]">
        {/* ====== 2. DI SINI UKURAN KONTAINER DIUBAH DARI max-w-6xl JADI max-w-4xl ====== */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.slice(0, 6).map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-[24px] overflow-hidden shadow-[0_8px_20px_rgba(0,0,0,0.15)] aspect-square bg-white transition-transform duration-300 hover:scale-[1.02]"
              >
                <img 
                  src={item.img} 
                  alt={item.caption || "Gallery Item"} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>

          {/* State jika kosong */}
          {filtered.length === 0 && (
            <p className="font-['Poppins'] text-center text-[#B03A5B] font-medium py-12 text-sm">
              Belum ada foto untuk kategori ini.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}