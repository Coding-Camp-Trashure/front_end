export const DATA_NAVBARS = [
  { 
    id: 1, 
    title: "Home", 
    link: "#home", 
    active: location?.pathname === "/" 
  },
  { 
    id: 2, 
    title: "Fitur", 
    link: "#features",
    active: false
  },
  { 
    id: 3, 
    title: "Map", 
    link: "#map",
    active: false
  },
  { 
    id: 4, 
    title: "Cara Kerja", 
    link: "/howitworks",
    active: location?.pathname === "/howitworks"
  },
  { 
    id: 5, 
    title: "Camera", 
    link: "/demo",
    active: location?.pathname === "/demo"
  },
];

export const AUTH_ROUTES = {
  login: { path: "/login", title: "Login" },
  register: { path: "/register", title: "Register" },
};

export const MAIN_ROUTES = {
  home: { path: "/", title: "Home" },
  demo: { path: "/demo", title: "Demo" },
  caraKerja: { path: "/howitworks", title: "Cara Kerja" },
};

export const FOOTER_LINKS = {
  companies: [
    { id: 1, name: "Privacy Policy", href: "/privacy" },
    { id: 2, name: "Help Center", href: "/help" },
    { id: 3, name: "Terms Conditions", href: "/terms" },
    { id: 4, name: "About Us", href: "/about" },
  ],
  developers: [
    { id: 1, name: "API Documentations", href: "/docs" },
    { id: 2, name: "Product Knowledges", href: "/knowledge" },
    { id: 3, name: "Ticketing Support", href: "/support" },
    { id: 4, name: "Pricing", href: "/pricing" },
  ],
};

export const FEATURE_LIST = [
  "Pantau klasifikasi sampah secara langsung",
  "Hitung kontribusi lingkungan Anda",
  "Dapatkan reward secara real-time",
];

export const STEPS = [
  {
    title: "Deteksi Otomatis",
    desc: "Sistem akan secara otomatis mendeteksi keberadaan objek sampah menggunakan kamera perangkat Anda.",
    img: "",
    left: false,
  },
  {
    title: "Klasifikasi Sampah",
    desc: "Aplikasi akan mengidentifikasi dan mengklasifikasikan jenis sampah berdasarkan kategori seperti organik, anorganik, atau B3.",
    img: "",
    left: true,
  },
  {
    title: "Akurasi dan Informasi",
    desc: "Pengguna akan mendapatkan informasi tentang akurasi klasifikasi serta edukasi singkat terkait dampak dan cara penanganan jenis sampah tersebut.",
    img: "",
    left: false,
  },
  {
    title: "Rekomendasi Penanganan",
    desc: "Trashure memberikan saran penanganan yang tepat untuk setiap jenis sampah berdasarkan klasifikasi yang telah dilakukan.",
    img: "",
    left: true,
  },
];