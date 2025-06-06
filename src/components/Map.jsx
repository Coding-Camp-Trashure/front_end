import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";
import { FEATURE_LIST } from "../utils/data";
import { useMap } from "../hooks/useMap";

export default function Map() {
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const { userLocation, placeName } = useMap(mapContainer);

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20" id="map">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-extrabold text-4xl md:text-5xl lg:leading-[4rem] mb-4 md:mb-6">
            Lokasi Trashure
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Temukan bagaimana Trashure telah meningkatkan partisipasi warga dalam
            memilah sampah di berbagai lokasi.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            {/* Testimonial */}
            <div className="text-left">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 leading-relaxed">
                "Trashure mulai kami gunakan di Birmingham, dan sejak itu,
                partisipasi warga dalam memilah sampah meningkat 70%. Lokasi ini
                menjadi bukti awal bahwa teknologi kami bisa diadopsi secara
                luas."
              </h3>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {FEATURE_LIST.map((feature, idx) => (
                <div className="flex items-center gap-3" key={idx}>
                  <div className="p-1.5 bg-green-2 rounded-full flex-shrink-0">
                    <img src={iconCheck} alt="Checkmark" className="w-4 h-4" />
                  </div>
                  <p className="font-bold text-base md:text-lg">{feature}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex">
              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => navigate("/howitworks")}
              >
                Pelajari Cara Kerja
              </Button>
            </div>
          </div>

          {/* Right Content - Map */}
          <div className="w-full lg:w-1/2">
            <div
              ref={mapContainer}
              className="w-full aspect-[4/3] md:aspect-[16/12] lg:aspect-[4/3] rounded-xl shadow-md bg-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}