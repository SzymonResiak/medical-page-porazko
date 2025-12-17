"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const CERTIFICATES = [
  "/images/certificate-stom-1.jpg",
  "/images/certificate-stom-2.jpg",
  "/images/certificate-stom-3.jpg",
  "/images/certificate-stom-4.jpg",
  "/images/certificate-stom-5.jpg",
  "/images/certificate-stom-6.jpg",
  "/images/certificate-stom-7.jpg",
] as const;

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const scrollPositionRef = useRef<number>(0);
  const originalOverflowRef = useRef<string>("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCertificate) {
        setSelectedCertificate(null);
      }
    };

    if (selectedCertificate) {
      scrollPositionRef.current = window.scrollY;
      originalOverflowRef.current = document.body.style.overflow || "";

      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = originalOverflowRef.current;

      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    };
  }, [selectedCertificate]);

  const handleCertificateClick = (certificate: string) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

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
            <div
              key={certificate}
              className="certificate-container w-full bg-white shadow-sm rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => handleCertificateClick(certificate)}
            >
              <div className="relative w-full" style={{ aspectRatio: "1/1.4" }}>
                <Image
                  src={certificate}
                  alt={`Certyfikat ${index + 1}`}
                  fill
                  unoptimized
                  className="object-contain p-[0.5rem]"
                  sizes="(max-width: 320px) 140px, (max-width: 640px) 200px, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={handleOverlayClick}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              aria-label="Zamknij"
            >
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
              <Image
                src={selectedCertificate}
                alt="Certyfikat - powiększony widok"
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
