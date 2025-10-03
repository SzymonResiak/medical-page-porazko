"use client";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useRef, useEffect, useState } from "react";

declare global {
  interface Window {
    google: typeof google;
  }
}

const MapComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat: 50.6696645, lng: 17.9138753 },
        zoom: 16,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [{ color: "#eeeeee" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#7b7b7b" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "road.arterial",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "transit",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#46bcec" }, { visibility: "on" }]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [{ color: "#c8d7d4" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#070707" }]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          }
        ]
      });

      const marker = new window.google.maps.Marker({
        position: { lat: 50.6696645, lng: 17.9138753 },
        map: newMap,
        title: "Dom Medyczny \"Pro Corde\"",
        animation: window.google.maps.Animation.DROP,
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 10px; font-family: Arial, sans-serif;">
            <h3 style="margin: 0 0 10px 0; color: #2E2E2E; font-size: 16px;">
              Dom Medyczny "Pro Corde"
            </h3>
            <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">
              ul. Piłsudskiego 11A<br>
              45-706 Opole
            </p>
            <a 
              href="https://www.google.com/maps/search/OPOLE%20PL.%20J%C3%93ZEFA%20PI%C5%81SUDSKIEGO%2011A" 
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
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(newMap, marker);
      });

      infoWindow.open(newMap, marker);

      setMap(newMap);
    }
  }, [ref, map]);

  return <div ref={ref} className="w-full h-full rounded-lg" />;
};

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

export const Location = () => {
  return (
    <div>
      <p className="text-2xl desktop-2:text-7xl">
        Zlokalizuj gabinet{" "}
        <span className="font-bold">
          na <br /> mapie
        </span>
      </p>
      <div className="bg-[#2E2E2E] rounded-[20] p-[30px] mt-5 block desktop-2:hidden">
        <p className="text-[#FCFCFC] text-sm">
          <span className="font-bold">Dom Medyczny &quot;Pro Corde&quot;</span>,
          gabinet znajdue się na
          <br /> pierwszym piętrze
        </p>
      </div>
      <div className="mt-5 desktop-2:mt-12 w-full h-[500px] desktop-2:h-[800px] relative">
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          render={render}
          libraries={["places"]}
          version="weekly"
          language="pl"
          region="PL"
        />
      </div>
      <div className="mt-5">
        <p className="text-xl desktop-2:text-4xl text-right">
          ul. Piłsudskiego 11A,
          <br /> 45-706 Opole
        </p>
      </div>
    </div>
  );
};
