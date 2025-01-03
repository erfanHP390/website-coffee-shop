import Head from 'next/head'
import "@/styles/Product.module.css";

import ProductComment from "@/components/templates/ProductComment/ProductComment";
import ProductsDetails from "@/components/templates/ProdctDetails/ProductDetails";

const Product = ({ product, comments }) => {

  console.log(product);
  
  return (
    <>
      <Head>
        {" "}
        <title>{product.title}</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <ProductsDetails data={product} />
      <ProductComment data={comments} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/menu`);
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

  const productResponse = await fetch(`http://localhost:3000/api/menu/${params.id}`);
  const productData = await productResponse.json();

  const commentsResponse = await fetch(`http://localhost:3000/api/comment`);
  const comments = await commentsResponse.json();

  const productComments = comments.filter(
    (comment) => comment.productID === params.id
  );

  return {
    props: {
      product: productData,
      comments: productComments,
    },
    revalidate: 60 * 60 * 12, // Second
  };
}

export default Product;
