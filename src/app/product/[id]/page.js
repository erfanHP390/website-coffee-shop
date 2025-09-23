import Head from 'next/head'
import "@/styles/Product.module.css";
import ProductModel from "@/models/Product"
import  styles from "@/styles/Product.module.css";


import ProductsDetails from "@/components/templates/ProdctDetails/ProductDetails";
import connectToDB from '@/configs/db';
import CommentForm from '@/components/templates/ProductComment/commentForm/CommentForm';
import ProductComment from '@/components/templates/ProductComment/ProductComment';

const Product = async ({ params }) => {
  connectToDB()
  const product = await ProductModel.findOne({ _id: params.id }).populate("comments").lean()
  
  
  return (
    <>
      <Head>
        {" "}
        <title>{product.title}</title>{" "}
        <link rel="icon" type="image/png" href="/images/service-2.jpg" />{" "}
      </Head>
      <ProductsDetails product={JSON.parse(JSON.stringify(product))}  />
      <ProductComment product={JSON.parse(JSON.stringify(product))} />
      <CommentForm  productId={product._id} />
    </>
  );
};


export default Product;
