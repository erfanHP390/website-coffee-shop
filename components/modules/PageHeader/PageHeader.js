import React from 'react'
import Link from "next/link";


export default function PageHeader({route , routeLink}) {
  return (
    <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
      <div
        className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5"
        style={{ minHeight: "400px" }}
      >
        <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase  font_vazir_ExtraBold">
          {route}
        </h1>
        <div className="d-inline-flex mb-lg-5">
          <p className="m-0 text-white">
            <Link className="text-white  font_vazir_Light" href="/">
              خانه
            </Link>
          </p>
          <p className="m-0 text-white px-2  font_vazir_Light">/</p>
          <Link className="m-0 text-white  font_vazir_Light"  href={`/${routeLink}`}>{route}</Link>
        </div>
      </div>
    </div>
  )
}
