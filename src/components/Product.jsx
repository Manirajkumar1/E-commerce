const Product = ({product}) => {
  const  {title, id, price, description, category, image, rating, } = product
  return(
    <div className='border-2 border-black w-30 p-5 m-2 overflow-hidden'>
      <img src={image} alt="" />
    <h1>{title}</h1>
    <p>{rating.rate}</p>
    <p>price:{price}</p>
  </div>
  )
}

export default Product