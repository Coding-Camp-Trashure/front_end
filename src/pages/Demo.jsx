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
  const [showNotification, setShowNotification] = useState(false);
  const { isCameraActive, initializeCamera } = useCamera(videoRef, canvasRef, cameraSelectRef);

  const handleDetection = (detectionResult) => {
    if (detectionResult.success) {
      setShowNotification(true);
      // Auto-hide notification after 5 seconds
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
        <DemoInfo />
        <ScrollToTopButton />
        <Toast 
          message="Garbage successfully detected!"
          isVisible={showNotification}
          onClose={() => setShowNotification(false)}
        />
      </main>
      <Footer />
    </>
  );
};

export default Demo;