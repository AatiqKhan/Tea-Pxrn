import React from "react";

// const CoffeeBeansIcon = () => (
//   <svg className="w-24 h-12" viewBox="0 0 100 50">
//     <path d="M20 25 Q25 10 35 25" fill="none" stroke="black" strokeWidth="1.5"/>
//     <path d="M30 25 Q35 10 45 25" fill="none" stroke="black" strokeWidth="1.5"/>
//     <path d="M40 25 Q45 10 55 25" fill="none" stroke="black" strokeWidth="1.5"/>
//   </svg>
// );

// const TeaBagIcon = () => (
//   <svg className="w-12 h-24" viewBox="0 0 50 100">
//     <path d="M25 20 L25 60 Q25 80 35 85" fill="none" stroke="black" strokeWidth="1.5"/>
//     <rect x="20" y="60" width="10" height="12" stroke="black" fill="none" strokeWidth="1.5"/>
//   </svg>
// );

// const SandwichIcon = () => (
//   <svg className="w-24 h-16" viewBox="0 0 100 70">
//     <path d="M10 20 L90 20 L85 40 L15 40 Z" fill="none" stroke="black" strokeWidth="1.5"/>
//     <circle cx="85" cy="30" r="5" fill="none" stroke="black" strokeWidth="1.5"/>
//   </svg>
// );

const MenuItem = ({ name, price }) => (
  <div className="relative mb-2 flex items-baseline">
    <span className="font-serif text-sm">{name}</span>
    <div className="relative top-[-4px] mx-2 flex-grow border-b border-dotted border-gray-400"></div>
    <span className="font-serif text-sm">{price}/-</span>
  </div>
);

export default function MenuSection() {
  return (
    <div className="mx-auto max-w-2xl p-8 font-serif">
      {/* Coffee Section */}
      <div className="mb-16">
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
      </div>

      {/* Tea Section */}
      <div className="mb-16">
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
      </div>

      {/* Tidbits Section */}
      <div className="">
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
      </div>
    </div>
  );
}
