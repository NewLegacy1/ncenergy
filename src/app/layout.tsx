import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { EmergencyBanner } from "@/components/layout/EmergencyBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileFooter } from "@/components/layout/MobileFooter";
import { SITE } from "@/constants/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ncenergy.ca"),
  title: {
    default: `${SITE.name} | Heating & Air Conditioning | Hamilton, Ontario`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "HVAC Hamilton",
    "heating Hamilton",
    "air conditioning Hamilton",
    "furnace repair Hamilton",
    "AC installation Hamilton",
    "Northern Clean Energy",
  ],
  openGraph: {
    title: `${SITE.name} | Heating & Air Conditioning | Hamilton, Ontario`,
    description: SITE.description,
    url: "https://ncenergy.ca",
    siteName: SITE.name,
    locale: "en_CA",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: SITE.name,
              description: SITE.description,
              telephone: SITE.phone,
              email: SITE.email,
              address: {
                "@type": "PostalAddress",
                addressLocality: SITE.address,
                addressRegion: SITE.province,
              },
              areaServed: SITE.serviceAreas,
              url: "https://ncenergy.ca",
              foundingDate: SITE.founded.toString(),
            }),
          }}
        />
      </head>
      <body className={`${archivo.variable} antialiased`}>
        {/* SVG mask for gradient outline buttons - rounded rect ring */}
        <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" style={{ position: "absolute" }} aria-hidden>
          <defs>
            <mask id="gradient-ring-mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
              <rect x="0" y="0" width="1" height="1" rx="0.06" ry="0.25" fill="white" />
              <rect x="0.015" y="0.0625" width="0.97" height="0.875" rx="0.045" ry="0.1875" fill="black" />
            </mask>
          </defs>
        </svg>
        <EmergencyBanner />
        <Header />
        <main className="min-h-screen pb-24 md:pb-0">{children}</main>
        <Footer />
        <MobileFooter />
      </body>
    </html>
  );
}
