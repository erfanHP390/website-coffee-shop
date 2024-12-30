import React from 'react'
import Link from "next/link";

import About from '@/components/templates/Index/About';
import PageHeader from '@/components/modules/PageHeader/PageHeader'

function AboutPage() {
  return (
    <>
    <PageHeader route={"درباره"} />
    <About />
    </>
  )
}

export default AboutPage
