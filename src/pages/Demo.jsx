import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";
import DemoHero from "../components/camera/DemoHero";
import DemoCamera from "../components/camera/DemoCamera";
import DemoInfo from "../components/camera/DemoInfo";
import Camera from "../utils/camera";

const Demo = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const cameraSelectRef = useRef(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraInstance, setCameraInstance] = useState(null);

  const initializeCamera = async () => {
    if (!isCameraActive) {
      const camera = new Camera({
        video: videoRef.current,
        cameraSelect: cameraSelectRef.current,
        canvas: canvasRef.current,
      });

      await camera.launch();
      setCameraInstance(camera);
      setIsCameraActive(true);
    } else {
      cameraInstance?.stop();
      setIsCameraActive(false);
    }
  };

  useEffect(() => {
    return () => {
      cameraInstance?.stop();
      Camera.stopAllStreams();
    };
  }, []);

  return (
    <>
      <Navbar variant="white" />
      <DemoHero isCameraActive={isCameraActive} onCameraToggle={initializeCamera} />
      <DemoCamera 
        videoRef={videoRef}
        canvasRef={canvasRef}
        cameraSelectRef={cameraSelectRef}
        isCameraActive={isCameraActive}
      />
      <DemoInfo />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Demo;