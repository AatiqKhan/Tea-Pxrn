import React, { useState } from "react";
import LoadingScreen from "../../ui/LoadingScreen";
// import { useFetchMenu } from "../Admin-Menu/useFetchMenu";
import ItemSection from "./itemSection";

// const MenuItem = ({ name, price }) => (
//   <div className="relative mb-2 flex items-baseline">
//     <span className="font-serif text-sm">{name}</span>
//     <div className="relative top-[-4px] mx-2 flex-grow border-b border-dotted border-gray-400"></div>
//     <span className="font-serif text-sm">{price}/-</span>
//   </div>
// );
const menuItems = [
  // Tea
  {
    item: "Masala Chai",
    price: 40,
    description: "Spiced Indian tea brewed with milk and herbs.",
    category: "Tea",
  },
  {
    item: "Green Tea",
    price: 35,
    description: "Refreshing and light with a subtle flavor.",
    category: "Tea",
  },
  {
    item: "Lemon Honey Tea",
    price: 45,
    description: "Zesty lemon and honey infused with black tea.",
    category: "Tea",
  },
  {
    item: "Tulsi Ginger Tea",
    price: 50,
    description: "Ayurvedic blend of holy basil and fresh ginger.",
    category: "Tea",
  },
  {
    item: "Iced Peach Tea",
    price: 55,
    description: "Chilled tea with natural peach essence.",
    category: "Tea",
  },

  // Coffee
  {
    item: "Espresso",
    price: 60,
    description: "Strong and bold shot of pure coffee.",
    category: "Coffee",
  },
  {
    item: "Cappuccino",
    price: 80,
    description: "Espresso with steamed milk and foam.",
    category: "Coffee",
  },
  {
    item: "Cold Brew",
    price: 90,
    description: "Smooth, slow-brewed coffee served cold.",
    category: "Coffee",
  },
  {
    item: "Mocha",
    price: 100,
    description: "Chocolate-flavored coffee with whipped cream.",
    category: "Coffee",
  },
  {
    item: "Filter Coffee",
    price: 50,
    description: "Traditional South Indian coffee with frothy milk.",
    category: "Coffee",
  },

  // Tidbits
  {
    item: "Veg Puff",
    price: 30,
    description: "Flaky pastry filled with spiced vegetables.",
    category: "Tidbits",
  },
  {
    item: "Paneer Sandwich",
    price: 70,
    description: "Grilled sandwich with marinated paneer and chutney.",
    category: "Tidbits",
  },
  {
    item: "Banana Bread",
    price: 60,
    description: "Moist bread with real banana and nuts.",
    category: "Tidbits",
  },
  {
    item: "Cheese Garlic Toast",
    price: 65,
    description: "Toasted bread with garlic butter and cheese topping.",
    category: "Tidbits",
  },
  {
    item: "Chocolate Muffin",
    price: 50,
    description: "Soft muffin loaded with chocolate chips.",
    category: "Tidbits",
  },
];

export default function MenuSection() {
  const menuCategories = { Coffee: "1", Tea: "2", Tidbits: "3" };
  const [activeCategory, setActiveCategory] = useState("Coffee");
  // console.log("hey", activeCategory);
  // const { isLoading, menu = [], error } = useFetchMenu();
  //console.log("mmmmmm", menu);
  // const menuitems = menu.filter((item) => item.category === activeCategory);
  //console.log("fiteredddd", menuitems);
  //  const { id, item, price, description, category } = menuitems;

  const imgSource = `/../${activeCategory}-Menu.jpg`;

  // if (isLoading) return <LoadingScreen />;
  // if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <>
      <div className="mb-16 flex justify-center space-x-6">
        {Object.keys(menuCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-sm uppercase tracking-wider transition-all duration-300 ${
              activeCategory === category
                ? "bg-coffee-dark text-cream"
                : "bg-transparent text-coffee-dark hover:bg-coffee-dark/5"
            }`}
            variant={activeCategory === category ? "default" : "ghost"}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-2xl p-8 font-serif">
        {/* {menuitems.map((item) => (
          <div key={id}>
            <div>{itemasu}</div>
            <div>{price}</div>
            <div>{description}</div>
            <div>{category}</div>
          </div>
        ))} */}
        <div className="mb-16">
          <div className="mb-6 flex max-w-sm items-center justify-between overflow-hidden rounded bg-white shadow-lg">
            <img
              className="h-auto w-full"
              src={imgSource}
              //src="/../public/Coffee-Menu.jpg"
              alt="Image 1"
            />
            <h2 className="text-xl tracking-wider">COFFEE</h2>
          </div>

          <div>
            {menuItems
              .filter((c, i) => c.category == activeCategory)
              .map((items, i) => (
                <ItemSection items={items} key={i} />
              ))}
          </div>
        </div>

        {/* Coffee Section */}
        {/* <div className="mb-16">
          <div className="mb-6 flex max-w-sm items-center justify-between overflow-hidden rounded bg-white shadow-lg">
            <img
              className="h-auto w-full"
              src="/../public/Coffee-Menu.jpg"
              alt="Image 1"
            />
            <h2 className="text-xl tracking-wider">COFFEE</h2>
          </div>

          <div className="pl-4">
            <h3 className="mb-2 text-sm">Espresso</h3>
            <MenuItem name="Double" price="35" />
            <MenuItem name="Single" price="30" />
            <MenuItem name="Americano" price="50" />
            <MenuItem name="Cappuccino" price="60" />
            <MenuItem name="Mocha" price="80" />
            <MenuItem name="Café Latte" price="60" />
            <MenuItem name="Macchiato" price="90" />
          </div>
        </div> */}

        {/* Tea Section */}
        {/* <div className="mb-16">
          <div className="mb-6 flex max-w-sm items-center justify-between overflow-hidden rounded bg-white shadow-lg">
            <img
              className="h-auto w-full"
              src="/../public/Tea-Menu.jpg"
              alt="Image 1"
            />

            <h2 className="text-xl tracking-wider">TEA</h2>
          </div>
          <div className="pl-4">
            <MenuItem name="Classic" price="15" />
            <MenuItem name="Double Milk" price="25" />
            <MenuItem name="Black Tea" price="20" />
            <MenuItem name="Masala Tea" price="30" />
            <MenuItem name="Green Tea" price="30" />
            <div className="mt-6">
              <h3 className="mb-2 text-sm">S P E C I A L S</h3>
              <MenuItem name="Saffron Kehwa" price="55" />
              <MenuItem name="Doodh Kehwa" price="65" />
            </div>
          </div>
        </div> */}

        {/* Tidbits Section */}
        {/* <div className="">
          <div className="mb-6 flex max-w-sm items-center justify-between overflow-hidden rounded bg-white shadow-lg">
            <img
              className="h-auto w-full"
              src="/../public/Tidbits-Menu.jpg"
              alt="Image 1"
            />

            <h2 className="text-xl tracking-wider">TIDBITS</h2>
          </div>
          <div className="pl-4">
            <MenuItem name="Butter Toast" price="20" />
            <MenuItem name="Classic Sandwich" price="45" />
            <MenuItem name="Chola Puri" price="50" />
            <MenuItem name="Samosa" price="15" />
            <MenuItem name="Egg Omlette" price="40" />
            <div className="mt-6">
              <h3 className="mb-2 text-sm">S P E C I A L S</h3>
              <MenuItem name="Barbeque" price="50" />
              <MenuItem name="Fried Fish" price="">
                <div>
                  <MenuItem name="250 gm" price="125" />
                  <MenuItem name="500 gm" price="220" />
                </div>
              </MenuItem>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
