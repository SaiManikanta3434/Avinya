import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Avniya Cloud Solutions",
  description: "Cloud, DevOps, and Software Development Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-white">
        <Navbar />   {/* ← ADD THIS */}
        {children}
        <Footer />   {/* ← Optional */}
      </body>
    </html>
  );
}
