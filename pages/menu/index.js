import React, { useState } from "react";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import styles from "@/styles/About.module.css";
import Card from "@/components/modules/Card/Card";

export default function MenuPage({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const hotDrinksPerPage = 3;
  const coldDrinksPerPage = 3;

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const hotDrinks = data.menu.filter((item) => item.type === "hot");
  const coldDrinks = data.menu.filter((item) => item.type === "cold");

  const totalPages = Math.ceil(
    Math.max(
      hotDrinks.length / hotDrinksPerPage,
      coldDrinks.length / coldDrinksPerPage
    )
  );

  const currentHotDrinks = hotDrinks.slice(
    (currentPage - 1) * hotDrinksPerPage,
    currentPage * hotDrinksPerPage
  );
  const currentColdDrinks = coldDrinks.slice(
    (currentPage - 1) * coldDrinksPerPage,
    currentPage * coldDrinksPerPage
  );

  return (
    <>
      <Head>
        {" "}
        <title>منو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"منو"} routeLink={"menu"} />
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4
              className={`${styles.text_primary} font_vazir_Light ${styles.text_uppercase}`}
              style={{ letterSpacing: "5px" }}
            >
              منوی ما
            </h4>
            <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>
              با تنوعی از نوشیدنی‌ها
            </h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی داغ</h1>
              {currentHotDrinks.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی سرد</h1>
              {currentColdDrinks.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </div>
          <div className={`${styles.pagination}`}>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePagination(index + 1)}
                className={
                  index + 1 === currentPage ? `${styles.pagination_active}` : ""
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const menuResponse = await fetch("http://localhost:3000/api/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
      data: {
        menu: menuData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
