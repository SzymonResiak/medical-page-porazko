"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

const CERTIFICATES = [
  "/images/certificate-stom-1.jpg",
  "/images/certificate-stom-2.jpg",
  "/images/certificate-stom-3.jpg",
  "/images/certificate-stom-4.jpg",
  "/images/certificate-stom-5.jpg",
  "/images/certificate-stom-6.jpg",
  "/images/certificate-stom-7.jpg",
] as const;

const ZoomIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#006AFF" />
    <circle cx="17" cy="17" r="7" stroke="white" strokeWidth="2" fill="none" />
    <line x1="22" y1="22" x2="28" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <line x1="14" y1="17" x2="20" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="17" y1="14" x2="17" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const closeLightbox = useCallback(() => setSelectedCert(null), []);

  return (
    <>
      <div className="w-full p-0 flex justify-center">
        <div
          className="grid w-full gap-[1.5625rem] place-content-center"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
          }}
        >
          {CERTIFICATES.map((certificate, index) => (
            <button
              key={certificate}
              onClick={() => setSelectedCert(certificate)}
              className="group/cert certificate-container w-full bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
            >
              <div className="relative w-full" style={{ aspectRatio: "1/1.4" }}>
                <Image
                  src={certificate}
                  alt={`Certyfikat ${index + 1}`}
                  fill
                  unoptimized
                  className="object-contain p-[0.5rem] transition-opacity duration-300 group-hover/cert:opacity-60"
                  sizes="(max-width: 320px) 140px, (max-width: 640px) 200px, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300">
                  <ZoomIcon />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd certyfikatu"
        >
          <div className="relative max-w-3xl max-h-[90vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedCert}
              alt="Certyfikat - powiększenie"
              fill
              unoptimized
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
};
