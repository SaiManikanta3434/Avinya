import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Avniya Cloud Solutions",
  description: "Cloud, DevOps and Software Development for Business Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg-dark text-white">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
