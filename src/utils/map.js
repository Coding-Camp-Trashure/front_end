import {
  map,
  tileLayer,
  Icon,
  icon,
  marker,
  popup,
  latLng,
  control,
  layerGroup,
} from "leaflet";
// import { MAP_SERVICE_API_KEY } from "../config/key";

export default class Map {
  #zoom = 5;
  #map = null;

  // --- Static Utility Methods ---

  static isGeolocationAvailable() {
    return "geolocation" in navigator;
  }

  static getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
      if (!Map.isGeolocationAvailable()) {
        reject("Geolocation API unsupported");
        return;
      }
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  static async getPlaceNameByCoordinate(latitude, longitude) {
    try {
      const url = new URL(
        `https://api.maptiler.com/geocoding/${longitude},${latitude}.json`
      );
      url.searchParams.set("key", import.meta.env.VITE_MAP_SERVICE_API_KEY);
      url.searchParams.set("language", "id");
      url.searchParams.set("limit", "1");
      const response = await fetch(url);
      const json = await response.json();
      const place = json.features[0].place_name.split(", ");
      return [place.at(-2), place.at(-1)].join(", ");
    } catch (error) {
      console.error("getPlaceNameByCoordinate: error:", error);
      return `${latitude}, ${longitude}`;
    }
  }

  static async build(selectorOrNode, options = {}) {
    const jakartaCoordinate = [-6.2, 106.816666];

    if ("center" in options && options.center) {
      return new Map(selectorOrNode, options);
    }

    if ("locate" in options && options.locate) {
      try {
        const position = await Map.getCurrentPosition();
        const coordinate = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        return new Map(selectorOrNode, { ...options, center: coordinate });
      } catch (error) {
        console.error("build: error:", error);
        return new Map(selectorOrNode, { ...options, center: jakartaCoordinate });
      }
    }

    return new Map(selectorOrNode, { ...options, center: jakartaCoordinate });
  }

  // --- Instance Methods ---

  constructor(selectorOrNode, options = {}) {
    this.#zoom = options.zoom ?? this.#zoom;

    const container =
      typeof selectorOrNode === "string"
        ? document.querySelector(selectorOrNode)
        : selectorOrNode;

    // Base layers
    const tileOsm = tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>',
    });

    const openTopoMap = tileLayer(
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      {
        attribution:
          'Map data: &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org/" target="_blank">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org/" target="_blank">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC-BY-SA</a>)',
      }
    );

    // Overlay: vm
    const vm = layerGroup([
      marker([-6.9008, 107.6155]).bindPopup("Taman Lansia"),
      marker([-6.9191, 107.6098]).bindPopup("Taman Vanda"),
      marker([-6.9119, 107.6246]).bindPopup("Taman Super Hero"),
    ]);

    // Layer control
    const layerControl = control.layers(
      { OpenStreetMap: tileOsm, OpenTopoMap: openTopoMap },
      { 'Vending Machine': vm }
    );

    // Initialize map
    this.#map = map(container, {
      zoom: this.#zoom,
      scrollWheelZoom: options.scrollWheelZoom ?? false,
      dragging: options.dragging ?? true,
      layers: [tileOsm],
      ...options,
    });

    layerControl.addTo(this.#map);
    vm.addTo(this.#map);
  }

  changeCamera(coordinate, zoomLevel = null) {
    if (!zoomLevel) {
      this.#map.setView(latLng(coordinate), this.#zoom);
    } else {
      this.#map.setView(latLng(coordinate), zoomLevel);
    }
  }

  getCenter() {
    const { lat, lng } = this.#map.getCenter();
    return { latitude: lat, longitude: lng };
  }

  createIcon(options = {}) {
    return icon({
      ...Icon.Default.prototype.options,
      iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      ...options,
    });
  }

  addMarker(coordinates, markerOptions = {}, popupOptions = null) {
    if (typeof markerOptions !== "object") {
      throw new Error("markerOptions must be an object");
    }
    const newMarker = marker(coordinates, {
      icon: this.createIcon(),
      ...markerOptions,
    });
    if (popupOptions) {
      if (typeof popupOptions !== "object") {
        throw new Error("popupOptions must be an object");
      }
      if (!("content" in popupOptions)) {
        throw new Error("popupOptions must include `content` property.");
      }
      const newPopup = popup(coordinates, popupOptions);
      newMarker.bindPopup(newPopup);
    }
    newMarker.addTo(this.#map);
    return newMarker;
  }

  addMapEventListener(eventName, callback) {
    this.#map.addEventListener(eventName, callback);
  }

  remove() {
    if (this.#map) {
      this.#map.remove();
    }
  }
}