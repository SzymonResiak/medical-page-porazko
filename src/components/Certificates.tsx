import React from "react";
import Image from "next/image";

export const Certificates = () => {
  const certificates = [
    "/images/certificate-stom-1.png",
    "/images/certificate-stom-2.png",
    "/images/certificate-stom-3.png",
    "/images/certificate-stom-4.png",
    "/images/certificate-stom-5.png",
    "/images/certificate-stom-6.png",
    "/images/certificate-stom-7.png",
  ];

  return (
    <div className="w-full p-0 flex justify-center">
      <div
        className="grid w-full gap-[1.5625rem] place-content-center"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
        }}
      >
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="certificate-container w-full bg-white shadow-sm rounded-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ aspectRatio: "1/1.4" }}>
              <Image
                src={certificate}
                alt={`Certyfikat ${index + 1}`}
                fill
                className="object-contain p-[0.5rem]"
                sizes="(max-width: 320px) 140px, (max-width: 640px) 200px, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
