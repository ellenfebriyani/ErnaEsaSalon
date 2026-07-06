import { useState } from 'react'
import PageBanner from '../components/PageBanner.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { galleryCategories, galleryItems } from '../data/siteData.js'

export default function Gallery() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active)

  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
        {/* 1. BANNER UTAMA: Dibuat melayang di dalam kotak pembungkus */}
           <div className="max-w-6xl mx-auto w-full px-4 pt-6">
              <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
                <PageBanner title="Our Gallery" img="/assets/judul-about.png" />
              </div>
             </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle eyebrow="Our Gallery" title="Let's See Our Gallery" />

        <div className="flex gap-2 flex-wrap justify-center mb-8">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-salon-btn text-white'
                  : 'bg-salon-soft text-salon-btn hover:bg-salon-accent hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <figure key={idx} className="rounded-xl overflow-hidden shadow-sm border border-salon-soft">
              <img src={item.img} alt={item.caption} className="w-full h-40 md:h-48 object-cover" />
              <figcaption className="p-2 text-xs text-gray-500 text-center">{item.caption}</figcaption>
            </figure>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full text-center text-gray-500">Belum ada foto untuk kategori ini.</p>
          )}
        </div>
      </div>
    </div>
  )
}
