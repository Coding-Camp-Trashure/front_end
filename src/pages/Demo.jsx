import React, { useRef, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DemoHero from "../components/camera/DemoHero";
import DemoCamera from "../components/camera/DemoCamera";
import DemoInfo from "../components/camera/DemoInfo";
import { useCamera } from "../hooks/useCamera";
import NavbarLogin from "../components/NavbarLogin";
import Toast from "../components/Toast";

const Demo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraSelectRef = useRef(null);
  const [toastMessage, setToastMessage] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { isCameraActive, initializeCamera } = useCamera(videoRef, canvasRef, cameraSelectRef);

  const handleDetection = (result) => {
    if (result.success) {
      if (result.jenis_sampah === "other") {
        setToastMessage("Bukan sampah yang dapat didaur ulang. Silakan coba dengan sampah yang sesuai.");
      } else {
        // Format the money amount for valid trash
        const moneyEarned = new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(result.uang_didapat || 0);

        setToastMessage(`${result.jenis_sampah} terdeteksi! Anda mendapatkan ${moneyEarned}`);
      }
      setShowNotification(true);
      console.log('Detection result:', result);
      
      setTimeout(() => setShowNotification(false), 5000);
    } else {
      console.error('Detection failed:', result.error);
      setToastMessage("Gagal mendeteksi sampah. Silakan coba lagi.");
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
    }
  };

  return (
    <>
      <Navbar variant="white" />
      <main>
        <DemoHero isCameraActive={isCameraActive} onCameraToggle={initializeCamera} />
        <DemoCamera 
          videoRef={videoRef}
          canvasRef={canvasRef}
          cameraSelectRef={cameraSelectRef}
          isCameraActive={isCameraActive}
          onDetection={handleDetection}
        />
        <ScrollToTopButton />
        <Toast 
          message={toastMessage}
          isVisible={showNotification}
          onClose={() => setShowNotification(false)}
        />
      </main>
      <Footer />
    </>
  );
};

export default Demo;