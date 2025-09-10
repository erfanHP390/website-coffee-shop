import React from "react";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import ContactUs from "@/components/templates/Contact/ContactUs";

export default function Contact() {
  return (
    <>
      <Head>
        {" "}
        <title>تماس با ما</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"ارتباط با ما"} routeLink={"contact"} />
      <ContactUs />
    </>
  );
}
