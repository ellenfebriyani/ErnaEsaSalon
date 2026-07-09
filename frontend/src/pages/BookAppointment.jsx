import { useState } from 'react'
import { supabase } from '../lib/supabaseClient.js'
import { salon, serviceCategories, waLink } from '../data/siteData.js'

const today = new Date().toISOString().split('T')[0]
const initialForm = { name: '', phone: '', treatment: '', date: '', notes: '' }

export default function BookAppointment() {
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function validate() {
    if (!form.name.trim()) return 'Nama wajib diisi.'
    if (!form.phone.trim()) return 'Nomor telepon wajib diisi.'
    if (!form.treatment.trim()) return 'Pilih atau isi treatment yang diinginkan.'
    if (!form.date) return 'Pilih tanggal appointment.'
    if (form.date < today) return 'Tanggal tidak boleh sebelum hari ini.'
    return ''
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError('')
    setSubmitting(true)

    // 🚀 LANGSUNG MUNCULKAN POP-UP TANPA MENUNGGU RESPONS DATABASE
    setSuccess(true)

    // Proses pengiriman ke Supabase berjalan di latar belakang (Background Async)
    supabase.from('appointments').insert([
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        treatment: form.treatment.trim(),
        appointment_date: form.date,
        notes: form.notes.trim() || null,
      },
    ]).then(({ error: insertError }) => {
      setSubmitting(false)
      if (insertError) {
        // Log error di console saja agar tidak merusak tampilan pop-up user
        console.error('Supabase Error di latar belakang:', insertError)
      }
    })
  }

  function closeModalAndReset() {
    setSuccess(false)
    setForm(initialForm)
  }

  function triggerDatePicker() {
    const dateInput = document.getElementById('date')
    if (dateInput && typeof dateInput.showPicker === 'function') {
      dateInput.showPicker()
    }
  }

  const confirmationWaMessage = waLink(
    `Halo ${salon.name}, saya ${form.name} ingin konfirmasi appointment untuk treatment "${form.treatment}" pada tanggal ${form.date}. No HP: ${form.phone}.`,
  )

  return (
    <>
      {/* 📦 WRAPPER HALAMAN FORM ATAS (Memiliki padding px-4 dan py-12) */}
      <div className="bg-[#FFE9F0] min-h-screen py-12 px-4">
        {/* CSS internal khusus untuk menyembunyikan ikon kalender bawaan browser */}
        <style>{`
          input[type="date"]::-webkit-calendar-picker-indicator {
            background: transparent;
            bottom: 0;
            color: transparent;
            cursor: pointer;
            height: auto;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            width: auto;
          }
        `}</style>

        {/* 📦 KONTEN UTAMA: Kotak siku tajam (tanpa rounded) & Sejajar Header-Footer (max-w-6xl) */}
        <div className="max-w-6xl mx-auto w-full bg-[#FFA3BE] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.15)] grid md:grid-cols-12 gap-8 p-6 md:p-8 items-stretch">
          
          {/* KOLOM KIRI: FOTO (Bentuk Kotak Siku) */}
          <div className="md:col-span-5 w-full h-[300px] md:h-full overflow-hidden shadow-sm">
            <img 
              src="/assets/book.png" 
              alt="Erna Esa Studio Asset" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* KOLOM KANAN: FORM GET APPOINTMENT */}
          <div className="md:col-span-7 flex flex-col justify-center text-gray-950 font-['Poppins'] md:pr-4">
            <h2 className="font-['Cormorant_Garamond'] font-bold text-[32px] md:text-[38px] leading-tight text-gray-950 tracking-wide uppercase">
              Get Appointment
            </h2>
            <p className="text-[14px] md:text-[20px] font-['Cormorant_Garamond'] font-bold text-gray-900 mb-6">
              Please enter your information
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. INPUT: YOUR NAME */}
              <div className="relative bg-white overflow-hidden h-[54px] shadow-sm">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder=" " 
                  className="peer w-full h-full bg-transparent pt-5 pb-1 px-4 text-[14px] focus:outline-none placeholder-transparent"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-900
                             peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  your name*
                </label>
              </div>

              {/* 2. INPUT: PHONE NUMBER */}
              <div className="relative bg-white overflow-hidden h-[54px] shadow-sm">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full bg-transparent pt-5 pb-1 px-4 text-[14px] focus:outline-none placeholder-transparent"
                />
                <label 
                  htmlFor="phone" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-900
                             peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  phone number*
                </label>
              </div>

              {/* 3. INPUT: TREATMENT PLAN */}
              <div className="relative bg-white overflow-hidden h-[54px] shadow-sm">
                <input
                  id="treatment"
                  name="treatment"
                  type="text"
                  value={form.treatment}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full h-full bg-transparent pt-5 pb-1 px-4 text-[14px] focus:outline-none placeholder-transparent text-gray-950"
                />
                <label 
                  htmlFor="treatment" 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-[14px] transition-all duration-200 pointer-events-none
                             peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-900
                             peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-gray-400
                             peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                >
                  treatment plan*
                </label>
              </div>

              {/* 4. INPUT: CHOOSE DATE */}
              <div 
                onClick={triggerDatePicker}
                className="relative bg-white overflow-hidden h-[54px] shadow-sm flex items-center cursor-pointer"
              >
                <div className="relative flex-1 h-full">
                  <input
                    id="date"
                    name="date"
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full h-full bg-transparent pt-5 pb-1 px-4 text-[14px] focus:outline-none placeholder-transparent text-gray-950 cursor-pointer"
                  />
                  <label 
                    htmlFor="date" 
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 text-[14px] transition-all duration-200 pointer-events-none
                               peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:text-gray-400
                               peer-focus:top-3 peer-focus:text-[10px] peer-focus:text-gray-400
                               peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:text-[10px]"
                  >
                    choose date*
                  </label>
                </div>
                
                {/* Box Ikon Kalender Siku */}
                <div className="h-full w-14 border-l border-gray-900 flex items-center justify-center bg-white shrink-0">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Teks Pengingat Ringkas */}
              <p className="text-[12px] md:text-[13px] text-gray-950 font-['Cormorant_Garamond'] font-bold pt-1">
                We will send appointment reminders via WhatsApp
              </p>

              {/* ERROR MESSAGE (Hanya untuk validasi frontend kosong) */}
              {error && <p className="text-xs text-red-700 font-medium bg-red-50 p-2">{error}</p>}

              {/* BUTTON SUBMIT */}
              <button
                type="submit"
                className="w-full bg-[#C84870] hover:bg-[#58001C] text-white py-3.5 rounded-xl font-['Poppins'] text-[15px] font-medium tracking-wide shadow-sm transition-all uppercase mt-2"
              >
                request a appointment
              </button>
            </form>
          </div>

        </div>

        {/* ================= POP UP MODAL SUKSES ================= */}
        {success && (
          <div className="fixed inset-0 bg-[#FFE9F0]/85 backdrop-blur-[2px] flex items-center justify-center z-[60] px-4 animate-in fade-in duration-200">
            
            {/* Container Pop-up Utama */}
            <div className="bg-[#FFE9F0] rounded-[28px] p-8 max-w-[420px] w-full text-center shadow-[0_15px_40px_rgba(222,110,125,0.15),0_4px_20px_rgba(0,0,0,0.05)] font-['Poppins'] relative transition-all animate-in zoom-in-95 duration-200">
              
              {/* Tombol Silang (X) di Kanan Atas */}
              <button 
                onClick={closeModalAndReset}
                className="absolute top-5 right-6 text-[#DE6E7D] hover:text-[#C95C6B] text-xl font-light transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Ikon Centang Desain Lingkaran */}
             <div className="flex justify-center mt-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/assets/icon-ceklis-popup.png" 
                  alt="Success Icon" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

              {/* Teks Judul */}
              <h3 className="font-['Cormorant_Garamond'] text-[34px] font-bold text-gray-950 leading-tight mb-2">
                Thank you!
              </h3>
              
              {/* Deskripsi */}
              <p className="text-[14px] text-gray-900 font-light max-w-[280px] mx-auto mb-8 leading-relaxed">
                We will contact you shortly.
              </p>

              {/* Tombol Ok Aksen Merah Muda */}
              <button
                onClick={closeModalAndReset}
                className="w-full max-w-[200px] mx-auto bg-[#DE6E7D] hover:bg-[#C95C6B] text-white py-2.5 font-medium shadow-sm transition-colors block text-[15px] rounded-none"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div> {/* ← DI SINI KOTAK CONTAINER FORM DI-CLOSE AGAR FOOTER BEBAS KE KANAN-KIRI */}

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
    </>
  )
}