import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import DataProvider from "./Provider";
import { Toaster } from "@/components/ui/sonner";
import { SessionProvider } from "next-auth/react";
import Footer from "./_component/Footer";
import Head from "next/head";  // Import Head for SEO

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
  title: "AlertGroup Security Services",  
  description: "AlertGroup provides top-notch security services across Canada, ensuring safety with professional and reliable solutions.",  // A more descriptive summary
  keywords: "security services, AlertGroup, crime data, Canada security, professional security, AlertGroup services, Security", 
  openGraph: {
    title: "AlertGroup Security Services",
    description: "Providing professional security services across Canada.",
    url: "https://alertgroup.vercel.app",  
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
    description: "Professional security services to ensure safety and reliability.",
    image: "/hero-bg.jpg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Essential SEO meta tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </Head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
