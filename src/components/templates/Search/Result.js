import React from "react";
import Card from "@/components/modules/Card/Card";
import styles from "./Result.module.css";

export default function Result({ data }) {
  const hotDrinks = data.filter((item) => item.type === "hot");
  const coldDrinks = data.filter((item) => item.type === "cold");

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی داغ</h1>
              {hotDrinks.length > 0 ? (
                hotDrinks.map((item) => <Card key={item.id} {...item} />)
              ) : (
                <p className={styles.no_item}>آیتمی برای نمایش وجود ندارد</p>
              )}
            </div>

            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی سرد</h1>
              {coldDrinks.length > 0 ? (
                coldDrinks.map((item) => <Card key={item.id} {...item} />)
              ) : (
                <p className={styles.no_item}>آیتمی برای نمایش وجود ندارد</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
