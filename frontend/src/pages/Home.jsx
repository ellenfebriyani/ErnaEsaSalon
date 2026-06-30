import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle.jsx'
import {
  salon,
  team,
  testimonials,
  popularTreatments,
  productCategories,
  courseItems,
  formatRupiah,
} from '../data/siteData.js'



export default function Home() {
  const testimonialRef = useRef(null);

  const scrollLeft = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  return (
    
    <div>
      {/* Hero */}
      <section className="bg-[#FFE9F0] py-8 md:py-12">
        {/* Kotak Berwarna #FFB3C6 yang membungkus tulisan dan gambar */}
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-[#FFB3C6] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-sm">
            
            {/* Sisi Kiri: Tulisan & Tombol */}
            <div className="text-left">
              <p className="font-['Cormorant_Garamond'] font-bold text-[30px] md:text-[25px] text-black mb-2 uppercase">
                WELCOME!
              </p>
              <h1 className="font-['Cormorant_Garamond'] font-bold text-[36px] md:text-[35px] leading-tight text-gray-900 mb-4 uppercase">
                {salon.tagline}
              </h1>
              <p className="font-['Poppins'] font-normal text-[15px] md:text-[15px] text-[#000000] mb-6 leading-relaxed opacity-90">
                Professional beauty treatments in one place.
              </p>
              <Link
                to="/book-appointment"
                className="inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-bold px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
              >
                BOOK APPOINTMENT
              </Link>
            </div>

            {/* Sisi Kanan: Gambar Salon */}
            <div className="flex justify-center md:justify-end h-full">
              {/* Perubahan: format gambar diubah menjadi .png */}
              <img
                src="/assets/hero-section.png"
                alt="Interior Erna Esa Studio"
                className="rounded-0 shadow-md w-full max-w-[450px] h-100 md:h-80 object-cover border-4 border-white"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Popular treatments */}
      <section className="bg-[#FFE9F0] py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Judul Section */}
          <div className="text-center mb-12 -mt-6 md:-mt-15">
            <p className="font-['Moon_Dance'] italic text-[20px] tracking-wider text-gray-800 mb-1">
              OUR SERVICE
            </p>
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[30px] md:text-[28px] tracking-wide text-gray-900 uppercase">
              POPULAR TREATMENT
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto justify-center items-start mt-8">
            {popularTreatments.map((t) => (
              <div
                key={t.name}
                className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105"
              >
                
                {/* Frame Gambar Gaya Polaroid Putih */}
                <div className="bg-white p-2.5 pb-7 shadow-md border border-gray-100 rounded-sm w-full max-w-[170px] md:max-w-[190px] mx-auto mb-4">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
                    <img 
                      src={`/assets/treatments/${t.name.toLowerCase().replace(/\s+/g, '-')}.png`} 
                      alt={t.name} 
                      className="w-full h-full object-cover scale-110" 
                    />
                  </div>
                </div>

                {/* Info Text */}
                <p className="font-['Cormorant_Garamond'] font-bold text-[20px] md:text-[24px] text-gray-900 leading-tight">
                  {t.name}
                </p>
                <p className="font-['Poppins'] font-normal text-[13px] md:text-[14px] text-gray-600 mt-0.5">
                  from {t.priceFrom >= 1000 ? `${t.priceFrom / 1000}rb` : t.priceFrom}
                </p>
              </div>
            ))}
          </div>

          {/* Tombol Service More */}
          <div className="text-center mt-12">
            <Link
              to="/service"
              className="inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-['Poppins'] font-bold text-[14px] px-7 py-2 rounded-full transition-colors shadow-sm uppercase tracking-wider"
            >
              SERVICE MORE
            </Link>
          </div>

        </div>
      </section>

      {/* About owner */}
      <section className="bg-[#FFB3C6] py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          
          {/* Sisi Kiri: Foto Owner & Ornamen Hati */}
          <div className="md:col-span-5 relative flex justify-center md:justify-start">
            {/* Bingkai Polaroid Putih Tebal */}
            <div className="bg-white p-1.5 pb-1.5 shadow-xl border border-pink-200 rounded-sm w-full max-w-[290px] relative z-10">
              <div className="w-full aspect-[3/4] overflow-hidden">
                {/* Perubahan: Menggunakan file lokal owner.png */}
                <img
                  src="/assets/owner.png"
                  alt="Erna Esayanti"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Ornamen Tali Hati di Pojok Kiri Bawah Foto */}
            <img 
              src="/assets/heart-line.png" 
              alt="ornamen" 
              className="absolute -left-20 -bottom-24 w-44 md:w-52 object-contain z-20 pointer-events-none select-none"
            />
          </div>

          {/* Sisi Kanan: Konten Teks & Fitur Berikon */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[32px] md:text-[30px] tracking-wide text-gray-900 uppercase mb-6 text-center md:text-left">
              ABOUT OWNER
            </h2>
            
            <p className="font-['Poppins'] text-[13px] md:text-[14px] leading-relaxed text-gray-900 text-justify mb-8">
              Erna Esayanti merupakan lulusan S1 Farmasi dan profesi Apoteker dari Universitas Pancasila. 
              Ketertarikannya pada dunia entrepreneurship dimulai sejak tahun 2016 dengan menjalankan 
              usaha di bidang fashion. Setelah menyelesaikan pendidikan, beliau sempat bekerja sebagai tim 
              marketing obat dan sales alat kesehatan. Namun, passion untuk membangun usaha sendiri 
              mendorong Erna Esayanti beralih ke industri kecantikan dengan mengikuti pelatihan eyelash 
              extension dan membuka layanan pemasangan eyelash di rumah. Seiring meningkatnya minat 
              pelangan, beliau terus mengembangkan keterampilan melalui berbagai pelatihan seperti 
              sulam, nail art, dan treatment kecantikan lainnya hingga akhirnya mendirikan Erna Esa Studio, 
              yang kini terus berkembang sebagai salon kecantikan profesional.
            </p>

            {/* Baris Fitur Menggunakan Gambar Ikon Kustom */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-2">
              {/* Fitur 1 */}
              <div className="flex items-center gap-2.5">
                <img src="/assets/icon-steril.png" alt="Steril" className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0" />
                <div className="font-['Poppins'] leading-tight">
                  <p className="font-semibold text-[13px] md:text-[14px] text-gray-950">Steril Tools</p>
                  <p className="text-[10px] md:text-[11px] text-gray-800 font-light mt-0.5">Clean and hygienic equipment</p>
                </div>
              </div>

              {/* Fitur 2 */}
              <div className="flex items-center gap-2.5">
                <img src="/assets/icon-expert.png" alt="Expert" className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0" />
                <div className="font-['Poppins'] leading-tight">
                  <p className="font-semibold text-[13px] md:text-[14px] text-gray-950">Expert Staff</p>
                  <p className="text-[10px] md:text-[11px] text-gray-800 font-light mt-0.5">Handled by professional staff</p>
                </div>
              </div>

              {/* Fitur 3 */}
              <div className="flex items-center gap-2.5">
                <img src="/assets/icon-place.png" alt="Place" className="w-10 h-10 md:w-12 md:h-12 object-contain flex-shrink-0" />
                <div className="font-['Poppins'] leading-tight">
                  <p className="font-semibold text-[13px] md:text-[14px] text-gray-950">Comfortable Place</p>
                  <p className="text-[10px] md:text-[11px] text-gray-800 font-light mt-0.5">Quality beauty care services</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-[#FFE9F0] py-12 md:py-16 border-t border-gray-350">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Judul Team */}
          <div className="text-center mb-12 -mt-6 md:-mt-10">
            <p className="font-['Moon_Dance'] italic text-[22px] tracking-wider text-gray-800 mb-1">
              TEAM
            </p>
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[30px] md:text-[28px] tracking-wide text-gray-900 uppercase">
              ERNA ESA STUDIO
            </h2>
            <hr className="border-gray-400 w-full absolute left-0 mt-[15px] mb-6" />
          </div>

          {/* Grid Foto Team */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto justify-center items-start">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                {/* Bingkai Putih Polaroid */}
                <div className="bg-white p-2 pb-2 shadow-md border border-gray-100 rounded-sm w-full max-w-[220px] mx-auto mb-4">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
                    {/* Perubahan: Mengarah ke file lokal team/[nama-member].png berformat PNG */}
                    <img
                      src={`/assets/team/${member.name.toLowerCase()}.png`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Info Text */}
                <p className="font-['Cormorant_Garamond'] font-bold text-[24px] md:text-[28px] text-gray-900 leading-tight">
                  {member.name}
                </p>
                <p className="font-['Poppins'] font-normal text-[13px] text-gray-900 mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#FFE9F0] pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          
          <div className="bg-[#FF758F] rounded-sm p-6 md:p-10 relative shadow-lg">
            
            {/* Judul Testimoni */}
            <div className="text-center mb-8 text-white">
              <p className="font-['Moon_Dance'] italic text-[25px] tracking-wider text-gray-900 mb-0.5">
                TESTIMONIAL
              </p>
              <h2 className="font-['Cormorant_Garamond'] font-bold text-[28px] md:text-[34px] tracking-wide uppercase mt-0.5 text-gray-900">
                WHAT OUR CLIENT SAY!
              </h2>
            </div>

            {/* Wrapper Slider Kartu */}
            <div 
              ref={testimonialRef}
              className="flex gap-6 overflow-x-auto no-scrollbar px-12 md:px-16 pb-4 scroll-smooth snap-x snap-mandatory"
            >
              {testimonials.map((tst, idx) => {
                // Mengambil huruf pertama untuk avatar inisial jika tidak ada gambar
                const initialLetter = tst.name ? tst.name.charAt(0).toUpperCase() : '?';
                
                return (
                  <div
                    key={idx}
                    className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[320px] flex-shrink-0 bg-white rounded-3xl p-5 shadow-md flex items-start gap-4 snap-start min-h-[190px]"
                  >
                    {/* Sisi Kiri: Profil & Nama */}
                    <div className="flex flex-col items-center text-center flex-shrink-0 w-20 md:w-24">
                      <div className="relative w-14 h-14 md:w-16 md:h-16">
                        {tst.img ? (
                          <img 
                            src={tst.img} 
                            alt={tst.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl font-['Poppins']">
                            {initialLetter}
                          </div>
                        )}
                      </div>
                      
                      <p className="font-['Poppins'] text-[12px] md:text-[13px] font-semibold text-gray-900 mt-2 leading-tight break-words w-full">
                        {tst.name}
                      </p>
                    </div>

                    {/* Sisi Kanan: Rating Bintang & Teks Ulasan */}
                    <div className="flex-1 pt-1">
                      <div className="flex text-yellow-400 text-sm md:text-base mb-1 gap-0.5 justify-start">
                        {'★'.repeat(tst.rating || 5)}
                      </div>
                      <p className="font-['Poppins'] text-[11px] md:text-[12px] text-gray-700 leading-relaxed text-left">
                        {tst.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tombol Panah Kiri */}
            <button 
              onClick={() => {
                if (testimonialRef.current) {
                  // Bergeser ke kiri sebesar lebar container utama agar berganti halaman/baris
                  testimonialRef.current.scrollLeft -= testimonialRef.current.clientWidth;
                }
              }}
              className="absolute left-2 md:left-4 top-[60%] -translate-y-1/2 text-white text-[36px] md:text-[50px] font-light hover:scale-110 transition-transform z-20 select-none cursor-pointer"
            >
              &#10094;
            </button>

            {/* Tombol Panah Kanan */}
            <button 
              onClick={() => {
                if (testimonialRef.current) {
                  // Bergeser ke kanan sebesar lebar container utama
                  testimonialRef.current.scrollLeft += testimonialRef.current.clientWidth;
                }
              }}
              className="absolute right-2 md:right-4 top-[60%] -translate-y-1/2 text-white text-[36px] md:text-[50px] font-light hover:scale-110 transition-transform z-20 select-none cursor-pointer"
            >
              &#10095;
            </button>

          </div>

        </div>
      </section>

      {/* ================= PRODUCT & COURSE SECTION ================= */}
      <section className="bg-[#FFF1F5] py-16 border-t border-gray-400">
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          <div className="mb-12">
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[30px] md:text-[28px] tracking-wide text-gray-900 uppercase">
              PRODUCT & COURSE
            </h2>
            <p className="font-['Poppins'] font-light text-[13px] md:text-[14px] text-gray-700 mt-1">
              Learn, glow, and grow with our beauty products and courses
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto justify-center">
            
            {/* Item 1: Course */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FBC5D2] rounded-full flex items-center justify-center p-5 shadow-sm">
                <img src="/assets/icon-course.png" alt="Course" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Cormorant_Garamond'] font-bold text-[18px] md:text-[20px] text-gray-900 uppercase mt-4 tracking-wider">
                COURSE
              </p>
              <Link to="/product-course" className="mt-2 inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-['Poppins'] font-bold text-[11px] px-5 py-1.5 rounded-full transition-colors uppercase tracking-wide shadow-sm">
                MORE EXPLORE
              </Link>
            </div>

            {/* Item 2: Deodorant */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FBC5D2] rounded-full flex items-center justify-center p-5 shadow-sm">
                <img src="/assets/icon-deodorant.png" alt="Deodorant" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Cormorant_Garamond'] font-bold text-[18px] md:text-[20px] text-gray-900 uppercase mt-4 tracking-wider">
                DEODORANT
              </p>
              <Link to="/product-course" className="mt-2 inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-['Poppins'] font-bold text-[11px] px-5 py-1.5 rounded-full transition-colors uppercase tracking-wide shadow-sm">
                MORE EXPLORE
              </Link>
            </div>

            {/* Item 3: Press On Nail */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FBC5D2] rounded-full flex items-center justify-center p-5 shadow-sm">
                <img src="/assets/icon-nail.png" alt="Press On Nail" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Cormorant_Garamond'] font-bold text-[18px] md:text-[20px] text-gray-900 uppercase mt-4 tracking-wider">
                PRESS ON NAIL
              </p>
              <Link to="/product-course" className="mt-2 inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-['Poppins'] font-bold text-[11px] px-5 py-1.5 rounded-full transition-colors uppercase tracking-wide shadow-sm">
                MORE EXPLORE
              </Link>
            </div>

            {/* Item 4: Body Care */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 md:w-28 md:h-28 bg-[#FBC5D2] rounded-full flex items-center justify-center p-5 shadow-sm">
                <img src="/assets/icon-bodycare.png" alt="Body Care" className="w-full h-full object-contain" />
              </div>
              <p className="font-['Cormorant_Garamond'] font-bold text-[18px] md:text-[20px] text-gray-900 uppercase mt-4 tracking-wider">
                BODY CARE
              </p>
              <Link to="/product-course" className="mt-2 inline-block bg-[#C84870] hover:bg-[#58001C] text-white font-['Poppins'] font-bold text-[11px] px-5 py-1.5 rounded-full transition-colors uppercase tracking-wide shadow-sm">
                MORE EXPLORE
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-[#FFF1F5] pb-16 pt-4 border-t border-gray-400">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          <div className="mb-6">
            <p className="font-['Moon_Dance'] italic text-[24px] tracking-wider text-gray-800 mb-0">
              CONTACT
            </p>
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[30px] md:text-[28px] tracking-wide text-gray-900 uppercase mt-0">
              CONTACT US NOW
            </h2>
            <p className="font-['Poppins'] font-normal text-[12px] md:text-[13px] text-gray-600 uppercase tracking-wide mt-1">
              DONT FORGET TO BOOK AN APPOINTMENT AND GET BEST SERVICE
            </p>
          </div>

          {/* Google Maps */}
          <div className="border-[3px] border-[#3FA9F5] p-1 rounded-sm shadow-md bg-white mb-8 max-w-4xl mx-auto">
            <iframe
              title="Lokasi Erna Esa Studio"
              src={salon.mapsEmbedSrc}
              className="w-full h-72 md:h-96 border-0"
              loading="lazy"
            />
          </div>

          {/* Kontak Detail (Address & WhatsApp dengan Icon Gambar) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left px-2 pt-2 items-start">
            
            {/* Alamat */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img 
                  src="/assets/icon-address.png" 
                  alt="Address Icon" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="font-['Poppins']">
                <p className="font-bold text-[13px] md:text-[14px] text-gray-950 uppercase tracking-wider mb-1">ADDRESS :</p>
                <p className="text-[12px] md:text-[13px] text-gray-800 leading-relaxed font-light">
                  Jl. Manggarai Utara 2 No.11 12, RT.9/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850.
                </p>
              </div>
            </div>

            {/* Whatsapp */}
            <div className="flex items-center gap-4 md:justify-end">
              <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                <img 
                  src="/assets/icon-whatsapp.png" 
                  alt="Whatsapp Icon" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="font-['Poppins']">
                <p className="font-bold text-[13px] md:text-[14px] text-gray-950 uppercase tracking-wider mb-0.5">WHATSAPP :</p>
                <a 
                  href="https://wa.me/6285770594912" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="block text-[14px] md:text-[16px] text-gray-900 font-normal tracking-wide hover:underline"
                >
                  +6285770594912
                </a>
              </div>
            </div>

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
              <img 
                src="/assets/logo-footer.png" 
                alt="Erna Esa Logo" 
                className="w-full h-full object-contain rounded-full" 
              />
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