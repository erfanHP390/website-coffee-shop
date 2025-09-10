import React from "react";
import Head from "next/head";
import fs from "fs"
import path from "path"

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
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parsedData = JSON.parse(data);

  return {
    props: {
      data: {
        services: parsedData.services,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
