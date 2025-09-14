"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import { FaSearch } from "react-icons/fa";
import styles from "../../styles/About.module.css";

export default function index() {
  const route = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch(route.query.q);
  }, [route.query.q]);

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13) {
      if (search.trim()) {
        route.push(`/search?q=${search}`);
      }
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      route.push(`/search?q=${search}`);
    }
  };

  return (
    <>
          <Head>
        {" "}
        <title>جستجو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"جستجو میان محصولات"} routeLink={"/searching"} />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>
              محصول دلخواهتان را سریع تر پیدا کنید
            </h1>
          </div>
          <div className={styles.search_container}>
            <FaSearch className={styles.search_icon} onClick={searchHandler} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              onKeyDown={searchHandlerWithEnter}
              type="text"
              className={styles.search_input}
              placeholder="جستجو کنید...."
            />
          </div>
        </div>
      </div>
    </>
  );
}
