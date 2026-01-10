import React, { useEffect, useState } from "react";
import Accordian from "./Accordian";
import { Link } from "react-router-dom";

function Men() {
  const [openItem, setOpenItem] = useState(null);
  const [menProducts, setMenProducts] = useState([]);

  const filters = [
    { id: 1, title: "Category" },
    { id: 2, title: "Price" },
    { id: 3, title: "Rating" },
  ];

  const fetchMenProducts = async () => {
    try {
      const res = await fetch(
        "https://fakestoreapi.com/products/category/men's clothing"
      );
      const data = await res.json();
      setMenProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT SIDE – FILTER */}
        <div className="bg-white rounded-xl shadow-md p-4 h-fit">
          <h1 className="text-xl font-semibold mb-4">Filters</h1>

          {filters.map((item) => (
            <Accordian
              key={item.id}
              title={item.title}
              show={openItem === item.id}
              setShow={() =>
                setOpenItem(openItem === item.id ? null : item.id)
              }
            />
          ))}
        </div>

        {/* RIGHT SIDE – MEN PRODUCTS */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menProducts.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
            <div
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-contain mb-4"
              />

              <h2 className="text-sm font-semibold truncate">
                {item.title}
              </h2>

              <div className="flex justify-between items-center mt-2">
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
    </div>
  );
}

export default Men;
