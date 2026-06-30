// Central content for the Erna Esa Studio website.
// Images use picsum.photos placeholders — swap `img` fields for real photos
// (e.g. /images/nail-1.jpg placed in frontend/public/images/) whenever ready.
// Prices/items here are illustrative placeholders mirroring the Figma wireframes
// from the skripsi — replace with the salon's real price list before going live.

export const salon = {
  name: 'Erna Esa Studio',
  tagline: 'Enjoy The Best Beauty Care For You',
  owner: 'Erna Esayanti',
  address:
    'Jl. Manggarai Utara 2 No.11-12, RT.9/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, DKI Jakarta 12850',
  hours: 'Senin – Minggu, 09.00 – 20.00 WIB',
  whatsapp: import.meta.env.VITE_SALON_WHATSAPP || '6285770594912',
  instagram: 'byernaesa',
  tiktok: 'byernaesa',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!3m2!1sen!2sus!4v1782566966052!5m2!1sen!2sus!6m8!1m7!1sYQIOZuUSCGqrv0ZDwSZjKg!2m2!1d-6.212029097324126!2d106.8559424644274!3f34.120480311040566!4f10.604205794308356!5f0.7820865974627469' +
    encodeURIComponent('Jl. Manggarai Utara 2 No.11-12, Manggarai, Tebet, Jakarta Selatan') +
    '&output=embed',
  shopeeUrl: '#',
  tokopediaUrl: '#',
}

