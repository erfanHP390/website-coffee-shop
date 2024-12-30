import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from "@/components/modules/Navbar/Navbar";
import Footer from "@/components/modules/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}
