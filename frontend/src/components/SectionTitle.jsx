export default function SectionTitle({ eyebrow, title, light = false }) {
  return (
    <div className="text-center mb-8">
      {eyebrow && (
        <p
          className={`uppercase text-xs tracking-widest mb-1 ${
            light ? 'text-salon-soft' : 'text-salon-accent'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl ${light ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
    </div>
  )
}
