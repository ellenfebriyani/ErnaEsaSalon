import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
// Hapus atau komentari import footer lama ini jika sudah tidak digunakan lagi di halaman lain
// import Footer from './Footer.jsx' 
import WhatsAppFloatButton from './WhatsAppFloatButton.jsx'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      
      {/* 🛠️ BAGIAN YANG DIHAPUS: Komponen Footer global di bawah ini dihilangkan */}
      {/* <Footer /> */}
      
      <WhatsAppFloatButton />
    </div>
  )
}