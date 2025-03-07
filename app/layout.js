import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";
import DataProvider from "./Provider"; 
import { Toaster } from "@/components/ui/sonner"
import { SessionProvider } from "next-auth/react";
import Footer from "./_component/Footer";

 // Correct path to your DataProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AlertGroup",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>
        <SessionProvider><Header />
          {children}
          <Footer/></SessionProvider>
          
        </DataProvider>
        <Toaster />
      </body>
    </html>
  );
}
