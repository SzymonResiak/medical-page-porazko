import type { Metadata } from "next";
import "./globals.css";
import { FooterLandingPage } from "@/components/FooterLandingPage";

export const metadata: Metadata = {
  title: "Klinika Porażko - Stomatologia i Nefrologia",
  description:
    "Specjalistyczna opieka stomatologiczna i nefrologiczna w Opolu. Profesjonalne usługi medyczne dla całej rodziny.",
  authors: [{ name: "Klinika Porażko" }],
  keywords: [
    "stomatologia",
    "nefrologia",
    "klinika",
    "Opole",
    "lekarz",
    "dentysta",
  ],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen p-3 desktop:p-12 bg-[#FCFCFC] desktop-2:px-20 desktop-2:pt-25 desktop-2:pb-8">
    {children}
  </div>
);

const Footer = () => (
  <>
    <FooterLandingPage />
    <p className="text-right text-sm text-[#2E2E2E] mt-1">
      © 2025 XYZ – Wszelkie prawa zastrzeżone.
    </p>
  </>
);

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <main>
          <MainContent>
            {children}
            <Footer />
          </MainContent>
        </main>
      </body>
    </html>
  );
}
