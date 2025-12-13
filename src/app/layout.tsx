import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Dom Medyczny Pro Corde | Stomatologia i Nefrologia w Opolu",
    template: "%s | Dom Medyczny Pro Corde",
  },
  description:
    "Profesjonalne usługi stomatologiczne i nefrologiczne w Opolu. Lek. stom. Justyna Porażko (stomatologia) oraz dr hab. n. med. Tomasz Porażko (nefrologia, choroby wewnętrzne).",
  keywords: [
    "stomatolog Opole",
    "dentysta Opole",
    "nefrolog Opole",
    "internista Opole",
    "Dom Medyczny Pro Corde",
    "Justyna Porażko",
    "Tomasz Porażko",
    "leczenie zębów Opole",
    "choroby nerek Opole",
  ],
  authors: [{ name: "Dom Medyczny Pro Corde" }],
  creator: "Dom Medyczny Pro Corde",
  publisher: "Dom Medyczny Pro Corde",
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
    siteName: "Dom Medyczny Pro Corde",
    title: "Dom Medyczny Pro Corde | Stomatologia i Nefrologia w Opolu",
    description:
      "Profesjonalne usługi stomatologiczne i nefrologiczne w Opolu. Zapraszamy do naszego gabinetu przy ul. Piłsudskiego 11A.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dom Medyczny Pro Corde",
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
