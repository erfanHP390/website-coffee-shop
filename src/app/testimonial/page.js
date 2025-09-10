import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import TestimonialContent from "@/components/templates/testimonial/TestimonialContent";

export default function Testimonial({ data }) {
  return (
    <>
      <Head>
        {" "}
        <title>نظرات</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <TestimonialContent />
    </>
  );
}