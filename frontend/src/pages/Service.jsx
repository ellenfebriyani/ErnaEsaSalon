import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import { serviceCategories, formatRupiah, slugify } from '../data/siteData.js'

export default function Service() {
  return (
    <div>
      <PageBanner title="Our Service" img="https://picsum.photos/seed/service-banner/1200/500" />

      {/* category quick-nav */}
      <div className="sticky top-[60px] z-30 bg-white border-b border-salon-soft overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4 flex gap-2 py-3">
          {serviceCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="flex-shrink-0 px-4 py-1.5 rounded-full bg-salon-soft text-salon-btn text-sm font-medium hover:bg-salon-accent hover:text-white transition-colors"
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
        {serviceCategories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="text-2xl text-center mb-6 uppercase tracking-wide">{cat.label}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="flex gap-4 bg-white border border-salon-soft rounded-xl p-4 shadow-sm"
                >
                  <img
                    src={`https://picsum.photos/seed/${slugify(`${cat.id}-${item.name}`)}/120/120`}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-gray-500 mb-1">⏱ {item.duration}</p>
                  </div>
                  <p className="font-semibold text-salon-btn whitespace-nowrap">
                    {formatRupiah(item.price)}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

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
