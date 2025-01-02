import React from "react";
import Head from "next/head";

import PageHeader from "@/components/modules/PageHeader/PageHeader";
import Reservation from "@/components/templates/Index/Reservation";

export default function ReservationPage() {
  return (
    <>
      <Head>
        {" "}
        <title>ثبت رزرو</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <PageHeader route={"رزرو"} routeLink={"reservation"} />
      <Reservation />
    </>
  );
}
