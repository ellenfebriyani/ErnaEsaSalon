import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
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
    if (!form.treatment) return 'Pilih treatment yang diinginkan.'
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

    const { error: insertError } = await supabase.from('appointments').insert([
      {
        name: form.name.trim(),
        phone: form.phone.trim(),
        treatment: form.treatment,
        appointment_date: form.date,
        notes: form.notes.trim() || null,
      },
    ])

    setSubmitting(false)

    if (insertError) {
      console.error(insertError)
      setError(
        'Gagal mengirim pengajuan. Pastikan koneksi internet stabil dan coba lagi, atau hubungi kami via WhatsApp.',
      )
      return
    }

    setSuccess(true)
  }

  function closeModalAndReset() {
    setSuccess(false)
    setForm(initialForm)
  }

  const confirmationWaMessage = waLink(
    `Halo ${salon.name}, saya ${form.name} ingin konfirmasi appointment untuk treatment "${form.treatment}" pada tanggal ${form.date}. No HP: ${form.phone}.`,
  )

  return (
    <div>
      <PageBanner title="Get Appointment" img="https://picsum.photos/seed/appointment-banner/1200/500" />

      <div className="max-w-xl mx-auto px-4 py-12">
        <p className="text-center text-gray-600 mb-6">
          Please enter your information. We will send appointment reminders via WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="bg-salon-bg rounded-xl p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Your Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama lengkap"
              className="w-full rounded-lg border border-salon-soft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-salon-btn"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
              className="w-full rounded-lg border border-salon-soft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-salon-btn"
            />
          </div>

          <div>
            <label htmlFor="treatment" className="block text-sm font-medium mb-1">
              Treatment Plan *
            </label>
            <select
              id="treatment"
              name="treatment"
              value={form.treatment}
              onChange={handleChange}
              className="w-full rounded-lg border border-salon-soft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-salon-btn"
            >
              <option value="">-- Pilih treatment --</option>
              {serviceCategories.map((cat) => (
                <optgroup key={cat.id} label={cat.label}>
                  {cat.items.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium mb-1">
              Choose Date *
            </label>
            <input
              id="date"
              name="date"
              type="date"
              min={today}
              value={form.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-salon-soft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-salon-btn"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium mb-1">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              value={form.notes}
              onChange={handleChange}
              placeholder="Preferensi jam, request khusus, dll."
              className="w-full rounded-lg border border-salon-soft px-4 py-2 focus:outline-none focus:ring-2 focus:ring-salon-btn"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-salon-btn hover:bg-salon-btnHover disabled:opacity-60 text-white py-3 rounded-full font-medium transition-colors"
          >
            {submitting ? 'Mengirim...' : 'Request a Appointment'}
          </button>
        </form>
      </div>

      {success && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] px-4">
          <div className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-xl">
            <p className="text-4xl mb-2">✅</p>
            <h3 className="text-xl mb-1">Thank you!</h3>
            <p className="text-sm text-gray-600 mb-5">We will contact you shortly via WhatsApp.</p>
            <div className="space-y-2">
              <a
                href={confirmationWaMessage}
                target="_blank"
                rel="noreferrer"
                onClick={closeModalAndReset}
                className="block bg-green-500 hover:bg-green-600 text-white py-2 rounded-full text-sm font-medium"
              >
                Konfirmasi via WhatsApp
              </a>
              <button
                onClick={closeModalAndReset}
                className="block w-full bg-salon-ok hover:bg-salon-btnHover text-white py-2 rounded-full text-sm font-medium"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
