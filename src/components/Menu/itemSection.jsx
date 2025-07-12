import React from "react";
import { useCart } from "../../context/cart_context";
// {
//   item: "Espresso",
//   price: 60,
//   description: "Strong and bold shot of pure coffee.",
//   category: "Coffee",
// },
export default function ItemSection({ items }) {
  const { item, price, description, category } = items;
  // const { addToCart } = useCart();
  // const imgSource = `/../public/${category}-Menu.jpg`;
  console.log("meoww", items);
  // function cartClick() {
  //   console.log("cartt", items);
  //   addToCart(items);
  // }
  return (
    <div className="pl-4">
      <div className="relative mb-2 flex items-baseline">
        <span className="font-serif text-sm">{item}</span>
        <div className="relative top-[-4px] mx-2 flex-grow border-b border-dotted border-gray-400"></div>
        <span className="font-serif text-sm">{price}/-</span>
      </div>

      <div className="relative mb-2 flex items-baseline justify-between pl-12">
        <div>
          <p className="font-serif text-sm">{description}</p>
        </div>
        <div>
          {/* <button onClick={cartClick}>Cart</button> */}
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
}
