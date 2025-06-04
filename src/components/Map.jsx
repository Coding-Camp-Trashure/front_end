import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Change this import
import "leaflet/dist/leaflet.css";
import iconCheck from "../assets/icon-check.svg";
import Button from "./Button";
import MapUtil from "../utils/map";
import { FEATURE_LIST } from "../utils/data";

export default function Map() {
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const [userLocation, setUserLocation] = useState(null);
  const [placeName, setPlaceName] = useState("");

  useEffect(() => {
    let isMounted = true;
    MapUtil.getCurrentPosition()
      .then((pos) => {
        const coords = [pos.coords.latitude, pos.coords.longitude];
        if (isMounted) setUserLocation(coords);
        return MapUtil.getPlaceNameByCoordinate(pos.coords.latitude, pos.coords.longitude);
      })
      .then((name) => isMounted && setPlaceName(name))
      .catch(() => {
        if (isMounted) {
          setUserLocation([-7.250445, 112.768845]);
          setPlaceName("Surabaya");
        }
      });
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !userLocation) return;

    // Clean up any previous map instance
    if (mapContainer.current._leaflet_id) {
      mapContainer.current._leaflet_id = null;
      mapContainer.current.innerHTML = "";
    }

    const mapInstance = new MapUtil(mapContainer.current, {
      center: userLocation,
      zoom: 12,
      scrollWheelZoom: true,
      dragging: true,
    });

    // Clean up on unmount
    return () => {
      if (typeof mapInstance.remove === "function") {
        mapInstance.remove();
      }
      if (mapContainer.current) {
        mapContainer.current._leaflet_id = null;
        mapContainer.current.innerHTML = "";
      }
    };
  }, [userLocation]);

  return (
    <section className="bg-white" id="map">
      <div className="container mx-auto pb-8 md:pb-14 pt-20">
        {/* Header Section - Centered */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:leading-[4rem]">
            Lokasi Trashure
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mt-4">
            Temukan bagaimana Trashure telah meningkatkan partisipasi warga dalam
            memilah sampah di berbagai lokasi.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between lg:px-24 py-12 md:py-16 gap-8">
          {/* Left Content */}
          <div className="flex flex-col items-start w-full lg:w-1/2 gap-10 md:gap-10">
            <div className="flex flex-col gap-y-3 text-left md:text-center lg:text-left w-full">
              <h2 className="font-semibold text-base sm:text-lg md:text-xl lg:text-2xl leading-snug md:leading-normal text-gray-800">
                “Trashure mulai kami gunakan di Birmingham, dan sejak itu,
                partisipasi warga dalam memilah sampah meningkat 70%. Lokasi ini
                menjadi bukti awal bahwa teknologi kami bisa diadopsi secara
                luas.”
              </h2>
            </div>
            <div className="flex flex-col gap-y-4 w-full mt-4">
              {FEATURE_LIST.map((feature, idx) => (
                <div className="flex gap-3 items-center" key={idx}>
                  <div className="p-1.5 bg-green-2 flex items-center justify-center rounded-full">
                    <img src={iconCheck} alt="Checkmark" />
                  </div>
                  <p className="font-bold text-base sm:text-lg">{feature}</p>
                </div>
              ))}
            </div>
            <Button 
              variant="secondary" 
              size="md" 
              className="w-full md:w-auto"
              onClick={() => navigate("/howitworks")}
            >
              Pelajari Cara Kerja
            </Button>
          </div>
          {/* Right Content - Map */}
          <div className="flex items-center justify-center w-full lg:w-1/2 mb-8 lg:mb-0">
            <div
              ref={mapContainer}
              className="w-[625px] h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] rounded-xl shadow-md bg-gray-200"
              style={{ minHeight: 250 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}