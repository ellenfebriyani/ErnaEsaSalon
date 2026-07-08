import { Link } from 'react-router-dom'
import { salon } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="bg-salon-btn text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Kiri: Info Kontak */}
        <div className="text-sm space-y-1 text-center md:text-left">
          <p className="font-display text-lg">{salon.name}</p>
          <p>📍 {salon.address}</p>
          <p>
            💬{' '}
            <a
              href={`https://wa.me/${salon.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-salon-soft"
            >
              +{salon.whatsapp}
            </a>
          </p>
        </div>

        {/* Tengah: Logo / Nama Salon */}
        <div className="flex justify-center">
          <Link to="/" className="font-display text-2xl tracking-widest uppercase">
            {salon.name}
          </Link>
        </div>

        {/* Kanan: Jam Buka & Icon Social Media / Marketplace */}
        <div className="text-sm space-y-3 text-center md:text-right flex flex-col items-center md:items-end">
          <div>
            <p>
              <span className="font-medium">Opening Hours:</span>
              <br />
              {salon.hours}
            </p>
          </div>

          {/* Deretan Ikon Sosmed & Marketplace (Sudah Diperbarui dengan Link Terbaru) */}
          <div className="flex items-center gap-3 mt-1">
            
            {/* TOKPED (Menggunakan Link Tautan Terbaru Anda) */}
            <a 
              href="https://vt.tiktok.com/ZS9MBmoxk5eX4-yKZGw/" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Tokopedia Wangi Terus by Ernaesa"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#C84870] hover:bg-[#58001C] hover:text-white transition-all shadow-sm z-10"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.43 12.92a2.76 2.76 0 0 1-2.07-.88 2.8 2.8 0 0 1-.78-2c0-.4.07-.79.22-1.15l-3.32-2a2.82 2.82 0 0 1-2.96 0l-3.32 2c.15.36.22.75.22 1.15a2.8 2.8 0 0 1-.78 2 2.76 2.76 0 0 1-2.07.88A2.81 2.81 0 0 1 2 10.13V18a2.81 2.81 0 0 0 2.81 2.81h14.38A2.81 2.81 0 0 0 22 18v-7.87a2.81 2.81 0 0 1-2.57 2.79zM12 2a4.13 4.13 0 0 1 4.13 4.13c0 .87-.27 1.67-.73 2.34l-2.61-1.57a1.37 1.37 0 0 0-1.58 0L8.6 10.47a4.11 4.11 0 0 1-.73-2.34A4.13 4.13 0 0 1 12 2z"/>
              </svg>
            </a>

            {/* SHOPEE (Menggunakan Link dengan Share Channel Code Terbaru Anda) */}
            <a 
              href="https://s.shopee.co.id/20thiWAu7v?share_channel_code=1" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Shopee Wangi Terus by Ernaesa"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#C84870] hover:bg-[#58001C] hover:text-white transition-all shadow-sm z-10"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.1 8c-.3-.9-1.1-1.6-2.1-1.6h-1.3C15 4 13.7 2 12 2S9 4 8.3 6.4H7c-1 0-1.8.7-2.1 1.6L3.1 16.5c-.3 1.1.2 2.3 1.3 2.8.4.2.9.3 1.3.3h12.6c.4 0 .9-.1 1.3-.3 1.1-.5 1.6-1.7 1.3-2.8L19.1 8zM12 3.8c.9 0 1.7 1.4 2 2.6H10c.3-1.2 1.1-2.6 2-2.6zm-3.5 8c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm7 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a 
              href="https://www.instagram.com/byernaesa?igsh=eG1vbDBtZmF6cGVm" 
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram @byernaesa"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#C84870] hover:bg-[#58001C] hover:text-white transition-all shadow-sm z-10"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 pointer-events-none">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* TIKTOK */}
            <a 
              href="https://www.tiktok.com/@byernaesa?_r=1&_t=ZS-97rhlCmU3Tb" 
              target="_blank" 
              rel="noopener noreferrer"
              title="TikTok @byernaesa"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-[#C84870] hover:bg-[#58001C] hover:text-white transition-all shadow-sm z-10"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.525.02c1.31 0 2.58.31 3.71.87v4.16c-.74-.46-1.59-.72-2.51-.72-.41 0-.8.05-1.18.16v4.36c.38.1.77.16 1.18.16.92 0 1.77-.26 2.51-.72v4.29c-1.13.56-2.4 0-3.71 0-4.42 0-8-3.58-8-8s3.58-8 8-8zm5.72 5c-.75-.82-1.3-1.84-1.58-2.97h3.81c.01.33.05.65.13.97.26 1 .84 1.86 1.63 2.51v3.29c-1.46-.37-2.69-1.37-3.41-2.61l-.58-1.19z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="border-t border-white/20 text-center text-xs py-3">
        © {new Date().getFullYear()} {salon.name}. All rights reserved.
      </div>
    </footer>
  )
}