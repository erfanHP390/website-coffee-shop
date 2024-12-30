import React from 'react'

import PageHeader from '@/components/modules/PageHeader/PageHeader'
import ContactUs from '@/components/templates/Contact/ContactUs'

export default function Contact() {
  return (
    <>
      <PageHeader route={"ارتباط با ما"}  routeLink={"contact"} />
      <ContactUs />
    </>
  )
}
