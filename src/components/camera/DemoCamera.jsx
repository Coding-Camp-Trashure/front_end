import React, { useCallback, useState } from "react";
import { scanService } from "../../services/scan.service";

const DemoCamera = ({ videoRef, canvasRef, cameraSelectRef, isCameraActive, onDetection }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const captureImage = useCallback(async () => {
    if (!canvasRef.current || !videoRef.current) return;
    setIsScanning(true);
    setScanComplete(false);

    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas.getContext('2d');

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Convert canvas to blob
    try {
      const blob = await new Promise(resolve => {
        canvas.toBlob(resolve, 'image/jpeg', 0.8);
      });

      // Save to temporary buffer if needed
      const tempUrl = URL.createObjectURL(blob);
      
      // Send to API
      const result = await scanService.scanImage(blob);
      
      // Cleanup temporary URL
      URL.revokeObjectURL(tempUrl);

      // Handle detection result
      onDetection(result);
      setScanComplete(true);
    } catch (error) {
      console.error('Error capturing/scanning image:', error);
      onDetection({ success: false, error: error.message });
    } finally {
      setIsScanning(false);
    }
  }, [canvasRef, videoRef, onDetection]);

  const handleReset = () => {
    setScanComplete(false);
    // Clear canvas
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 md:px-14 pb-12 md:pb-16">
      <div className="relative w-full aspect-video max-w-5xl mx-auto bg-gray-200 rounded-xl overflow-hidden">
        <select 
          ref={cameraSelectRef}
          className="absolute top-4 right-4 z-10 bg-white rounded-lg px-4 py-2 text-sm"
          disabled={!isCameraActive}
        />
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
        >
          Your browser does not support the video element.
        </video>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {isCameraActive && !scanComplete && (
          <button
            onClick={captureImage}
            disabled={isScanning}
            className={`absolute bottom-4 left-1/2 -translate-x-1/2 ${
              isScanning ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
            } text-white px-6 py-2 rounded-full transition-colors`}
          >
            {isScanning ? 'Scanning...' : 'Scan Image'}
          </button>
        )}
        {isCameraActive && scanComplete && (
          <button
            onClick={handleReset}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            Scan Again
          </button>
        )}
        {!isCameraActive && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
            <div className="text-white text-base sm:text-md">
              Click 'Uji Sekarang' untuk memulai kamera
            </div>
          </div>
        )}
        {isScanning && (
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-white text-lg">Processing...</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoCamera;