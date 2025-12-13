"use client";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState, memo } from "react";
import { MAP, CLINIC, CONTACT } from "@/data/constants";

declare global {
  interface Window {
    google: typeof google;
  }
}

// Style mapy wyekstrahowane do stałej (nie tworzone przy każdym renderze)
const MAP_STYLES: google.maps.MapTypeStyle[] = [
  { featureType: "all", elementType: "geometry.fill", stylers: [{ weight: "2.00" }] },
  { featureType: "all", elementType: "geometry.stroke", stylers: [{ color: "#9c9c9c" }] },
  { featureType: "all", elementType: "labels.text", stylers: [{ visibility: "on" }] },
  { featureType: "landscape", elementType: "all", stylers: [{ color: "#f2f2f2" }] },
  { featureType: "landscape", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
  { featureType: "landscape.man_made", elementType: "geometry.fill", stylers: [{ color: "#ffffff" }] },
  { featureType: "poi", elementType: "all", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "all", stylers: [{ saturation: -100 }, { lightness: 45 }] },
  { featureType: "road", elementType: "geometry.fill", stylers: [{ color: "#eeeeee" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#7b7b7b" }] },
  { featureType: "road", elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { featureType: "road.highway", elementType: "all", stylers: [{ visibility: "simplified" }] },
  { featureType: "road.arterial", elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  { featureType: "transit", elementType: "all", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "all", stylers: [{ color: "#46bcec" }, { visibility: "on" }] },
  { featureType: "water", elementType: "geometry.fill", stylers: [{ color: "#c8d7d4" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#070707" }] },
  { featureType: "water", elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
];

const MapComponent = memo(function MapComponent() {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: MAP.coordinates,
        zoom: MAP.zoom,
        styles: MAP_STYLES,
        mapTypeControl: true,
        mapTypeControlOptions: {
          mapTypeIds: [
            window.google.maps.MapTypeId.ROADMAP,
            window.google.maps.MapTypeId.SATELLITE,
          ],
        },
      });

      const marker = new window.google.maps.Marker({
        position: MAP.coordinates,
        map: newMap,
        title: CLINIC.name,
        animation: window.google.maps.Animation.DROP,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #2E2E2E; font-size: 16px;">
              ${CLINIC.name}
            </h3>
            <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
              ${CONTACT.address.street}<br>
              ${CONTACT.address.city}
            </p>
            <a
              href="${MAP.googleMapsUrl}"
              target="_blank"
              rel="noopener noreferrer"
              style="
                display: inline-block;
                background: #007bff;
                color: white;
                padding: 8px 16px;
                text-decoration: none;
                border-radius: 4px;
                font-size: 14px;
                font-weight: bold;
              "
            >
              Otwórz w Google Maps
            </a>
          </div>
        `,
      });

      marker.addListener("click", () => {
        infoWindow.open(newMap, marker);
      });

      infoWindow.open(newMap, marker);
      setMap(newMap);
    }
  }, [map]);

  return <div ref={ref} className="w-full h-full rounded-lg" />;
});

const render = (status: Status) => {
  if (status === Status.LOADING) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-gray-600">Ładowanie mapy...</div>
      </div>
    );
  }
  if (status === Status.FAILURE) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-red-600">Błąd ładowania mapy</div>
      </div>
    );
  }
  return <MapComponent />;
};

const MapPlaceholder = () => (
  <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
    <div className="text-gray-500">Mapa załaduje się po przewinięciu...</div>
  </div>
);

export const LocationMap = memo(function LocationMap() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="text-red-600">Brak klucza API Google Maps</div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="w-full h-full">
      {isVisible ? (
        <Wrapper
          apiKey={apiKey}
          render={render}
          libraries={["places"]}
          version="weekly"
          language="pl"
          region="PL"
        />
      ) : (
        <MapPlaceholder />
      )}
    </div>
  );
});
