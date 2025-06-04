import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import bannerHero from "../assets/banner_hero.png";
import { HashLink } from "react-router-hash-link";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-white-2">
      <div className="container mx-auto pb-8 md:pb-14">
        <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-8 md:py-16 gap-8">
          <div className="flex flex-col gap-y-8 flex-1 pl-0 md:pl-8 lg:pl-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight md:leading-[4.5rem]">
              Ubah{" "}
              <span className="bg-green-2 inline-block leading-10 px-2 rounded">
                Sampah
              </span>{" "}
              Jadi{" "}
              <span className="bg-green-2 inline-block leading-10 px-2 rounded">
                Harta
              </span>{" "}
              dengan
              Teknologi Cerdas
            </h1>
            <p className="font-medium text-lg md:text-xl md:w-5/6">
              Trashure membantu Anda memilah sampah secara otomatis
              dan mendapatkan reward untuk setiap aksi
              peduli lingkungan yang Anda lakukan.
            </p>
            <div className="flex flex-col md:flex-row w-full gap-4">
              <Button 
                variant="primary" 
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => navigate("/demo")}
              >
                Mulai Sekarang
              </Button>
              <HashLink 
                smooth 
                to="/#features" 
                className="w-full sm:w-auto"
              >
                <Button 
                  variant="secondary" 
                  size="md"
                  className="w-full"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </HashLink>
            </div>
          </div>
          <div className="flex items-center justify-center flex-1">
            <img
              src={bannerHero}
              alt="Hero Banner"
              draggable={false}
              className="md:w-[46rem] lg:w-[37rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}