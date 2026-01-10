import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";

function Women() {
  const [womenProductList, setWomenProductList] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products/category/women's clothing"
      );
      const data = await response.json();
      setWomenProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);


  return womenProductList.length === 0 ? <Skeleton/> : (
   
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Women's Collection
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {womenProductList.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
          <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-contain mb-4"
            />

            <h2 className="text-base font-semibold text-gray-800 truncate">
              {item.title}
            </h2>

            <div className="flex items-center justify-between mt-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                ⭐ {item.rating.rate}
              </span>

              <span className="text-lg font-bold text-blue-600">
                ${item.price}
              </span>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Women;
