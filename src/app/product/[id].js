import Head from 'next/head'
import "@/styles/Product.module.css";
import fs from "fs"
import path from "path"

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
  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parsedData = JSON.parse(data);

  const paths = parsedData.menu.map((product) => ({
    params: { id: String(product.id) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const dbPath = path.join(process.cwd(), "data", "db.json");
  const data = fs.readFileSync(dbPath);
  const parsedData = JSON.parse(data);

  const productData = parsedData.menu.find((item) => item.id === params.id)

  

  const productComments = parsedData.comment.filter(
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
