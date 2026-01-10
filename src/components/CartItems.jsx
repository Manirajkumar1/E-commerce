import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItems, clearItems } from "../store/CartSlice";

function CartItems() {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  // Total price calculate
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // Empty cart UI
  if (cartItems.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold mb-2">🛒 Cart is Empty</h1>
        <p className="text-gray-500">Add some products to your cart</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        {/* Cart Items */}
        {cartItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b py-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-20 h-20 object-contain"
            />

            <div className="flex-1">
              <h2 className="font-semibold text-sm truncate">
                {item.title}
              </h2>
              <p className="text-green-600 font-medium">
                ${item.price}
              </p>
            </div>

            <button
              onClick={() => dispatch(removeItems(item.id))}
              className="bg-red-500 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-lg font-bold">
            Total: ${totalPrice.toFixed(2)}
          </h2>

          <button
            onClick={() => dispatch(clearItems())}
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
