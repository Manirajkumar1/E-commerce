import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [singleProduct, setSingleProduct] = useState(null);
  const [loding, setLoding] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    const productDetails = async () => {
      try {
        setLoding(true);
        const data = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const resData = await data.json();
        setSingleProduct(resData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoding(false);
      }
    };
    productDetails();
  }, [productId]);

  if (loding) {
    return <Skeleton />;
  }

  console.log(singleProduct);
  

  const { title, image, price, rating, description, category } = singleProduct;
  return (
    <div className="flex justify-center items-center">
        <div className="border border-gray-300 rounded-lg shadow-sm hover:shadow-md m-2 p-2 cursor-pointer ">
      <img className="w-full h-48 object-contain mb-4" src={image} alt="" />
    <h1 className="text-lg font-semibold ">{title}</h1>
    <p className="text-sm  mb-1 bg-red-400 w-6 px-5 flex justify-center items-center rounded-2xl text-white">{rating.rate}</p>
    <h3>{category}</h3>
    <p className="text-base font-medium text-green-700 pt-2.5">₹{price}</p>
    <p className="">{description}</p>
  </div>
    </div>
  );
}

export default ProductDetails;
