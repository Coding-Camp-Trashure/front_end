import React from "react";

const DemoCamera = ({ videoRef, canvasRef, cameraSelectRef, isCameraActive }) => {
  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-14">
      <div className="relative w-full aspect-video max-w-5xl mx-auto bg-gray-200 rounded-xl overflow-hidden">
        <select 
          ref={cameraSelectRef}
          className="absolute top-4 right-4 z-10 bg-white rounded-lg px-4 py-2 text-sm"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
        >
          Your browser does not support the video element.
        </video>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: 'none' }}
        />
        {!isCameraActive && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
            <div className="text-white text-base sm:text-md">
              Click 'Uji Sekarang' untuk memulai kamera
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoCamera;