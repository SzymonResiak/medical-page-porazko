"use client";

import { useState } from "react";

const ArrowLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

const Phone = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

export default function PreviewIslands() {
  const [currentOption, setCurrentOption] = useState("A");
  const [currentVariant, setCurrentVariant] = useState(1);

  return (
    <div className="min-h-screen bg-off-white p-4">
      <h1 className="text-2xl font-bold text-center mb-8 text-dark-gray">
        Preview Floating Islands
      </h1>

      {/* Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {["A", "B", "C", "D", "E", "F"].map((opt) => (
          <button
            key={opt}
            onClick={() => { setCurrentOption(opt); setCurrentVariant(1); }}
            className={`px-4 py-2 rounded-lg border-2 ${
              currentOption === opt
                ? "bg-dark-gray text-off-white border-dark-gray"
                : "bg-off-white text-dark-gray border-dark-gray"
            }`}
          >
            Opcja {opt}
          </button>
        ))}
      </div>

      {/* Preview Area */}
      <div className="max-w-md mx-auto">
        {/* OPCJA A - Pill */}
        {currentOption === "A" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja A: Pill / Capsule</h2>

            {/* A1 Light */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">A1 - Light</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-off-white border-2 border-dark-gray rounded-full">
                  <button className="flex items-center gap-2 text-dark-gray">
                    <ArrowLeft /> <span>Wróć</span>
                  </button>
                  <div className="w-px h-6 bg-dark-gray/30"></div>
                  <button className="flex items-center gap-2 text-dark-gray">
                    <Phone /> <span>Zadzwoń</span>
                  </button>
                </div>
              </div>
            </div>

            {/* A2 Dark */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">A2 - Dark</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-dark-gray border-2 border-dark-gray rounded-full">
                  <button className="flex items-center gap-2 text-off-white">
                    <ArrowLeft /> <span>Wróć</span>
                  </button>
                  <div className="w-px h-6 bg-off-white/30"></div>
                  <button className="flex items-center gap-2 text-off-white">
                    <Phone /> <span>Zadzwoń</span>
                  </button>
                </div>
              </div>
            </div>

            {/* A3 Primary */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">A3 - Primary (zielony)</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-primary border-2 border-primary-dark rounded-full">
                  <button className="flex items-center gap-2 text-off-white">
                    <ArrowLeft /> <span>Wróć</span>
                  </button>
                  <div className="w-px h-6 bg-off-white/30"></div>
                  <button className="flex items-center gap-2 text-off-white">
                    <Phone /> <span>Zadzwoń</span>
                  </button>
                </div>
              </div>
            </div>

            {/* A4 Outline */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">A4 - Outline (transparent)</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-transparent border-2 border-dark-gray rounded-full">
                  <button className="flex items-center gap-2 text-dark-gray">
                    <ArrowLeft /> <span>Wróć</span>
                  </button>
                  <div className="w-px h-6 bg-dark-gray/30"></div>
                  <button className="flex items-center gap-2 text-dark-gray">
                    <Phone /> <span>Zadzwoń</span>
                  </button>
                </div>
              </div>
            </div>

            {/* A5 Glass */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">A5 - Glass (blur)</p>
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-4 px-6 py-3 bg-off-white/80 backdrop-blur-md border border-dark-gray rounded-full">
                  <button className="flex items-center gap-2 text-dark-gray">
                    <ArrowLeft /> <span>Wróć</span>
                  </button>
                  <div className="w-px h-6 bg-dark-gray/30"></div>
                  <button className="flex items-center gap-2 text-dark-gray">
                    <Phone /> <span>Zadzwoń</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* OPCJA B - Soft Rectangle */}
        {currentOption === "B" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja B: Soft Rectangle</h2>

            {/* B1 Light */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">B1 - Light</p>
              <div className="flex items-center justify-between px-6 py-4 bg-off-white border-2 border-dark-gray rounded-2xl">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* B2 Dark */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">B2 - Dark</p>
              <div className="flex items-center justify-between px-6 py-4 bg-dark-gray rounded-2xl">
                <button className="flex items-center gap-2 text-off-white">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* B3 Subtle */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">B3 - Subtle</p>
              <div className="flex items-center justify-between px-6 py-4 bg-light-gray border border-light-gray rounded-2xl">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-primary">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* B4 Glass */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">B4 - Glass</p>
              <div className="flex items-center justify-between px-6 py-4 bg-off-white/70 backdrop-blur-md border border-dark-gray rounded-2xl">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OPCJA C - Split Pills */}
        {currentOption === "C" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja C: Split Pills</h2>

            {/* C1 Uniform */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">C1 - Uniform</p>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-5 py-3 bg-off-white border-2 border-dark-gray rounded-full text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-off-white border-2 border-dark-gray rounded-full text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* C2 Contrast */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">C2 - Contrast</p>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-5 py-3 bg-off-white border-2 border-dark-gray rounded-full text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-dark-gray border-2 border-dark-gray rounded-full text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* C3 Primary CTA */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">C3 - Primary CTA</p>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-5 py-3 bg-off-white border-2 border-dark-gray rounded-full text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-primary border-2 border-primary-dark rounded-full text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* C4 Accent CTA */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">C4 - Accent CTA (niebieski)</p>
              <div className="flex items-center justify-between">
                <button className="flex items-center gap-2 px-5 py-3 bg-light-gray border-2 border-dark-gray rounded-full text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 px-5 py-3 bg-accent border-2 border-accent rounded-full text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OPCJA D - Unified Bar */}
        {currentOption === "D" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja D: Unified Bar z dividerem</h2>

            {/* D1 Light */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">D1 - Light</p>
              <div className="flex items-center border-2 border-dark-gray rounded-2xl overflow-hidden">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-off-white text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <div className="w-0.5 h-12 bg-dark-gray"></div>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-off-white text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* D2 Dark */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">D2 - Dark</p>
              <div className="flex items-center border-2 border-dark-gray rounded-2xl overflow-hidden">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-gray text-off-white">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <div className="w-0.5 h-12 bg-light-gray"></div>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-gray text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* D3 Mixed */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">D3 - Mixed</p>
              <div className="flex items-center border-2 border-dark-gray rounded-2xl overflow-hidden">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-off-white text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-dark-gray text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* D4 Glass */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">D4 - Glass</p>
              <div className="flex items-center border border-dark-gray rounded-2xl overflow-hidden bg-off-white/80 backdrop-blur-md">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <div className="w-px h-12 bg-dark-gray/30"></div>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OPCJA E - Card z cieniem */}
        {currentOption === "E" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja E: Card z cieniem</h2>

            {/* E1 Clean */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">E1 - Clean</p>
              <div className="flex items-center justify-between px-6 py-4 bg-off-white rounded-xl shadow-lg">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* E2 Bordered */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">E2 - Bordered</p>
              <div className="flex items-center justify-between px-6 py-4 bg-off-white rounded-xl shadow-md border border-dark-gray">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* E3 Dark */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">E3 - Dark</p>
              <div className="flex items-center justify-between px-6 py-4 bg-dark-gray rounded-xl shadow-xl">
                <button className="flex items-center gap-2 text-off-white">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-off-white">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>

            {/* E4 Elevated */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">E4 - Elevated</p>
              <div className="flex items-center justify-between px-6 py-4 bg-off-white rounded-xl shadow-2xl border border-light-gray">
                <button className="flex items-center gap-2 text-dark-gray">
                  <ArrowLeft /> <span>Wróć</span>
                </button>
                <button className="flex items-center gap-2 text-dark-gray">
                  <Phone /> <span>Zadzwoń</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OPCJA F - Notch style */}
        {currentOption === "F" && (
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-center text-dark-gray">Opcja F: Notch style</h2>

            {/* F1 Light */}
            <div className="space-y-2">
              <p className="text-sm text-dark-gray font-medium">F1 - Light</p>
              <div className="relative">
                <div className="absolute left-0 right-0 top-0 h-4 flex">
                  <div className="flex-1 border-b-2 border-dark-gray"></div>
                  <div className="w-48"></div>
                  <div className="flex-1 border-b-2 border-dark-gray"></div>
                </div>
                <div className="flex justify-center pt-0">
                  <div className="flex items-center gap-6 px-6 py-3 bg-off-white border-2 border-t-0 border-dark-gray rounded-b-2xl">
                    <button className="flex items-center gap-2 text-dark-gray">
                      <ArrowLeft /> <span>Wróć</span>
                    </button>
                    <button className="flex items-center gap-2 text-dark-gray">
                      <Phone /> <span>Zadzwoń</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* F2 Dark */}
            <div className="space-y-2 mt-12">
              <p className="text-sm text-dark-gray font-medium">F2 - Dark</p>
              <div className="relative">
                <div className="absolute left-0 right-0 top-0 h-4 flex">
                  <div className="flex-1 border-b-2 border-dark-gray"></div>
                  <div className="w-48"></div>
                  <div className="flex-1 border-b-2 border-dark-gray"></div>
                </div>
                <div className="flex justify-center pt-0">
                  <div className="flex items-center gap-6 px-6 py-3 bg-dark-gray border-2 border-t-0 border-dark-gray rounded-b-2xl">
                    <button className="flex items-center gap-2 text-off-white">
                      <ArrowLeft /> <span>Wróć</span>
                    </button>
                    <button className="flex items-center gap-2 text-off-white">
                      <Phone /> <span>Zadzwoń</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* F3 Primary */}
            <div className="space-y-2 mt-12">
              <p className="text-sm text-dark-gray font-medium">F3 - Primary</p>
              <div className="relative">
                <div className="absolute left-0 right-0 top-0 h-4 flex">
                  <div className="flex-1 border-b-2 border-primary-dark"></div>
                  <div className="w-48"></div>
                  <div className="flex-1 border-b-2 border-primary-dark"></div>
                </div>
                <div className="flex justify-center pt-0">
                  <div className="flex items-center gap-6 px-6 py-3 bg-primary border-2 border-t-0 border-primary-dark rounded-b-2xl">
                    <button className="flex items-center gap-2 text-off-white">
                      <ArrowLeft /> <span>Wróć</span>
                    </button>
                    <button className="flex items-center gap-2 text-off-white">
                      <Phone /> <span>Zadzwoń</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mt-12 text-center text-sm text-dark-gray/60">
        <p>Otwórz na urządzeniu mobilnym lub zmniejsz okno przeglądarki</p>
        <p className="mt-2">URL: <code className="bg-light-gray px-2 py-1 rounded">/preview-islands</code></p>
      </div>
    </div>
  );
}
