"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import styles from "@/styles/About.module.css";

function SearchContent({products}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const query = searchParams.get("q") || "";
    setSearch(query);
    setIsLoading(false);
  }, [searchParams]);

  const searchHandlerWithEnter = (event) => {
    if (event.keyCode === 13) {
      if (search.trim()) {
        router.push(`/search?q=${encodeURIComponent(search)}`);
      }
    }
  };

  const searchHandler = () => {
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  if (isLoading) {
    return (
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center">در حال بارگذاری...</div>
        </div>
      </div>
    );
  }

  return (
    <>
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

export default SearchContent;
