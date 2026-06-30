import { Link } from 'react-router-dom'
import { salon } from '../data/siteData.js'

export default function Footer() {
  return (
    <footer className="bg-salon-btn text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        <div className="text-sm space-y-1">
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

        <div className="flex justify-center">
          <Link to="/" className="font-display text-2xl">
            {salon.name}
          </Link>
        </div>

        <div className="text-sm space-y-2 md:text-right">
          <p>
            <span className="font-medium">Opening Hours:</span>
            <br />
            {salon.hours}
          </p>
          <p className="space-x-3">
            <a
              href={`https://instagram.com/${salon.instagram}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-salon-soft"
            >
              Instagram
            </a>
            <a
              href={`https://tiktok.com/@${salon.tiktok}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-salon-soft"
            >
              TikTok
            </a>
          </p>
          <p className="space-x-3">
            <a href={salon.shopeeUrl} className="underline hover:text-salon-soft">
              Shopee
            </a>
            <a href={salon.tokopediaUrl} className="underline hover:text-salon-soft">
              Tokopedia
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-white/20 text-center text-xs py-3">
        © {new Date().getFullYear()} {salon.name}. All rights reserved.
      </div>
    </footer>
  )
}
