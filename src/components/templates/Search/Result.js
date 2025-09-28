import React from "react";
import Card from "@/components/modules/Card/Card";
import styles from "./Result.module.css";

export default function Result({ products, searchQuery }) {
  console.log("Products in Result:", products); 

  const hotDrinks = products.filter((item) => item.type === "hot");
  const coldDrinks = products.filter((item) => item.type === "cold");

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="container">
          {/* نمایش عبارت جستجو شده */}
          {searchQuery && (
            <div className="mb-4">
              <h3 className="font_vazir_Bold">
                نتایج جستجو برای: "{searchQuery}"
              </h3>
              <p className="text-muted">{products.length} محصول یافت شد</p>
            </div>
          )}

          {searchQuery && products.length === 0 && (
            <div className="alert alert-warning text-center">
              <h4>هیچ محصولی یافت نشد!</h4>
              <p>
                لطفاً عبارت جستجوی خود را تغییر دهید یا از کلمات کلیدی دیگری
                استفاده کنید.
              </p>
            </div>
          )}

          <div className="row">
            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی داغ</h1>
              {hotDrinks.length > 0 ? (
                hotDrinks.map((item) => (
                  <Card
                    key={item._id || item.id}
                    _id={item._id || item.id}
                    title={item.name || item.title}
                    description={item.description || ""}
                    price={item.price || 0}
                    img={item.image || item.img || "/images/placeholder.jpg"}
                  />
                ))
              ) : (
                <p className={styles.no_item}>آیتمی برای نمایش وجود ندارد</p>
              )}
            </div>

            <div className="col-lg-6">
              <h1 className="mb-5 font_vazir_Bold">نوشیدنی سرد</h1>
              {coldDrinks.length > 0 ? (
                coldDrinks.map((item) => (
                  <Card
                    key={item._id || item.id}
                    _id={item._id || item.id}
                    title={item.name || item.title}
                    description={item.description || ""}
                    price={item.price || 0}
                    img={item.image || item.img || "/images/placeholder.jpg"}
                  />
                ))
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
