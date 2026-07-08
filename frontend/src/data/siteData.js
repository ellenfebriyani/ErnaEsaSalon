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
    'Jl. Manggarai Utara 2 No.11-12, RT.9/RW.1, Manggarai, Kec. Tebet, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12850.',
  hours: 'Senin – Minggu\n09.00 AM - 20.00 PM',
  whatsapp: import.meta.env.VITE_SALON_WHATSAPP || '6285770594912',
  instagram: 'byernaesa',
  tiktok: 'byernaesa',
  mapsEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.392231905636!2d106.85330687355413!3d-6.211888960842976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f2c703df27%3A0xdfff41cee60ec45b!2sErna%20Esa%20Studio!5e0!3m2!1sid!2sid!4v1783359572859!5m2!1sid!2sid',
  shopeeUrl: '#',
  tokopediaUrl: '#',
}

export function waLink(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${salon.whatsapp}?text=${text}`
}

export const team = [
  { name: 'Alica', role: 'terapis' },
  { name: 'Depi', role: 'terapis' },
  { name: 'Rosita', role: 'terapis' },
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

// =========================================================================
// 1. DATA UNTUK HALAMAN SERVICE (Ada durasi & deskripsi panjang)
// =========================================================================
export const serviceCategories = [
  {
    id: 'nail',
    label: 'Nail',
    items: [
      { 
        name: 'Nail Extention + Manicure Gel Art', 
        duration: '1,5 - 2 jam', 
        price: 175000,
        description: 'perawatan kuku yang menggabungkan pemasangan kuku tambahan (extension), dengan manicure gel art berupa pewarnaan dan desain kuku menggunakan gel polish yang dikeringkan menggunakan sinar UV/LED sehingga hasilnya lebih mengilap, tahan lama, dan elegan.' 
      },
      { 
        name: 'Manicure Gel Art', 
        duration: '1,5 - 2 jam', 
        price: 75000,
        description: 'Perawatan kuku dengan manicure dan desain gel art untuk tampilan kuku lebih rapi, cantik, dan tahan lama.' 
      },
      { 
        name: 'Spa Pedicure Gel Polish', 
        duration: '1,5 - 2 jam', 
        price: 150000,
        description: 'Perawatan kaki dengan spa pedicure dan gel polish untuk kuku kaki lebih bersih, rapi, mengilap, dan tahan lama.' 
      },
      { 
        name: 'SPA Menicure Pedicure + Callus', 
        duration: '1,5 - 2 jam', 
        price: 250000,
        description: 'Perawatan tangan dan kaki lengkap dengan pembersihan kapalan (callus) agar kulit terasa lebih halus, bersih, dan terawat.' 
      },
    ],
  },
  {
    id: 'eyelash',
    label: 'Eyelash',
    items: [
      { 
        name: 'Anime Lashes', 
        duration: '-+ 2 jam', 
        price: 175000,
        description: 'Pemasangan bulu mata dengan efek anime untuk tampilan mata lebih tegas, lentik, dan berdimensi.' 
      },
      { 
        name: 'Russian Volume Mink Lashes', 
        duration: '-+ 2 jam', 
        price: 300000,
        description: 'Extension bulu mata dengan teknik volume untuk hasil lebih penuh, lembut, dan elegan.' 
      },
      { 
        name: 'Keratin Lashlift + Tint', 
        duration: '1,5 - 2 jam', 
        price: 100000,
        description: 'Treatment untuk melentikkan, menutrisi, dan memberi warna pada bulu mata agar tampak lebih tegas dan natural.' 
      },
      { 
        name: 'Double Mink Lashes', 
        duration: '1,5 - 2 jam', 
        price: 200000,
        description: 'Pemasangan bulu mata dengan efek lebih tebal and bervolume untuk tampilan mata lebih dramatis dan elegan.' 
      },
    ],
  },
  {
    id: 'sulam',
    label: 'Sulam',
    items: [
      { 
        name: 'Sulam Bibir + Free Retouch', 
        duration: '2 jam', 
        price: 250000,
        description: 'Treatment pewarnaan bibir semi permanen untuk tampilan bibir lebih segar, merata, dan cerah.' 
      },
      { 
        name: 'Sulam Alis Microblading + Shading', 
        duration: '2 jam', 
        price: 500000,
        description: 'Treatment membentuk alis natural dengan kombinasi goresan rambut dan shading agar terlihat lebih rapi dan simetris.' 
      },
      { 
        name: 'Sulam eyeliner + free retouch', 
        duration: '2 jam', 
        price: 500000,
        description: 'Treatment eyeliner semi permanen untuk mempertegas garis mata, termasuk retouch gratis agar hasil lebih maksimal.' 
      },
      { 
        name: 'Retouch Sulam Alis', 
        duration: '2 jam', 
        price: 250000,
        description: 'Perawatan ulang sulam alis untuk memperbaiki warna dan bentuk agar tetap rapi dan natural.' 
      },
    ],
  },
  {
    id: 'waxing',
    label: 'Waxing',
    items: [
      { name: 'Waxing Full Leg', duration: '30 menit', price: 90000, description: 'Perawatan menghilangkan bulu pada seluruh area kaki agar kulit terasa lebih halus dan bersih.' },
      { name: 'Waxing Full Arm', duration: '30 menit', price: 70000, description: 'Perawatan menghilangkan bulu pada seluruh area lengan untuk hasil kulit lebih halus dan rapi.' },
      { name: 'Waxing Half Leg ', duration: '30 menit', price: 75000, description: 'Perawatan menghilangkan bulu pada sebagian area kaki agar kulit terasa lebih halus dan bersih.' },
      { name: 'Waxing Half Arm ', duration: '30 menit', price: 55000, description: 'Perawatan menghilangkan bulu pada sebagian area lengan untuk kulit lebih halus dan rapi.' },
    ],
  },
  {
    id: 'ipl',
    label: 'IPL',
    items: [
      { name: 'IPL Hair Removal Full Arm ', duration: '1 jam', price: 100000, description: 'Treatment pengurangan bulu pada seluruh lengan menggunakan teknologi cahaya IPL untuk hasil lebih halus dan tahan lama.' },
      { name: 'IPL Hair Removal Full Face', duration: '1 jam', price: 100000, description: 'Perawatan mengurangi bulu halus pada area wajah dengan teknologi IPL agar kulit tampak lebih bersih dan lembut.' },
      { name: 'IPL Hair Removal Full Leg', duration: '1 jam', price: 175000, description: 'Treatment pengurangan bulu pada seluruh kaki menggunakan teknologi IPL untuk hasil lebih halus dan tahan lama.' },
      { name: 'IPL Hair Removal Half Arm', duration: '1 jam', price: 75000, description: 'Treatment pengurangan bulu pada sebagian area lengan menggunakan teknologi IPL agar kulit terasa lebih bersih dan halus.' },
    ],
  },
  {
    id: 'hair',
    label: 'Hair',
    items: [
      { name: 'Hair Laser', duration: '1 jam', price: 100000, description: 'Treatment untuk membantu merangsang pertumbuhan rambut, memperkuat akar, dan menjaga kesehatan kulit kepala agar rambut tampak lebih sehat dan tebal.' },
      { name: 'Hair Creambath Catok/Blow', duration: '-+1 jam', price: 60000, description: 'Perawatan rambut untuk menutrisi dan melembutkan rambut melalui creambath, dilengkapi styling catok atau blow agar rambut tampak lebih rapi, halus, dan indah.' },
      { name: 'Hair Keratin Treatment', duration: '1 jam', price: 250000, description: 'Perawatan rambut dengan keratin untuk membantu menutrisi, mengurangi kusut, dan membuat rambut lebih halus serta berkilau.' },
      { name: 'Hair Smoothing ', duration: '1 jam', price: 200000, description: 'Treatment untuk membuat rambut tampak lebih lurus, lembut, rapi, dan mudah diatur.' },
    ],
  },
  {
    id: 'underarm',
    label: 'Underarm',
    items: [
      { name: 'Glow Armpit', duration: '1 - 1,5 jam', price: 150000, description: 'Treatment yang dilakukan dengan meamsukkan warna ke dalam kulit ketiak, sehingga ketiak cerah dan naik 1-2 tingkat dari tone awal dengan glowing armpit' },
      { name: 'Waxing Underarm', duration: '30 menit', price: 45000, description: 'Perawatan menghilangkan bulu area underarm agar kulit terasa lebih bersih, halus, dan rapi.' },
    ],
  },
  {
    id: 'face',
    label: 'Face Treatment',
    items: [
      { name: 'Facial Brightening/Acne', duration: '1 jam', price: 100000, description: 'Perawatan wajah untuk membantu mencerahkan kulit serta mengatasi masalah jerawat agar wajah tampak lebih sehat.' },
      { name: 'MTS Acne / Pori Besar', duration: '1 - 1,5 jam', price: 300000, description: 'Treatment untuk membantu mengurangi bekas jerawat, mengecilkan tampilan pori, dan memperbaiki tekstur kulit.' },
    ],
  },
  {
    id: 'tato',
    label: 'Tato & Tindidk',
    items: [
      { name: 'Small Tato Sulam', duration: '-+ 2 jam', price: 200000, description: 'Layanan pembuatan tato kecil berupa tulisan atau desain sederhana untuk tampilan lebih estetik dan personal. Tahan -+ 1 tahun' },
      { name: 'Tindik Telinga / Piercing', duration: '-+ 1 jam', price: 100000, description: 'Layanan pemasangan tindik pada telinga atau area tertentu dengan proses aman dan rapi.' },
    ],
  },
]

// =========================================================================
// ⭐️ NEW: 2. DATA KHUSUS UNTUK HALAMAN PRICE 
// =========================================================================
export const priceCategories = [
  {
    id: 'nail',
    label: 'Nail Treatment',
    splitAfter: 6, // Nail akan dipotong setelah baris ke-6
    items: [
      { name: 'Spa Manicure', price: 50000 },
      { name: 'Spa Pedicure', price: 125000 },
      { name: 'Spa Pedicure Callus', price: 150000 },
      { name: 'Spa Pedicure Gel Polish', price: 150000 },
      { name: 'Spa Menicure Pedicure', price: 150000 },
      { name: 'Spa Menicure Pedicure Callus', price: 200000 },
      { name: 'Spa Menicure + Gel Polish', price: 75000 },
      
      { name: 'Spa Menicure Pedicure + Gel Polish', price: 200000 }, 
      { name: 'Spa Menicure Pedicure + Gel Polish + Callus', price: 250000 }, 
      { name: 'Remove gel tangan/kaki', price: 30000 },
      { name: 'Remove nail extention', price: 50000 },
      { name: 'Add Art per jari', price: 5000 },
      { name: 'Nail Art per jari', price: 10000 },
      { name: 'Press On Nails', price: 45000 },
    ],
  },
  {
    id: 'eyelash',
    label: 'Eyelash',
    splitAfter: 4,
    items: [
      { name: 'Single mink lashes (Premium)', price: 150000 },
      { name: 'Double mink lashes (Premium)', price: 200000 },
      { name: 'Anime lashes (Premium)', price: 150000 },
      { name: 'Russian Volume Mink Lashes(Premium)', price: 300000 },
      { name: 'Single Silk Lashes', price: 100000 },
      { name: 'Double Silk Lashes', price: 150000 },
      { name: 'Keratin Lashlift + Tint', price: 100000 },
      { name: 'Browbomber', price: 100000 },
      { name: 'Threading', price: 30000 },
    ],
  },
  {
    id: 'sulam',
    label: 'Sulam',
    subLabel: 'Face Treatment',
    items: [
      { name: 'Sulam Alis Microblading', price: 500000 },
      { name: 'Sulam Alis Shading', price: 500000 },
      { name: 'Sulam Alis Misty Powder', price: 500000 },
      { name: 'Sulam Bibir + Free Retouch', price: 250000 },
      { name: 'Sulam Eyeliner = Free Retouch', price: 500000 },
      { name: 'Facial Acne', price: 100000 },
      { name: 'Facial Brightening', price: 100000 },
      { name: 'Facial Salmon DNA', price: 100000 },
      { name: 'MTS Acne / Pori Besar', price: 300000 },
      { name: 'MTS Brightening', price: 300000 },
      
      
    ],
  },
  {
    id: 'hair',
    label: 'Hair Treatment',
    subLabel: 'Tato & Tindik dll',
    items: [
      { name: 'Creambath + Catok/Blow', price: 60000 },
      { name: 'Hair Mask + Catok/Blow', price: 60000 },
      { name: 'Cuci Catok/Blow', price: 30000 },
      { name: 'Hair Laser + Cuci Catok/Blow', price: 100000 },
      { name: 'Hair Keratin Treatment', price: 250000 },
      { name: 'Hair Smoothing', price: 25000 },
      { name: 'Small Simple Tato (Tato Sulam)', price: 200000 },
      { name: 'Tindik Telinga/Piercing per titik', price: 100000 },
      { name: 'Make Up Free Hair do/Hijab', price: 200000 },
    ],
  },
  {
    id: 'waxing',
    label: 'Waxing',
    splitAfter: 7,
    subLabel: 'IPL',
    items: [
      { name: 'Waxing Underarm', price: 45000 },
      { name: 'Waxing Half Arm', price: 55000 },
      { name: 'Waxing Full Arm', price: 70000 },
      { name: 'Waxing Half Leg', price: 75000 },
      { name: 'Waxing Full Leg', price: 90000 },
      { name: 'Waxing Bikini Line', price: 70000 },
      { name: 'Waxing Brazilian', price: 100000 },
      
      { name: 'IPL Underarm', price: 50000 },
      { name: 'IPL Half Arm', price: 75000 },
      { name: 'IPL Full Arm', price: 100000 },
      { name: 'IPL Half Leg', price: 150000 },
      { name: 'IPL Full Leg', price: 175000 },
      { name: 'IPL Full Face', price: 100000 },
      { name: 'Glow Armpit (Mencerahkan Ketiak)', price: 150000 },
    ],
  },
]

export const promos = [
  {
    title: "Promo Diskon 10%",
    desc: "Maksimal discount 50rb...",
    img: "/assets/promo-utama.png"
  },
  {
    title: "Pricelist Promo Perawatan",
    desc: "Daftar harga promo khusus...",
    img: "/assets/promo-kedua.png"
  }
];

export const galleryCategories = ['All', 'Eyelash', 'Sulam', 'Nail', 'Tato', 'Face Treatment']

export const galleryItems = [
  { category: 'Nail', img: '/assets/gallery/Gallery1.png', caption: 'Nail art custom' },
  { category: 'Eyelash', img: '/assets/gallery/Gallery2.png', caption: 'Russian volume lashes' },
  { category: 'Nail', img: '/assets/gallery/Gallery3.png', caption: 'Press on nail' },
  { category: 'Face Treatment', img: '/assets/gallery/Face1.jpeg', caption: 'Facial brightening' },
  { category: 'Sulam', img: '/assets/gallery/Gallery5.jpeg', caption: 'Sulam alis microblading' },
  { category: 'Tato', img: '/assets/gallery/Gallery6.png', caption: 'Small tato sulam' },
  { category: 'Eyelash', img: '/assets/gallery/Eyelash1.png', caption: 'Russian volume lashes' },
  { category: 'Eyelash', img: '/assets/gallery/Eyelash2.png', caption: 'Russian volume lashes' },
  { category: 'Eyelash', img: '/assets/gallery/Eyelash3.png', caption: 'Russian volume lashes' },
  { category: 'Eyelash', img: '/assets/gallery/Eyelash5.png', caption: 'Russian volume lashes' },
  { category: 'Eyelash', img: '/assets/gallery/Eyelash6.png', caption: 'Russian volume lashes' },
  { category: 'Sulam', img: '/assets/gallery/Sulam1.png', caption: 'Sulam alis microblading' },
  { category: 'Sulam', img: '/assets/gallery/Sulam2.png', caption: 'Sulam alis microblading' },
  { category: 'Sulam', img: '/assets/gallery/Sulam3.png', caption: 'Sulam alis microblading' },
  { category: 'Sulam', img: '/assets/gallery/Sulam4.jpeg', caption: 'Sulam alis microblading' },
  { category: 'Sulam', img: '/assets/gallery/Sulam5.jpeg', caption: 'Sulam alis microblading' },
  { category: 'Nail', img: '/assets/gallery/Nail1.png', caption: 'Press on nail' },
  { category: 'Nail', img: '/assets/gallery/Nail2.jpeg', caption: 'Press on nail' },
  { category: 'Nail', img: '/assets/gallery/Nail3.jpeg', caption: 'Press on nail' },
  { category: 'Nail', img: '/assets/gallery/Nail4.png', caption: 'Press on nail' },
  { category: 'Tato', img: '/assets/gallery/Tato2.jpeg', caption: 'Small tato sulam' },
  { category: 'Tato', img: '/assets/gallery/Tato3.png', caption: 'Small tato sulam' },
  { category: 'Tato', img: '/assets/gallery/Tato4.jpeg', caption: 'Small tato sulam' },
  { category: 'Tato', img: '/assets/gallery/Tato5.jpeg', caption: 'Small tato sulam' },
  { category: 'Tato', img: '/assets/gallery/Tato6.jpeg', caption: 'Small tato sulam' },
  { category: 'Face Treatment', img: '/assets/gallery/Face2.png', caption: 'Facial brightening' },
  { category: 'Face Treatment', img: '/assets/gallery/Face3.png', caption: 'Facial brightening' },
  { category: 'Face Treatment', img: '/assets/gallery/Face4.png', caption: 'Facial brightening' },
  { category: 'Face Treatment', img: '/assets/gallery/Face5.jpeg', caption: 'Facial brightening' },
  { category: 'Face Treatment', img: '/assets/gallery/Face6.jpeg', caption: 'Facial brightening' },
]

export const courseItems = [
  {
    name: 'Eyelash Extension Private Course',
    price: 'IDR 1.500.000',
    features: [
      '2 hari private',
      'materinya lengkap',
      'free snack',
      'free model',
      'free konsultasi setelah proses private selesai',
      'free sertifikat',
    ],
    img: "/assets/course-eyelash.png",
  },
  {
    name: 'Korean Eyebrow Embroidery Course',
    price: 'IDR 5.000.000',
    features: [
      '2 hari private',
      'materinya lengkap',
      'free snack',
      'free model',
      'free konsultasi setelah proses private selesai',
      'free sertifikat',
    ],
    img: "/assets/course-eyebrow.png", 
  }
]

export const productCategories = [
  {
    id: 'deodorant',
    label: 'Deodorant',
    items: [
      { name: 'Wangi Teras Deodorant Spray (Kopi)', price: 'Rp. 15.000', img: "/assets/product/deodorant1-3.jpeg" },
      { name: 'Wangi Teras Deodorant Spray (Strawberry)', price: 'Rp. 15.000', img: "/assets/product/deodorant2.jpeg" },
      { name: 'Wangi Teras Deodorant Spray (Zwitsal)', price: 'Rp. 15.000', img: "/assets/product/deodorant1-3.jpeg" },
    ],
  },
  {
    id: 'pressnail',
    label: 'Press Nail',
    items: [
      { name: 'Custom All Press On Nails', price: 'Rp. 45.000', img: "/assets/product/pressnail1.png" },
      { name: 'Custom All Press On Nails', price: 'Rp. 45.000', img: "/assets/product/pressnail2.png" },
      { name: 'Custom All Press On Nails', price: 'Rp. 45.000', img: "/assets/product/pressnail3.png" },
    ],
  },
  {
    id: 'bodycare',
    label: 'Body Care',
    items: [
      { name: 'Wangi Teras Brightening Body Scrub', price: 'Rp. 20.000', img: "/assets/product/bodycare1.jpeg" },
      { name: 'Brightening Body Lotion with Triple Sunscreen', price: 'Rp. 26.380', img: "/assets/product/bodycare2.jpeg" },
      { name: 'Parfum Wangi Terus EDP Aroma Bunga dan Buah 10 ml', price: 'Rp. 15.000', img: "/assets/product/bodycare3.jpeg" },
    ],
  },
  {
    id: 'lainnya',
    label: 'Produk Lainnya',
    items: [
      { name: 'Wangi Terus Glow Facemist', price: 'Rp. 25.000', img: "/assets/product/lainnya1.jpeg" },
      { name: 'Wangi Terus Hair Serum', price: 'Rp. 17.500', img: "/assets/product/lainnya2.jpeg" },
      { name: 'Wangi Terus Hair Creambath', price: 'Rp. 15.000', img: "/assets/product/lainnya3.jpeg" },
    ],
  },
]

// GANTI FUNGSI formatRupiah LAMA DENGAN KODE INI:
export const formatRupiah = (number) => {
  if (number >= 1000) {
    // Membagi angka dengan 1000 (misal: 200000 menjadi 200) lalu ditambah teks "rb"
    return `${number / 1000}rb`; 
  }
  return number;
};

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}