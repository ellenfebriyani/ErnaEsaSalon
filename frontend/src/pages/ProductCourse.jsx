import PageBanner from '../components/PageBanner.jsx'
import { salon, productCategories, courseItems, formatRupiah, waLink } from '../data/siteData.js'

export default function ProductCourse() {
  const allCats = [{ id: 'course', label: 'Course' }, ...productCategories.map((c) => ({ id: c.id, label: c.label }))]

  return (
    <div className="bg-[#FFE9F0] min-h-screen flex flex-col">
       {/* 1. BANNER UTAMA: Dibuat melayang di dalam kotak pembungkus */}
          <div className="max-w-6xl mx-auto w-full px-4 pt-6">
            <div className="rounded-[24px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.25)]">
              <PageBanner title="Category" img="/assets/judul-about.png" />
            </div>
          </div>

      <div className="sticky top-[60px] z-30 bg-white border-b border-salon-soft overflow-x-auto no-scrollbar">
        <div className="max-w-6xl mx-auto px-4 flex gap-2 py-3">
          {allCats.map((cat) => (
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
        {/* Course */}
        <section id="course">
          <h2 className="text-2xl text-center mb-6 uppercase tracking-wide">Course</h2>
          {courseItems.map((course) => (
            <div
              key={course.name}
              className="grid md:grid-cols-2 gap-6 bg-salon-bg rounded-xl p-6 items-center"
            >
              <img src={course.img} alt={course.name} className="rounded-xl w-full h-56 object-cover" />
              <div>
                <h3 className="text-xl mb-2">{course.name}</h3>
                <ul className="text-sm text-gray-700 list-disc list-inside mb-3 space-y-1">
                  {course.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-salon-btn mb-3">{formatRupiah(course.price)}</p>
                <a
                  href={waLink(`Halo ${salon.name}, saya ingin tanya tentang "${course.name}".`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-salon-btn hover:bg-salon-btnHover text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  Tanya via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </section>

        {/* Product categories */}
        {productCategories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2 className="text-2xl text-center mb-6 uppercase tracking-wide">{cat.label}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <div key={item.name} className="bg-white border border-salon-soft rounded-xl overflow-hidden shadow-sm">
                  <img src={item.img} alt={item.name} className="w-full h-32 object-cover" />
                  <div className="p-3">
                    <p className="text-sm font-medium mb-1 line-clamp-2">{item.name}</p>
                    <p className="text-sm text-salon-btn font-semibold mb-2">{formatRupiah(item.price)}</p>
                    <a
                      href={salon.shopeeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-center bg-salon-soft hover:bg-salon-accent hover:text-white text-salon-btn text-xs font-medium py-1.5 rounded-full transition-colors"
                    >
                      Marketplace
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
