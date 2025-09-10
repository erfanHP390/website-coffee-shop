// src/app/page.js
import fs from "fs";
import path from "path";
import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonial from "./testimonial/page";


export const revalidate = 60 * 60 * 12; // معادل getStaticProps با ISR

export default async function HomePage() {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = JSON.parse(fs.readFileSync(dbPath));

  return (
    <>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonial data={data.comment} />
    </>
  );
}