export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${salon.whatsapp}?text=${text}`
}

export const team = [
  { name: 'Alica', role: 'terapis', img: 'https://picsum.photos/seed/alica/300/300' },
  { name: 'Depi', role: 'terapis', img: 'https://picsum.photos/seed/depi/300/300' },
  { name: 'Rosita', role: 'terapis', img: 'https://picsum.photos/seed/rosita/300/300' },
]

export const testimonials = [
  {
    name: 'Nurul Anggraini',
    rating: 5,
    text: 'Selalu langganan eyelash disini, treat by owner kak erna nya langsung. Ruangannya nyaman, kecil tapi dingin. Harga bersahabat. Recomended banget yang mau coba disini gurls.',
  },
  {
    name: 'Lila',
    rating: 5,
    text: 'Udah sering eyelash disni & treatment muka, murah bangettt g ngantre',
  },
  {
    name: 'Dian Septyani',
    rating: 5,
    text: 'Baru pertama kali ketiduran dari awal ampe kelar, nyaman sekaleeee',
  },
  {
    name: 'Dhini Purwanti',
    rating: 5,
    text: 'Eyelashes nya tahan lama,,murah lagii, suka bangettt',
  },
  {
    name: 'Vina Apriliana',
    rating: 5,
    text: 'Recomended bangetttt, udah sering treatment disniii....',
  },
  {
    name: 'Cindy Nth',
    rating: 5,
    text: 'murah dan pelayanan ramah sekaliii',
  },
]

export const popularTreatments = [
  { name: 'Press on Nail', priceFrom: 45000, img: 'https://picsum.photos/seed/pressnail/400/400' },
  { name: 'Eyelash', priceFrom: 100000, img: 'https://picsum.photos/seed/eyelash/400/400' },
  { name: 'Sulam', priceFrom: 250000, img: 'https://picsum.photos/seed/sulam/400/400' },
  { name: 'Meni Pedi', priceFrom: 70000, img: 'https://picsum.photos/seed/menipedi/400/400' },
]

// Service categories shared by the Service page and Price page.
export const serviceCategories = [
  {
    id: 'nail',
    label: 'Nail',
    items: [
      { name: 'Nail Extension + Manicure Gel Art', duration: '90 - 120 menit', price: 175000 },
      { name: 'Manicure Gel Art', duration: '60 - 75 menit', price: 70000 },
      { name: 'Press On Nails (Custom)', duration: '30 menit', price: 45000 },
    ],
  },
  {
    id: 'eyelash',
    label: 'Eyelash',
    items: [
      { name: 'Anime Lashes', duration: '60 - 75 menit', price: 175000 },
      { name: 'Russian Volume Mink Lashes', duration: '90 - 120 menit', price: 200000 },
    ],
  },
  {
    id: 'sulam',
    label: 'Sulam',
    items: [
      { name: 'Sulam Bibir + Free Retouch', duration: '120 menit', price: 250000 },
      { name: 'Sulam Alis Microblading / Shading', duration: '90 menit', price: 350000 },
    ],
  },
  {
    id: 'waxing',
    label: 'Waxing',
    items: [
      { name: 'Waxing Full Leg', duration: '30 - 45 menit', price: 90000 },
      { name: 'Waxing Full Arm', duration: '30 menit', price: 70000 },
    ],
  },
  {
    id: 'ipl',
    label: 'IPL',
    items: [
      { name: 'IPL Hair Removal Full Arm', duration: '30 menit', price: 150000 },
      { name: 'Cuci Bath / Blow', duration: '30 menit', price: 65000 },
    ],
  },
  {
    id: 'hair',
    label: 'Hair',
    items: [
      { name: 'Hair Laser', duration: '60 menit', price: 150000 },
      { name: 'IPL Hair Removal Full Face', duration: '30 menit', price: 100000 },
    ],
  },
  {
    id: 'underarm',
    label: 'Underarm',
    items: [
      { name: 'Glow Armpit', duration: '45 menit', price: 150000 },
      { name: 'Waxing Underarm', duration: '15 menit', price: 45000 },
    ],
  },
  {
    id: 'face',
    label: 'Face Treatment',
    items: [
      { name: 'Facial Brightening / Acne', duration: '60 menit', price: 100000 },
      { name: 'MTS Acne / Pori Besar', duration: '60 menit', price: 100000 },
    ],
  },
  {
    id: 'tato',
    label: 'Tato & Tindik',
    items: [
      { name: 'Small Tato Sulam', duration: '60 menit', price: 200000 },
      { name: 'Tindik Telinga / Piercing', duration: '15 menit', price: 100000 },
    ],
  },
]

export const promos = [
  {
    title: 'Diskon 10% New Customer',
    desc: 'Khusus pelanggan baru, booking via website + tunjukkan bukti follow Instagram.',
    img: 'https://picsum.photos/seed/promo1/400/300',
  },
  {
    title: 'Paket Hemat Eyelash + Sulam Alis',
    desc: 'Bundling dua treatment favorit dengan harga lebih ringan, periode terbatas.',
    img: 'https://picsum.photos/seed/promo2/400/300',
  },
]

export const galleryCategories = ['All', 'Eyelash', 'Sulam', 'Nail', 'Tato', 'Face Treatment']

export const galleryItems = [
  { category: 'Nail', img: 'https://picsum.photos/seed/g-nail-1/500/500', caption: 'Nail art custom' },
  { category: 'Eyelash', img: 'https://picsum.photos/seed/g-lash-1/500/500', caption: 'Russian volume lashes' },
  { category: 'Nail', img: 'https://picsum.photos/seed/g-nail-2/500/500', caption: 'Press on nail' },
  { category: 'Face Treatment', img: 'https://picsum.photos/seed/g-face-1/500/500', caption: 'Facial brightening' },
  { category: 'Sulam', img: 'https://picsum.photos/seed/g-sulam-1/500/500', caption: 'Sulam alis microblading' },
  { category: 'Tato', img: 'https://picsum.photos/seed/g-tato-1/500/500', caption: 'Small tato sulam' },
  { category: 'Eyelash', img: 'https://picsum.photos/seed/g-lash-2/500/500', caption: 'Anime lashes' },
  { category: 'Sulam', img: 'https://picsum.photos/seed/g-sulam-2/500/500', caption: 'Sulam bibir' },
]

export const courseItems = [
  {
    name: 'Eyelash Extension Private Course',
    price: 1500000,
    features: [
      '1 set primer',
      'Eyelash trolley',
      'Free snack',
      'Free model',
      'Free handout modul eyelash private course',
      'Free sertifikat',
    ],
    img: 'https://picsum.photos/seed/course-1/400/300',
  },
]

export const productCategories = [
  {
    id: 'deodorant',
    label: 'Deodorant',
    items: [
      { name: 'Wangi Teras Deodorant Spray (Bopo)', price: 15000, img: 'https://picsum.photos/seed/deo1/300/300' },
      { name: 'Wangi Teras Deodorant Spray (Strawberry)', price: 15000, img: 'https://picsum.photos/seed/deo2/300/300' },
      { name: 'Wangi Teras Deodorant Spray (Original)', price: 15000, img: 'https://picsum.photos/seed/deo3/300/300' },
    ],
  },
  {
    id: 'pressnail',
    label: 'Press Nail',
    items: [
      { name: 'Custom All Press On Nails', price: 45000, img: 'https://picsum.photos/seed/pn1/300/300' },
      { name: 'Custom All Press On Nails (Set 2)', price: 45000, img: 'https://picsum.photos/seed/pn2/300/300' },
      { name: 'Custom All Press On Nails (Set 3)', price: 45000, img: 'https://picsum.photos/seed/pn3/300/300' },
    ],
  },
  {
    id: 'bodycare',
    label: 'Body Care',
    items: [
      { name: 'Wangi Teras Brightening Body Scrub', price: 20000, img: 'https://picsum.photos/seed/bc1/300/300' },
      { name: 'Brightening Body Lotion + Triple Sunscreen', price: 26380, img: 'https://picsum.photos/seed/bc2/300/300' },
      { name: 'Parfum Wangi Teras TDP Aroma Bunga Roll-On', price: 15000, img: 'https://picsum.photos/seed/bc3/300/300' },
    ],
  },
  {
    id: 'lainnya',
    label: 'Produk Lainnya',
    items: [
      { name: 'Wangi Teras Glow Facemist', price: 25000, img: 'https://picsum.photos/seed/lain1/300/300' },
      { name: 'Wangi Teras Hair Serum', price: 17500, img: 'https://picsum.photos/seed/lain2/300/300' },
      { name: 'Wangi Teras Hair Growthbath', price: 15000, img: 'https://picsum.photos/seed/lain3/300/300' },
    ],
  },
]

export function formatRupiah(value) {
  return 'Rp' + Number(value).toLocaleString('id-ID')
}

// Turns an arbitrary string (e.g. a treatment name with "/" or "+") into a
// URL-path-safe slug, for use as a picsum.photos seed.
export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
