import { useState, useEffect } from 'react';
import MapUtil from "../utils/map";

export const useMap = (mapContainerRef) => {
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
    if (!mapContainerRef.current || !userLocation) return;

    // Clean up any previous map instance
    if (mapContainerRef.current._leaflet_id) {
      mapContainerRef.current._leaflet_id = null;
      mapContainerRef.current.innerHTML = "";
    }

    const mapInstance = new MapUtil(mapContainerRef.current, {
      center: userLocation,
      zoom: 12,
      scrollWheelZoom: true,
      dragging: true,
    });

    return () => {
      if (typeof mapInstance.remove === "function") {
        mapInstance.remove();
      }
      if (mapContainerRef.current) {
        mapContainerRef.current._leaflet_id = null;
        mapContainerRef.current.innerHTML = "";
      }
    };
  }, [userLocation, mapContainerRef]);

  return { userLocation, placeName };
};