import React from "react";
import Head from "next/head";
import MenuContent from "@/components/templates/menu/MenuContent";


export default function MenuPage({ data }) {

  return (
    <>
      <Head>
        {" "}
        <title>منو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <MenuContent />
    </>
  );
}
