import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Porażko | Stomatologia i Nefrologia w Opolu",
    template: "%s | Porażko",
  },
  description:
    "Profesjonalne usługi stomatologiczne i nefrologiczne w Opolu. Lek. stom. Justyna Porażko (stomatologia) oraz dr hab. n. med. Tomasz Porażko (nefrologia, choroby wewnętrzne).",
  keywords: [
    "stomatolog Opole",
    "dentysta Opole",
    "nefrolog Opole",
    "internista Opole",
    "Porażko",
    "Justyna Porażko",
    "Tomasz Porażko",
    "leczenie zębów Opole",
    "choroby nerek Opole",
  ],
  authors: [{ name: "Porażko" }],
  creator: "Porażko",
  publisher: "Porażko",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Porażko",
    title: "Porażko | Stomatologia i Nefrologia w Opolu",
    description:
      "Profesjonalne usługi stomatologiczne i nefrologiczne w Opolu. Zapraszamy do naszego gabinetu przy ul. Piłsudskiego 11A.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Porażko",
    description: "Stomatologia i Nefrologia w Opolu",
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FCFCFC",
  viewportFit: "cover",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <main>
          <ClientLayout>{children}</ClientLayout>
        </main>
      </body>
    </html>
  );
}
