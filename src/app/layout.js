// src/app/layout.js
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import ScrollTopBtn from "@/components/templates/ScrollTopBtn/ScrollTopBtn";


export const metadata = {
  title: "خانه",
  description: "My Next.js 13 website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <Navbar />
        {children}
        <Footer />
        <ScrollTopBtn />
      </body>
    </html>
  );
}
