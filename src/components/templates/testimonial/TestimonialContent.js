"use client";
import PageHeader from "@/components/modules/PageHeader/PageHeader";
import TestimonialItem from "@/components/modules/TestimonialItem/TestimonialItem";
import styles from "@/styles/About.module.css";

import React, { useState } from "react";

function TestimonialContent({comments}) {
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 3;

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const currentComments = comments.slice(
    (currentPage - 1) * commentsPerPage,
    currentPage * commentsPerPage
  );

  const renderPagination = () => {
    let paginationItems = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationItems.push(
          <button
            key={i}
            onClick={() => handlePagination(i)}
            className={i === currentPage ? `${styles.pagination_active}` : ""}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        paginationItems.push(<span key={i}>...</span>);
      }
    }

    return paginationItems;
  };

  return (
    <>
      <PageHeader route={"نظرات"} routeLink={"testimonial"} />
      <div className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4
              className={`${styles.text_primary} text-uppercase font_vazir_Light`}
              style={{ letterSpacing: "5px" }}
            >
              نظرات
            </h4>
            <h1 className={`${styles.display_4} font_vazir_ExtraBold`}>
              مشتریان درباره ما چه می‌گویند
            </h1>
          </div>
          <div className="owl-carousel testimonial-carousel">
            {currentComments.map((comment) => (
              <TestimonialItem {...comment} key={comment.id} />
            ))}
          </div>
          <div className={`${styles.pagination}`}>{renderPagination()}</div>
        </div>
      </div>
    </>
  );
}

export default TestimonialContent;



