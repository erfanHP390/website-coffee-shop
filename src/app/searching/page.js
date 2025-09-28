import React from "react";
import Head from "next/head";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import styles from "@/styles/About.module.css";
import SearchContent from "@/components/templates/searchContent/SearchContent";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product"

export default async function SearchPage() {

  connectToDB()
  const products = await ProductModel.find({})

  return (
    <>
      <Head>
        <title>جستجو</title>
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />
      </Head>
      <PageHeader route={"جستجو میان محصولات"} routeLink={"/search"} />
      <SearchContent  products={products} />
    </>
  );
}