import React from "react";

const InfoCard = ({ title, description }) => (
  <div className="flex flex-col items-start gap-4 flex-1">
    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-base text-gray-700 leading-relaxed">
      {description}
    </p>
  </div>
);

const DemoInfo = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
          Informasi Sampah
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <InfoCard 
            title="Klasifikasi Barang"
            description="Sistem kami menggunakan teknologi AI terkini untuk mengklasifikasikan berbagai jenis sampah dengan akurat, membantu Anda memilah sampah dengan tepat."
          />
          <InfoCard 
            title="Akurasi Ketepatan"
            description="Dengan tingkat akurasi yang tinggi, Anda dapat mengandalkan sistem kami untuk memberikan hasil deteksi yang tepat dan konsisten."
          />
          <InfoCard 
            title="Prediksi Barang"
            description="Selain klasifikasi, sistem kami juga dapat memprediksi potensi daur ulang dan nilai ekonomis dari sampah yang terdeteksi."
          />
          <InfoCard 
            title="Rekomendasi Penanganan"
            description="Dapatkan panduan lengkap tentang cara menangani setiap jenis sampah dengan benar, sesuai dengan standar pengelolaan sampah yang berlaku."
          />
        </div>
      </div>
    </section>
  );
};

export default DemoInfo;