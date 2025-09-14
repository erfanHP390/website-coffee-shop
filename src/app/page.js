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
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product"



export default async function HomePage() {

  connectToDB()

  const products = await ProductModel.find({})

  

  return (
    <>
      <Slider />
      <About />
      {/* <Services services={data.services} /> */}
      <Offer />
      <Menu products={products} />
      <Reservation />
      {/* <Testimonial data={data.comment} /> */}
    </>
  );
}
