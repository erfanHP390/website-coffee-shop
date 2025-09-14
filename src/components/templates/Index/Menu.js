import React from "react";
import styles from "../../../styles/About.module.css";
import Card from "@/components/modules/Card/Card";

function Menu({ products }) {

  const hotDrinks = products.filter((item) => item.type === "hot").slice(0, 3);
  const coldDrinks = products.filter((item) => item.type === "cold").slice(0, 3);

  return (
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
            با تنوعی از نوشیدنی ها
          </h1>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5 font_vazir_Bold">نوشیدنی داغ</h1>
            {hotDrinks.map((item) => (
              <Card title={item.title} description={item.description} img={item.img}  price={item.price} _id={item._id} key={item._id} />
            ))}
          </div>

          <div className="col-lg-6">
            <h1 className="mb-5 font_vazir_Bold">نوشیدنی سرد</h1>
            {coldDrinks.map((item) => (
              <Card title={item.title} description={item.description} img={item.img}  price={item.price} _id={item._id} key={item._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
