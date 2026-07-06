export default function PageBanner({ title, img }) {
  return (
    <div
      className="relative h-80 md:h-72 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})` }}
    >
      {/* Perubahan: Menambahkan font-['Cormorant_Garamond'] dan font-bold */}
      <h1 className="text-white text-4xl md:text-5xl font-['Cormorant_Garamond'] font-bold tracking-wide drop-shadow-sm">
        {title}
      </h1>
    </div>
  )
}