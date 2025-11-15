import Product from "./Product";
import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const ProductCard = () => {
  const [productList, setProductList] = useState([])
  const [tempProductList, setTempProductList] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const data = await fetch("https://fakestoreapi.com/products")
    const resData = await data.json()
  
    
    setProductList(resData)
    setTempProductList(resData)
    
  }

  // searchtextbtn and serchinput

  const searchInputText = (e) => {
    setSearchText(e.target.value)
  }
 
  const searchTextBtn = () => {
    const filterTextData = productList.filter((product) => {
      return product.title.includes(searchText.toLowerCase())
    })
    setTempProductList(filterTextData)
  }

  // filter button
  const topRatedProduct = () => {
    const filteredProduct = productList.filter(product => product.rating.rate >= 4 )
    setTempProductList(filteredProduct)
    
  }

 
  return productList.length === 0 ? <Skeleton/> : (
    <div>
      <div className="m-2 flex gap-2">
        <input type="text" onChange={searchInputText} value={searchText}  className="border border-gray-400 "/>
        <button onClick={searchTextBtn}>Search</button>
      </div>
      <button onClick={topRatedProduct} className="bg-red-400 text-white m-2 p-2 rounded-xl hover:bg-amber-400 cursor-pointer">Top Rated Product</button>
      <div className="flex w-full flex-wrap">
        {tempProductList.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCard;
