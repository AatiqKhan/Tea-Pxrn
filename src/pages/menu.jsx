import React, { useState } from "react";
import MenuSection from "../components/Menu/menuSection";
import Header from "../ui/Header";

const menuCategories = {
  coffee: [
    {
      name: "House Blend",
      description:
        "Our signature medium roast with notes of chocolate and hazelnut",
      price: "4.50",
    },
    {
      name: "Pour Over",
      description: "Single-origin beans, meticulously hand-poured",
      price: "5.00",
    },
    {
      name: "Cold Brew",
      description: "18-hour steeped, smooth and bold",
      price: "4.75",
    },
    {
      name: "Espresso",
      description: "Rich, full-bodied double shot",
      price: "3.50",
    },
    {
      name: "Cappuccino",
      description: "Equal parts espresso, steamed milk, and silky foam",
      price: "4.75",
    },
  ],
  pastries: [
    {
      name: "Croissant",
      description: "Flaky, buttery, freshly baked daily",
      price: "3.75",
    },
    {
      name: "Cinnamon Roll",
      description: "House-made with vanilla glaze",
      price: "4.25",
    },
    {
      name: "Chocolate Muffin",
      description: "Double chocolate with dark chocolate chunks",
      price: "3.50",
    },
  ],
  specials: [
    {
      name: "Seasonal Latte",
      description: "Ask about our current seasonal creation",
      price: "5.50",
    },
    {
      name: "Affogato",
      description: "Vanilla bean gelato drowned in espresso",
      price: "6.00",
    },
    {
      name: "Tea Ceremony",
      description: "Select loose leaf tea served in traditional style",
      price: "5.75",
    },
  ],
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="bg-white  min-h-screen">
      {/* Navigation (same as main page) */}
      {/* <nav className="bg-coffee-dark/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-cream text-xl">☕</span>
              <span className="text-cream text-lg font-light tracking-wider">
                COZY CORNER
              </span>
            </a>
          </div>
        </div>
      </nav> */}
      <Header />
      {/* Menu Content */}
      <main className="mx-auto max-w-3xl px-4 py-20">
        <h1 className="text-coffee-dark mb-16 text-center text-4xl font-light tracking-wider">
          MENU
        </h1>

        {/* Category Selector */}
        {/* <div className="mb-16 flex justify-center space-x-6">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "bg-coffee-dark text-cream"
                  : "text-coffee-dark hover:bg-coffee-dark/5 bg-transparent"
              }`}
              variant={activeCategory === category ? "default" : "ghost"}
            >
              {category}
            </button>
          ))}
        </div> */}

        <MenuSection />

        {/* Menu Items */}
        {/* <div className="space-y-4">
          {menuCategories[activeCategory].map((item, index) => (
            <div
              key={index}
              className={`border-none bg-white transition-all duration-300 ${
                hoveredItem === index ? "-translate-x-2 transform" : ""
              }`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="grid grid-cols-[1fr,auto] gap-4 p-6">
                <div>
                  <h3 className="text-coffee-dark mb-1 text-lg font-medium">
                    {item.name}
                  </h3>
                  <p className="text-coffee-dark/60 text-sm">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center">
                  <span
                    className={`text-coffee-medium transition-all duration-300 ${
                      hoveredItem === index ? "scale-110 transform" : ""
                    }`}
                  >
                    ${item.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div> */}

        {/* Daily Special Highlight */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="bg-coffee-dark/5 absolute inset-0 -rotate-1 transform"></div>
            <div className="relative border-none bg-white p-6">
              <p className="text-coffee-dark/60 mb-2 text-sm uppercase tracking-wider">
                Today's Special
              </p>
              <h3 className="text-coffee-dark mb-1 text-xl font-medium">
                Barista's Choice
              </h3>
              <p className="text-coffee-dark/60">
                Ask our baristas about today's unique creation
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-coffee-dark text-cream mt-20 py-8">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-cream/60 text-sm">
            Prices subject to change. Please inform us of any allergies.
          </p>
        </div>
      </footer>
    </div>
  );
}
