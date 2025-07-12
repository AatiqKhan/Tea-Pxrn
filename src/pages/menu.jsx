import React, { useState } from "react";
import MenuSection from "../components/Menu/menuSection";
import Header from "../ui/Header";

export default function Menu() {
  //const [activeCategory, setActiveCategory] = useState("coffee");
  //const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="min-h-screen bg-white">
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
        <h1 className="mb-16 text-center text-4xl font-light tracking-wider text-coffee-dark">
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
            <div className="absolute inset-0 -rotate-1 transform bg-coffee-dark/5"></div>
            <div className="relative border-none bg-white p-6">
              <p className="mb-2 text-sm uppercase tracking-wider text-coffee-dark/60">
                Today's Special
              </p>
              <h3 className="mb-1 text-xl font-medium text-coffee-dark">
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
      <footer className="mt-20 bg-coffee-dark py-8 text-cream">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <p className="text-sm text-cream/60">
            Prices subject to change. Please inform us of any allergies.
          </p>
        </div>
      </footer>
    </div>
  );
}
