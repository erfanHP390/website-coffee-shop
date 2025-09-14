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
      <Services  />
    </>
  );
}
