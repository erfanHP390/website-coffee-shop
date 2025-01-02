import React from "react";
import Head from "next/head";

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
  const res = await fetch("http://localhost:4000/services");
  const services = await res.json();

  const menuResponse = await fetch("http://localhost:3000/api/menu");
  const menuData = await menuResponse.json();

  const commentsResponse = await fetch("http://localhost:4000/comment");
  const commentsData = await commentsResponse.json();

  return {
    props: {
      data: {
        services,
        menu: menuData,
        comments: commentsData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
