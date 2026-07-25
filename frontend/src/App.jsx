import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Price from './pages/Price.jsx'
import Gallery from './pages/Gallery.jsx'
import ProductCourse from './pages/ProductCourse.jsx'
import Contact from './pages/Contact.jsx'
import BookAppointment from './pages/BookAppointment.jsx'

export default function App() {
  return (
    <>
      {/* Memasang komponen ScrollToTop di sini agar aktif di semua rute */}
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Price />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/product-course" element={<ProductCourse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}