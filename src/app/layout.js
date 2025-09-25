// src/app/layout.js
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import ScrollTopBtn from "@/components/templates/ScrollTopBtn/ScrollTopBtn";
import Loading from "./loading";

export const metadata = {
  title: "خانه",
  description: "My Next.js 13 website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body>
        <Loading />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <ScrollTopBtn />
      </body>
    </html>
  );
}
