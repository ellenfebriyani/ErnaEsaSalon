import PageBanner from '../components/PageBanner.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import { serviceCategories, promos, formatRupiah } from '../data/siteData.js'

export default function Price() {
  return (
    <div>
      <PageBanner title="Our Price" img="https://picsum.photos/seed/price-banner/1200/500" />

      <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {serviceCategories.map((cat) => (
          <div key={cat.id} className="bg-white border border-salon-soft rounded-xl p-5 shadow-sm">
            <h3 className="font-medium uppercase text-sm tracking-wide mb-3 text-salon-btn">
              Pricelist for {cat.label}
            </h3>
            <ul className="divide-y divide-salon-bg">
              {cat.items.map((item) => (
                <li key={item.name} className="flex justify-between py-2 text-sm">
                  <span>{item.name}</span>
                  <span className="font-medium">{formatRupiah(item.price)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section className="bg-salon-bg">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle eyebrow="Don't miss out" title="Promo" />
          <div className="grid md:grid-cols-2 gap-6">
            {promos.map((promo) => (
              <div key={promo.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-salon-soft">
                <img src={promo.img} alt={promo.title} className="w-full h-44 object-cover" />
                <div className="p-4">
                  <p className="font-medium mb-1">{promo.title}</p>
                  <p className="text-sm text-gray-600">{promo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
