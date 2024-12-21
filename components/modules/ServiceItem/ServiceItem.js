import React from 'react'

export default function ServiceItem({ title, desc, img, icon }) {
  return (
    <div class="col-lg-6 mb-5">
      <div class="row align-items-center">
        <div class="col-sm-5">
          <img class="img-fluid mb-3 mb-sm-0" src={img} alt="" />
        </div>
        <div class="col-sm-7">
          <h4 className='font_vazir_light'>
            <i class="fa fa-truck service-icon  "></i>
            {title}
          </h4>
          <p class="m-0  font_vazir_regular">{desc}</p>
        </div>
      </div>
    </div>
  )
}
