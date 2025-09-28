import React from "react";
import Head from "next/head";
import MenuContent from "@/components/templates/menu/MenuContent";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product"

export default async function MenuPage() {

  connectToDB()
  const products = await ProductModel.find({})

  return (
    <>
      <Head>
        {" "}
        <title>منو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <MenuContent products={products} />
    </>
  );
}
