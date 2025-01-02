import React from "react";
import Link from "next/link";
import Head from "next/head";

import About from "@/components/templates/Index/About";
import PageHeader from "@/components/modules/PageHeader/PageHeader";

function AboutPage() {
  return (
    <>
      <Head>
        {" "}
        <title>nvfhvi lh</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"درباره"} routeLink={"about"} />
      <About />
    </>
  );
}

export default AboutPage;
