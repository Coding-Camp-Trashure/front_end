import sampah from "../assets/sampah.png";
import klasifikasi from "../assets/klasifikasi.png";
import information from "../assets/information.svg";
import reward from "../assets/reward.png";
import saldo from "../assets/saldo.png";

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
    title: "Masukkan Sampah ke Mesin",
    desc: "Sampah botol plastik, botol kaca, atau kaleng minuman dimasukkan ke dalam Reverse Vending Machine (RVM) yang tersedia di lokasi-lokasi mitra Trashure.",
    img: sampah,
    left: false,
  },
  {
    title: "Deteksi dan Klasifikasi Otomatis",
    desc: "Mesin akan otomatis mendeteksi jenis sampah menggunakan kamera dan sistem deteksi berbasis AI, lalu mengklasifikasikannya ke dalam kategori botol plastik, botol kaca, atau kaleng.",
    img: klasifikasi,
    left: true,
  },
  {
    title: "Pengolahan Data dan Sinkronisasi ",
    desc: "Setiap kali Anda memasukkan sampah, data transaksi akan dikirim dan dicatat pada akun Anda di website Trashure secara real-time.",
    img: information,
    left: false,
  },
  {
    title: "Dapatkan Uang Reward",
    desc: "Setelah terverifikasi, Anda akan langsung menerima reward berupa uang digital yang dapat dilihat di dashboard akun Trashure Anda.",
    img: reward,
    left: true,
  },
  {
    title: "Gunakan untuk Transaksi Digital",
    desc: "Reward yang Anda peroleh dapat digunakan untuk beragam transaksi digital, seperti pembelian pulsa, voucher, atau ditransfer ke dompet digital.",
    img: saldo,
    left: false,
  }
];