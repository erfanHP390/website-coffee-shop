import React from 'react'

import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Services from '@/components/templates/Index/Services'

export default function ServicesPage({data}) {
  return (
    <>
        <PageHeader route={"خدمات"} routeLink={"services"} />
        <Services services={data.services} />
    </>
  )
}

export async function getStaticProps() {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();


  return {
    props: {
      data: {
        services : servicesData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}

