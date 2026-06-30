import { salon, waLink } from '../data/siteData.js'

export default function WhatsAppFloatButton() {
  return (
    <a
      href={waLink(`Halo ${salon.name}, saya ingin bertanya tentang layanan salon.`)}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-2xl"
      aria-label="Chat WhatsApp"
      title="Chat via WhatsApp"
    >
      💬
    </a>
  )
}
