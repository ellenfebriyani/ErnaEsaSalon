import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { salon } from '../data/siteData.js'

export default function Contact() {
  return (
    <div>
      <PageBanner title="Contact Us" img="https://picsum.photos/seed/contact-banner/1200/500" />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-salon-contact rounded-xl p-5">
            <p className="font-medium mb-1">📍 Address</p>
            <p className="text-sm text-gray-700">{salon.address}</p>
          </div>
          <div className="bg-salon-contact rounded-xl p-5">
            <p className="font-medium mb-1">🕒 Opening Hours</p>
            <p className="text-sm text-gray-700">{salon.hours}</p>
          </div>
          <div className="bg-salon-contact rounded-xl p-5">
            <p className="font-medium mb-1">💬 WhatsApp</p>
            <a
              href={`https://wa.me/${salon.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-salon-btn underline"
            >
              +{salon.whatsapp}
            </a>
          </div>
        </div>

        <iframe
          title="Lokasi Erna Esa Studio"
          src={salon.mapsEmbedSrc}
          className="w-full h-72 md:h-96 rounded-xl border-0 mb-6"
          loading="lazy"
        />

        <div className="text-center space-x-4 mb-8">
          <a
            href={`https://instagram.com/${salon.instagram}`}
            target="_blank"
            rel="noreferrer"
            className="text-salon-btn underline"
          >
            Instagram @{salon.instagram}
          </a>
          <a
            href={`https://tiktok.com/@${salon.tiktok}`}
            target="_blank"
            rel="noreferrer"
            className="text-salon-btn underline"
          >
            TikTok @{salon.tiktok}
          </a>
        </div>

        <div className="text-center">
          <Link
            to="/book-appointment"
            className="inline-block bg-salon-btn hover:bg-salon-btnHover text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
