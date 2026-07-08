import PageBanner from '../components/PageBanner.jsx'
import { salon } from '../data/siteData.js'

export default function Contact() {
  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
      {/* 1. BANNER UTAMA */}
      <div className="max-w-6xl mx-auto w-full px-4 pt-6">
        <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
          <PageBanner title="Contact Us" img="/assets/banner-contact.png" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-4 pt-12 flex-1">
        {/* 2. TIGA KOTAK INFORMASI UTAMA */}
        <div className="grid md:grid-cols-12 gap-6 mb-8 text-gray-950">
          
          {/* Kotak Address */}
          <div className="bg-[#FFB3C6] border-4 border-white rounded-2xl py-3 px-5 flex items-center gap-4 shadow-sm md:col-span-5">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <img src="/assets/icon-address.png" alt="Address Icon" className="w-6 h-6 object-contain" />
            </div>
            <p className="text-[13px] md:text-[14px] font-['Poppins'] leading-relaxed">
              {salon.address}
            </p>
          </div>

          {/* Kotak Opening Hours */}
          <div className="bg-[#FFB3C6] border-4 border-white rounded-2xl py-3 px-5 flex flex-col justify-center text-center shadow-sm md:col-span-4">
            <h4 className="font-['Cormorant_Garamond'] font-bold uppercase text-[16px] md:text-[18px] tracking-wider mb-0.5">
              Opening Hours
            </h4>
            <p className="text-sm font-['Poppins'] whitespace-pre-line leading-tight">
              {salon.hours}
            </p>
          </div>

          {/* Kotak WhatsApp */}
          <div className="bg-[#FFB3C6] border-4 border-white rounded-2xl py-3 px-5 flex items-center gap-4 shadow-sm md:col-span-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0">
              <img src="/assets/icon-whatsapp.png" alt="WhatsApp Icon" className="w-6 h-6 object-contain" />
            </div>
            <a
              href={`https://wa.me/${salon.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-[15px] md:text-[17px] font-['Poppins'] font-normal hover:underline"
            >
              +{salon.whatsapp}
            </a>
          </div>

        </div>

        {/* 3. AREA MAPS & FOLLOW US (Diberi mb-16 untuk jarak ke footer) */}
        <div className="bg-[#FFB3C6] border-8 border-white rounded-[24px] overflow-hidden shadow-md flex flex-col mb-36">
          
          {/* Google Maps */}
          <iframe
            title="Lokasi Erna Esa Studio"
            src={salon.mapsEmbedSrc}
            className="w-full h-80 md:h-[450px] border-0"
            loading="lazy"
          />

          {/* Banner Social Media */}
          <div className="p-6 text-center text-gray-950 flex flex-col items-center justify-center">
            <p className="font-['Poppins'] font-bold tracking-widest uppercase text-sm mb-3">
              Follow Us :
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 font-['Poppins'] text-sm">
              
              {/* Instagram */}
              <a
                href={`https://instagram.com/${salon.instagram}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <img src="/assets/icon-instagram.png" alt="Instagram" className="w-5 h-5 object-contain" onError={(e) => e.target.style.display = 'none'} />
                <span>@{salon.instagram}</span>
              </a>

              {/* TikTok */}
              <a
                href={`https://tiktok.com/@${salon.tiktok}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <img src="/assets/icon-tiktok.png" alt="TikTok" className="w-5 h-5 object-contain" onError={(e) => e.target.style.display = 'none'} />
                <span>@{salon.tiktok}</span>
              </a>

            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#FF8FAB] text-gray-950 py-10 border-t border-pink-300/40">
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
                <p className="font-['Poppins'] text-[11px] text-gray-950 leading-relaxed font-light max-w-xs">
                  {salon.address}
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
                  +{salon.whatsapp}
                </p>
              </div>
            </div>
            
            {/* Sosmed */}
            <div className="pt-2">
              <p className="font-['Poppins'] font-bold text-[13px] tracking-wider uppercase mb-2">FOLLOW US :</p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href={`https://instagram.com/${salon.instagram}`} target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
                  <img src="/assets/icon-instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </a>
                <a href={`https://tiktok.com/@${salon.tiktok}`} target="_blank" rel="noreferrer" className="w-8 h-8 hover:scale-110 transition-transform">
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
              <p className="font-bold text-[18px] tracking-wider uppercase mb-1">OPENING HOURS :</p>
              <p className="text-[15px] font-normal text-gray-950">Senin - Minggu</p>
              <p className="text-[15px] text-gray-950 font-light mt-0.5">09.00 AM - 20.00 PM</p>
            </div>

            <div className="md:text-left font-['Poppins']">
              <p className="font-bold text-[13px] tracking-wider uppercase mb-2">OFFICIAL MARKETPLACE :</p>
              <div className="flex gap-3.5 justify-center md:justify-start">
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
        <div className="border-t border-pink-950/10 mt-8 pt-6 text-center">
          <p className="font-['Poppins'] text-[11px] text-gray-900 font-light tracking-wide">
            © 2026 Erna Esa Studio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}