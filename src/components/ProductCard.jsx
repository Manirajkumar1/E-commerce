import Product from "./Product"
import productData from "../utils/constant"

const ProductCard = () =>{
  return(
    <div className='flex w-full flex-wrap'>
      {
        productData.map((product) => {
          return (
            <Product key={product.id} product={product}/>
          )
        })
      }
  </div>
  )
}

export default ProductCard