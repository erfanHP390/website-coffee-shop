import React from 'react'

import ProductDetails from '@/components/templates/ProdctDetails/ProductDetails'
import ProductComment from '@/components/templates/ProductComment/ProductComment'

const Product = ({ product }) => {
  return (
    <>
      <ProductDetails data={product} />
      <ProductComment />
    </>
  );
};

export async function getStaticPaths(context) {
  const res = await fetch(`http://localhost:4000/menu`);
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/menu/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default Product;
