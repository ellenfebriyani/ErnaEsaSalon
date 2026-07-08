import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import { galleryCategories, galleryItems } from '../data/siteData.js'

export default function Gallery() {
  const [active, setActive] = useState('All')

  // ====== 1. LOGIKA FILTER ======
  const filtered = galleryItems.filter((item) => {
    if (active === 'All' || active === 'All Gallery') {
      return true;
    }
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

      {/* 3. AREA GRID FOTO (Full Width Kanan-Kiri & Memiliki Jeda Bawah) */}
      {/* Diubah menjadi pb-0 agar jarak bawah diatur oleh elemen pembungkus luar */}
      <div className="bg-[#FFC0D3] w-full pt-12 pb-12 px-6 md:px-12 shadow-[inset_0_4px_6px_rgba(0,0,0,0.05)]">
        {/* Dikembalikan ke max-w-5xl atau max-w-6xl agar ukuran box foto melebar seimbang seperti gambar */}
        <div className="max-w-5xl mx-auto">
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

      {/* ====== JEDA/SPACING SEBELUM FOOTER ====== */}
      {/* Elemen kosong ini berwarna pink muda terang (#FFE9F0) setinggi 12 unit (h-12) untuk menciptakan ruang kosong sesuai gambar */}
      <div className="w-full h-12 bg-[#FFE9F0]"></div>

      {/* ================= FOOTER SECTION ================= */}
      {/* Mengganti link statis lama dengan update rute sosmed terbaru Anda yang langsung aktif */}
      <footer className="bg-[#FF758F] text-gray-950 py-7 border-t border-pink-300 mt-auto">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-center text-center md:text-left">
          {/* Kolom Kiri */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-['Poppins'] font-bold text-[20px] tracking-wider uppercase text-gray-950 leading-tight">ERNA ASA STUDIO</h3>
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
                <a href="https://www.instagram.com/byernaesa/" target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
                  <img src="/assets/icon-instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href="https://www.tiktok.com/@byernaesa" target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
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
                <a href="https://s.shopee.co.id/20thiWAu7v?share_channel_code=1" target="_blank" rel="noreferrer" className="w-12 h-12 hover:scale-110 transition-transform">
                  <img src="/assets/icon-shopee.png" alt="Shopee" className="w-full h-full object-contain" />
                </a>
                <a href="https://vt.tiktok.com/ZS9MBmoxk5eX4-yKZGw/" target="_blank" rel="noreferrer" className="w-12 h-12 hover:scale-110 transition-transform">
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