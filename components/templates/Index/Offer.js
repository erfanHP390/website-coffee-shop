import React from 'react'

import styles from "../../../styles/Offer.module.css"

function Offer() {
  return (
    <div class={`${styles.offer} container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom`}>
      <div class="container py-5">
        <h1 class={`${styles.display_3}  ${styles.text_primary} mt-3  font_vazir_extra_bold`}>تخفیف های شگفت انگیز</h1>
        <h1 class="text-white mb-3   font_vazir_bold">یکشنبه ها با قیمت های باورنکردنی</h1>
        <h4 class="text-white font-weight-normal mb-4 pb-3  m-0  font_vazir_regular">
          برای دریافت آخرین اخبار و رویداد ها در خبرنامه ما عضو شوید
        </h4>
        <form class={`${styles.form_inline} justify-content-center mb-4`}>
          <div class={`${styles.input_group}`}>
            <input
              type="text"
              class={`${styles.form_control} p-4  m-0  font_vazir_regular`}
              placeholder="لطفا ایمیل خود را وارد کنید"
              style={{ height: "60px" }}

            />
            <div class={`${styles.input_group_append}`}>
              <button
                class={`${styles.btn}  ${styles.btn_primary}  m-0  font_vazir_regular  font-weight-bold px-4`}
                type="submit"
              >
                عضویت
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Offer
