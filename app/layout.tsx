import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avniya Cloud Solutions",
  description: "Cloud, DevOps, Software Development Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-white">{children}</body>
    </html>
  );
}
