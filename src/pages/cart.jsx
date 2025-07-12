// import React from "react";

// export default function Cart() {
//   return <div>cart</div>;
// }
///////////////

// CartPage.js
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useCart } from "../context/cart_context";
import supabase from "../services/supabase";

// Function to send the order to Supabase
const placeOrderApi = async (orderData) => {
  const { data, error } = await supabase.from("orders").insert([
    {
      // For anonymous orders, you might leave user_id null or not include it.
      items: orderData.items, // Expecting a JSON array of items
      total_price: orderData.totalPrice, // Numeric total price
      order_date: new Date().toISOString(),
    },
  ]);
  if (error) throw error;
  return data;
};

export default function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart();

  // Use React Query's useMutation for placing the order
  const mutation = useMutation(placeOrderApi, {
    onSuccess: () => {
      // Order placed successfully; clear the cart
      clearCart();
    },
    onError: (error) => {
      console.error("Order failed:", error);
    },
  });

  const handlePlaceOrder = () => {
    const orderData = {
      items: cart,
      totalPrice: getTotalPrice(),
    };
    mutation.mutate(orderData);
  };

  return (
    <div className="mx-auto max-w-lg p-4">
      <h2 className="mb-4 bg-black text-2xl font-bold">Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="flex justify-between border-b py-2">
          <div>
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <div>${(item.price * (item.quantity || 1)).toFixed(2)}</div>
        </div>
      ))}
      <div className="mt-4">
        <p className="font-semibold">Total: ${getTotalPrice().toFixed(2)}</p>
      </div>
      <button
        onClick={handlePlaceOrder}
        className="mt-4 w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        Place Order
      </button>
    </div>
  );
}
