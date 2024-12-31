import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";
import ScrollTopBtn from "@/components/templates/ScrollTopBtn/ScrollTopBtn";

export default function App({ Component, pageProps }) {


  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
      <ScrollTopBtn />
    </>
  );
}
