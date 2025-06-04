import bannerServicesFeatured from "../assets/illustration_data.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const ServiceFeatured = () => (
  <section className="bg-white-2">
    <div className="container mx-auto px-4 sm:px-8 md:px-14">
      <div className="flex flex-col lg:flex-row items-center justify-between lg:px-14 py-12 md:py-16 gap-8">
        <div className="flex flex-col gap-y-8 flex-1">
          <div className="flex flex-col gap-y-3">
            <h2 className="text-3xl font-bold leading-[2.75rem]">
              Buat Perubahan, Mulai dari Lingkungan Anda
            </h2>
            <p className="font-medium text-lg w-full md:w-4/5">
              Trashure memudahkan siapa saja untuk memilah sampah secara cerdas dan mendapatkan reward dari setiap aksi kecil Anda untuk lingkungan.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <Link to="/demo">
              <Button variant="primary" size="md">
                Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center flex-1">
          <img
            src={bannerServicesFeatured}
            alt="Data Illustration"
            draggable={false}
            className="w-full md:w-[28rem]"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceFeatured;