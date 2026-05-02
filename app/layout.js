import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import DataProvider from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Footer from "./_component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Updated metadata for better SEO
export const metadata = {
  metadataBase: new URL("https://alertgroup.ca"),
  title: {
    default: "AlertGroup Security Services | Professional Security in Canada",
    template: "%s | AlertGroup Security Services"
  },
  description:
    "AlertGroup provides top-notch security services across Canada, ensuring safety with professional and reliable solutions.",
  keywords: [
    "security services", "AlertGroup", "crime data", "Canada security", 
    "professional security", "AlertGroup services", "Security"
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AlertGroup Security Services",
    description: "Providing professional security services across Canada.",
    url: "/",
    siteName: "AlertGroup Security Services",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 800,
        height: 600,
        alt: "AlertGroup Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AlertGroup",
    title: "AlertGroup Security Services",
    description:
      "Professional security services to ensure safety and reliability.",
    images: ["/hero-bg.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    name: "AlertGroup Security Services",
    image: "https://alertgroup.ca/hero-bg.jpg",
    description: "AlertGroup provides top-notch security services across Canada, ensuring safety with professional and reliable solutions.",
    url: "https://alertgroup.ca",
    telephone: "+1-289-380-718",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2509 fall harvest cres",
      addressLocality: "Pickering",
      addressRegion: "ON",
      postalCode: "L1X 0G1",
      addressCountry: "CA"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <DataProvider>
          <SessionProvider>
            <Header />
            {children}
            <Footer />
          </SessionProvider>
        </DataProvider>
        <Toaster />
      </body>
    </html>
  );
}
