import React from 'react'

import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Reservation from '@/components/templates/Index/Reservation'

export default function ReservationPage() {
  return (
    <>
      <PageHeader route={"رزرو"}  routeLink={"reservation"} />
      <Reservation  />
    </>
  )
}
