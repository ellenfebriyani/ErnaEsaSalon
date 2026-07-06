import PageBanner from '../components/PageBanner.jsx'
import { salon } from '../data/siteData.js'

export default function About() {
  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
      
      {/* 1. BANNER UTAMA: Dibuat melayang di dalam kotak pembungkus */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-6">
        <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
          <PageBanner title="About Us" img="/assets/judul-about.png" />
        </div>
      </div>

      {/* Konten Utama About */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 grid md:grid-cols-2 gap-12 items-center flex-1">
        
        {/* SISI KIRI: Tata Letak Foto dengan STROKE PUTIH & SHADOW */}
        <div className="relative space-y-4 max-w-lg mx-auto w-full">
          
          {/* Baris Atas: Dua Foto Berdampingan dengan Sudut Kustom */}
          <div className="grid grid-cols-2 gap-3">
            <img
              src="/assets/about1.png"
              alt="Treatment Kuku"
              className="rounded-tl-[50px] rounded-tr-none rounded-bl-[20px] rounded-br-none border-4 border-white shadow-xl w-full h-20 md:h-60 object-cover bg-white"
            />
            <img
              src="/assets/about2.png"
              alt="Ruang Tunggu Salon"
              className="rounded-tl-none rounded-tr-[50px] rounded-bl-none rounded-br-[20px] border-4 border-white shadow-xl w-full h-20 md:h-60 object-cover bg-white"
            />
          </div>

          {/* Baris Bawah: Foto Plang Nama Salon Melebar */}
          <div className="relative">
            <img
              src="/assets/about3.png"
              alt="Plang Erna Esa Studio"
              className="rounded-[20px] border-4 border-white shadow-xl w-full h-36 md:h-60 object-cover bg-white"
            />
            
            {/* Ornamen Bunga di Samping/Sudut Kanan Bawah Foto */}
            <div className="absolute -right-9 -bottom-6 w-30 md:w-28 h-40 md:h-38 z-10 pointer-events-none">
              <img 
                src="/assets/ornamen-bunga.png" 
                alt="Flower Ornament" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

        </div>

        {/* SISI KANAN: Deskripsi Teks */}
        <div className="font-['Poppins']">
          <p className="uppercase tracking-widest text-gray-900 font-['Moon_Dance'] font-bold text-[12px] md:text-[18px]">
            ABOUT US
          </p>
          
          {/* Nama Studio dengan Aksen Ilustrasi Kecil */}
          <div className="relative inline-block mb-5">
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[36px] md:text-[40px] tracking-wide text-gray-900 uppercase leading-none">
              ERNA ESA STUDIO
            </h2>
          
          </div>
          
          <div className="text-gray-800 text-[14px] md:text-[15px] leading-relaxed font-light space-y-4">
            <p>
              Didirikan pada tahun 2018 oleh Ibu Erna Esayanti, Erna Esa Studio hadir sebagai salon 
              kecantikan yang berawal dari layanan eyelash dan terus berkembang mengikuti kebutuhan 
              pelanggan. Dengan passion di bidang beauty serta komitmen pada kualitas pelayanan, 
              Erna Esa Studio kini menyediakan berbagai treatment kecantikan, mulai dari eyelash, 
              nail art, facial, hingga perawatan rambut untuk wanita.
            </p>
            <p>
              Mengutamakan kenyamanan dan kepuasan pelanggan, kami terus berinovasi untuk 
              menghadirkan layanan kecantikan yang profesional, modern, dan terpercaya.
            </p>
          </div>
        </div>

      </section>

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