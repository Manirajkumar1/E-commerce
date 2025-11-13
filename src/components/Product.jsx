const Product = ({product}) => {
  const  {title, price, image, rating, } = product
  return(
    <div className="border border-gray-300 rounded-lg shadow-sm w-50  hover:shadow-md m-2 p-2 cursor-pointer h-80">
      <img className="w-full h-48 object-contain mb-4" src={image} alt="" />
    <h1 className="text-lg font-semibold truncate">{title}</h1>
    <p className="text-sm  mb-1 bg-red-400 w-6 px-5 flex justify-center items-center rounded-2xl text-white">{rating.rate}</p>
    <p className="text-base font-medium text-green-700 pt-2.5">₹{price}</p>
  </div>
  )
}

export default Product