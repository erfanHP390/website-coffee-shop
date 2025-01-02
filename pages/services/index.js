import React from "react";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Services from "@/components/templates/Index/Services";

export default function ServicesPage({ data }) {
  return (
    <>
      <Head>
        {" "}
        <title>خدمات</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"خدمات"} routeLink={"services"} />
      <Services services={data.services} />
    </>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:3000/api/services");
  const servicesData = await servicesResponse.json();

  return {
    props: {
      data: {
        services: servicesData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
