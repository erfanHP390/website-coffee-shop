import React from 'react'

import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Result from '@/components/templates/Search/Result'

export default function Search({data}) {
  return (
    <>
      <PageHeader route={"جستجو ها"} routeLink={"/search"} />
      <Result  data={data} />
    </>
  )
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.q.toLowerCase())
  );


    return {
        props: {
            data: searchResult,
        }
    }



}
