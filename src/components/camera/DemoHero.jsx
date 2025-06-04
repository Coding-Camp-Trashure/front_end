import React from "react";
import Button from "../Button";

const DemoHero = ({ isCameraActive, onCameraToggle }) => {
  return (
    <section>
      <div className="container mx-auto px-4 sm:px-8 md:px-14">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Deteksi & Klasifikasi Sampah Otomatis dalam Sekali Arahkan Kamera
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl">
            Cukup arahkan kamera ke sampah yang ingin Anda kenali, sistem kami akan langsung mendeteksi jenisnya dan memberikan rekomendasi penanganan terbaik.
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="w-full sm:w-auto"
            onClick={onCameraToggle}
          >
            {isCameraActive ? 'Stop Camera' : 'Uji Sekarang'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;