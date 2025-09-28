import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import TestimonialContent from "@/components/templates/testimonial/TestimonialContent";
import connectToDB from "@/configs/db";
import CommentModel from "@/models/Comment"

export default async function Testimonial() {

  connectToDB()
  const comments = await CommentModel.find({})

  return (
    <>
      <Head>
        {" "}
        <title>نظرات</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <TestimonialContent  comments={comments} />
    </>
  );
}