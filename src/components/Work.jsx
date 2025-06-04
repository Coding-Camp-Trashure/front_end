import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { STEPS } from "../utils/data";

const Work = () => {
  return (
    <section className="min-h-screen py-12 md:py-16 lg:py-18 px-4 sm:px-6 md:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
          Cara Kerja
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto">
          Pelajari bagaimana aplikasi Trashure bekerja dalam mengidentifikasi,
          mengklasifikasikan, dan memberikan informasi tentang jenis sampah secara
          otomatis dan akurat.
        </p>
        <Link to="/demo">
          <Button variant="secondary" size="lg" className="mx-auto">
            Mulai Sekarang
          </Button>
        </Link>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line - hidden on mobile */}
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-1 bg-green-1"></div>

        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32">
          {STEPS.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 bg-green-2 rounded-full border-4 border-white"></div>

              <div
                className={`flex flex-col ${
                  step.left ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-8 md:gap-12 lg:gap-16`}
              >
                {/* Content */}
                <div className="flex-1 text-center md:text-left px-4 sm:px-6 md:px-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    {step.desc}
                  </p>
                </div>

                {/* Image */}
                <div className="flex-1 w-full px-4 sm:px-6 md:px-8">
                  {step.img ? (
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-56 md:h-72 lg:h-80 object-contain rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-56 md:h-72 lg:h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-base md:text-lg">
                        Image
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;