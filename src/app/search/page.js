import React from "react";
import Head from "next/head";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import connectToDB from "@/configs/db";
import ProductModel from "@/models/Product";
import Result from "@/components/templates/Search/Result";

export default async function Search({ searchParams }) {
  await connectToDB();
  
  const searchQuery = searchParams?.q || "";
  
  let products = [];
  
  if (searchQuery) {
    try {
      products = await ProductModel.find({
        $or: [
          { name: { $regex: searchQuery, $options: "i" } },
          { title: { $regex: searchQuery, $options: "i" } },
          { description: { $regex: searchQuery, $options: "i" } }
        ]
      }).lean();
      
      console.log("Search Query:", searchQuery);
      console.log("Found Products:", products);
      
    } catch (error) {
      console.error("Search error:", error);
      products = [];
    }
  } else {
    products = await ProductModel.find({}).lean();
  }

  const productsData = JSON.parse(JSON.stringify(products));

  return (
    <>
      <Head>
        <title>نتایج جستجو</title>
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />
      </Head>
      <PageHeader route={"جستجو ها"} routeLink={"/search"} />
      <Result products={productsData} searchQuery={searchQuery} />
    </>
  );
}