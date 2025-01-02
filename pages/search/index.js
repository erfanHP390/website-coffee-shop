import React from "react";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Result from "@/components/templates/Search/Result";

export default function Search({ data }) {
  return (
    <>
      <Head>
        {" "}
        <title>نتایج جستجو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"جستجو ها"} routeLink={"/search"} />
      <Result data={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:3000/api/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}
