const Product = ({ product }) => {
  const { title, price, image, rating } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer w-60 p-10">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain mb-4"
      />

      <h1 className="text-base font-semibold text-center truncate w-full">
        {title}
      </h1>

      <div className="flex items-center justify-center gap-2 mt-2">
        <p className="text-sm bg-red-400 px-3 py-1 rounded-full text-white">
          ⭐ {rating.rate}
        </p>
        <p className="text-lg font-bold text-green-700">${price}</p>
      </div>
    </div>
  );
};

export default Product;
export const HOF = () => {
  return (props) => {
    return(
      <div className="relative">
        <span className="absolute top-3 right-5 bg-green-500 text-white rounded text-sm p-1">Best Seller</span>
        <Product {...props}/>
      </div>
    )
  }
}
