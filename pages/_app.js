import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Navbar from "@/components/modules/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    </>
  );
}
