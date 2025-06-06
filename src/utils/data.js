import deteksiOtomatis from "../assets/deteksi_otomatis.jpg";
import deteksi from "../assets/deteksi.svg";
import klasifikasiSampah from "../assets/klasifikasi_sampah.png";
import klasifikasi from "../assets/klasifikasi.png";
import information from "../assets/information.svg";
import reward from "../assets/reward.png";
import recycle from "../assets/recycle.png";

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
    { id: 1, name: "Privacy Policy", href: "" },
    { id: 2, name: "Help Center", href: "" },
    { id: 3, name: "Terms Conditions", href: "" },
    { id: 4, name: "About Us", href: "" },
  ],
  developers: [
    { id: 1, name: "API Documentations", href: "" },
    { id: 2, name: "Product Knowledges", href: "" },
    { id: 3, name: "Ticketing Support", href: "" },
    { id: 4, name: "Pricing", href: "" },
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
    img: deteksi,
    left: false,
  },
  {
    title: "Klasifikasi Sampah",
    desc: "Aplikasi akan mengidentifikasi dan mengklasifikasikan jenis sampah berdasarkan kategori seperti organik, anorganik, atau B3.",
    img: klasifikasi,
    left: true,
  },
  {
    title: "Akurasi dan Informasi",
    desc: "Pengguna akan mendapatkan informasi tentang akurasi klasifikasi serta edukasi singkat terkait dampak dan cara penanganan jenis sampah tersebut.",
    img: information,
    left: false,
  },
  {
    title: "Rekomendasi Penanganan",
    desc: "Trashure memberikan saran penanganan yang tepat untuk setiap jenis sampah berdasarkan klasifikasi yang telah dilakukan.",
    img: recycle,
    left: true,
  },
  {
    title: "Dapatkan Poin Reward",
    desc: "Setelah menyelesaikan proses klasifikasi dan penanganan sampah, Anda akan mendapatkan poin reward yang dapat ditukarkan dengan berbagai hadiah menarik.",
    img: reward,
    left: false,
  }
];