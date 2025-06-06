import { useState, useEffect } from 'react';
import Camera from '../utils/camera';

export const useCamera = (videoRef, canvasRef, cameraSelectRef) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [cameraInstance, setCameraInstance] = useState(null);
  const [error, setError] = useState(null);

  const initializeCamera = async () => {
    try {
      if (!isCameraActive) {
        const camera = new Camera({
          video: videoRef.current,
          cameraSelect: cameraSelectRef.current,
          canvas: canvasRef.current,
        });

        await camera.launch();
        setCameraInstance(camera);
        setIsCameraActive(true);
        setError(null);
      } else {
        cameraInstance?.stop();
        setIsCameraActive(false);
      }
    } catch (err) {
      setError(err.message);
      setIsCameraActive(false);
    }
  };

  useEffect(() => {
    return () => {
      cameraInstance?.stop();
      Camera.stopAllStreams();
    };
  }, []);

  return {
    isCameraActive,
    initializeCamera,
    error
  };
};