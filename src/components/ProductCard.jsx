import Product from "./Product";
import { useEffect, useState } from "react";

const ProductCard = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const data = await fetch("https://fakestoreapi.com/products")
    const resData = await data.json()
    console.log(resData);
    
    setProductList(resData)
    
  }

  // filter button
  const topRatedProduct = () => {
    const filteredProduct = productList.filter(product => product.rating.rate >= 4 )
    setProductList(filteredProduct)
  }
  return (
    <div>
      <button onClick={topRatedProduct} className="bg-red-400 text-white m-2 p-2 rounded-xl hover:bg-amber-400 cursor-pointer">Top Rated Product</button>
      <div className="flex w-full flex-wrap">
        {productList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
