"use client";

import React, { useState } from "react";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import styles from "@/styles/About.module.css";
import Card from "@/components/modules/Card/Card";
function MenuContent({products}) {
        const [currentPage, setCurrentPage] = useState(1);
    const hotDrinksPerPage = 3;
    const coldDrinksPerPage = 3;

    const handlePagination = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const hotDrinks = products.filter((item) => item.type === "hot");
    const coldDrinks = products.filter((item) => item.type === "cold");

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

export default MenuContent;
