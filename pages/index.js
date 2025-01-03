import React from "react";
import Head from "next/head";
import fs from "fs"
import path from "path"

import Slider from "@/components/templates/Index/Slider";
import About from "@/components/templates/Index/About";
import Services from "@/components/templates/Index/Services";
import Offer from "@/components/templates/Index/Offer";
import Menu from "@/components/templates/Index/Menu";
import Reservation from "@/components/templates/Index/Reservation";
import Testimonial from "@/components/templates/Index/Testimonial";

export default function index({ data }) {
  return (
    <>
      <Head>
        {" "}
        <title>خانه</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <Slider />
      <About />
      <Services services={data.services} />
      <Offer />
      <Menu data={data.menu} />
      <Reservation />
      <Testimonial data={data.comments} />
    </>
  );
}

export async function getStaticProps() {
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parsedData = JSON.parse(data);

  return {
    props: {
      data: {
        services: parsedData.services,
        menu: parsedData.menu,
        comments: parsedData.comment,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
