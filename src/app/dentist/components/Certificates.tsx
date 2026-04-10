"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { InfoLabel } from "@/components/InfoLabel";
import { TranslateIcon } from "@/components/icons/TranslateIcon";
import { TransferIcon } from "@/components/icons/TransferIcon";
import { createPortal } from "react-dom";

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

const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => {
  useEffect(() => {
    const scrollY = document.body.scrollTop;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.body.scrollTop = scrollY;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-6 cursor-pointer"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:bg-white/20 transition-all cursor-pointer z-10"
        aria-label="Zamknij"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="4" y1="4" x2="14" y2="14" />
          <line x1="14" y1="4" x2="4" y2="14" />
        </svg>
      </button>
      <div className="relative w-full max-w-2xl aspect-[1/1.4]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={src}
          alt="Certyfikat - powiększenie"
          fill
          unoptimized
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>
    </div>,
    document.documentElement
  );
};

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const closeLightbox = useCallback(() => setSelectedCert(null), []);

  return (
    <>
      <p className="text-[length:var(--fs-h2)] leading-[150%] mb-5 desktop:mb-[80px]">Oto niektóre z moich certyfikatów</p>
      <div className="w-full p-0 flex justify-center">
        <div className="grid w-full gap-[1.5625rem] grid-cols-2 [&>*:last-child]:col-span-2 tablet:grid-cols-[repeat(auto-fit,minmax(140px,1fr))] tablet:[&>*:last-child]:col-span-1">
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

      <div className="flex flex-col desktop-lg:flex-row gap-5 mt-5 desktop:mt-[80px]">
        <InfoLabel
          icon={<TranslateIcon />}
          text="Biegle komunikuję się po angielsku"
          className="bg-light-gray flex-1"
          textColor="black"
        />
        <InfoLabel
          icon={<TransferIcon variant="white" />}
          text="Akceptuję płatność kartą lub przelewem"
          className="bg-light-gray flex-1"
          textColor="black"
        />
      </div>

      {selectedCert && <Lightbox src={selectedCert} onClose={closeLightbox} />}
    </>
  );
};
