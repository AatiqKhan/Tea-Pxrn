import React from "react";
import { useEffect, useState } from "react";
import Header from "../ui/Header";
//import { Card, CardContent } from "@/components/ui/card";
//import { Button } from "@/components/ui/button";
//import Header from "../ui/Header";

{
  /* <div className="bg-slate-400">
         <Header />
         <h1 className="text-3xl italic text-blue-500">HOME</h1>
       </div> */
}

const menuItems = [
  {
    title: "House Blend",
    description: "Notes of chocolate and hazelnut",
    price: "$4.50",
  },
  {
    title: "Artisan Pastries",
    description: "Freshly baked daily",
    price: "$3.75",
  },
  {
    title: "Specialty Drinks",
    description: "Crafted by expert baristas",
    price: "$5.50",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-cream min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed z-50 w-full transition-all duration-500 ${
          isScrolled ? "bg-coffee-dark/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-cream text-xl">☕</span>
              <span className="text-cream text-lg font-light tracking-wider">
                TEA-PxRN
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              {["home", "menu", "gallery"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-cream/80 hover:text-cream text-sm uppercase tracking-wider transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cream text-xl md:hidden"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="bg-coffee-dark/95 backdrop-blur-sm md:hidden">
            <div className="px-4 py-2">
              {["home", "menu", "gallery"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-cream/80 hover:text-cream block py-2 text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
      <Header />
      {/* Hero Section */}
      <section
        id="home"
        className="bg-coffee-dark flex h-screen items-center justify-center px-4"
      >
        <div className="max-w-2xl text-center">
          <h1 className="text-cream mb-6 text-4xl font-light tracking-wider md:text-5xl">
            CRAFTING MOMENTS,
            <br />
            ONE CUP AT A TIME
          </h1>
          <p className="text-cream/80 text-lg font-light tracking-wide">
            we sell cigarates too, but thats not the point.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-coffee-dark/80 text-lg font-light leading-relaxed">
            Founded with a passion for perfectly roasted beans and a deep
            appreciation for minimalist design, Cozy Corner creates a space
            where coffee isn't just served – it's celebrated in its purest form.
          </p>
        </div>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-coffee-dark mb-16 text-center text-2xl font-light uppercase tracking-wider">
            Featured Selection
          </h2>
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="bg-cream border-none shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-coffee-dark mb-2 text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="text-coffee-dark/60 mb-4 text-sm">
                    {item.description}
                  </p>
                  <p className="text-coffee-medium">{item.price}</p>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-cream border-none shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-coffee-dark mb-2 text-lg font-medium">
                    {item.title}
                  </h3>
                  <p className="text-coffee-dark/60 mb-4 text-sm">
                    {item.description}
                  </p>
                  <p className="text-coffee-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              className="bg-coffee-dark hover:bg-coffee-dark/90 text-cream text-sm uppercase tracking-wider"
              onClick={() => (window.location.href = "/menu.html")}
            >
              Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                src="/api/placeholder/300/300"
                alt={`Café ambiance ${i + 1}`}
                className="aspect-square w-full object-cover transition-opacity duration-300 hover:opacity-90"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-coffee-dark text-cream py-12">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Brand and Description */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">☕</span>
                <span className="text-lg tracking-wider">COZY CORNER</span>
              </div>
              <p className="text-cream/60 text-sm font-light">
                A minimalist space dedicated to the art of coffee, where every
                detail is crafted with intention.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              {/* Hours */}
              <div className="space-y-2">
                <div className="text-cream/80 mb-2 flex items-center space-x-2">
                  <span className="text-lg">⏰</span>
                  <span className="text-sm tracking-wide">HOURS</span>
                </div>
                <div className="text-cream/60 text-sm">
                  <p>Mon-Fri: 7am - 8pm</p>
                  <p>Sat-Sun: 8am - 6pm</p>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="text-cream/80 mb-2 flex items-center space-x-2">
                  <span className="text-lg">📍</span>
                  <span className="text-sm tracking-wide">FIND US</span>
                </div>
                <div className="text-cream/60 text-sm">
                  <p>123 Coffee Street</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <span className="text-cream/80 mb-2 block text-sm tracking-wide">
                  SOCIAL
                </span>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    📱
                  </a>
                  <a
                    href="#"
                    className="text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    📘
                  </a>
                  <a
                    href="#"
                    className="text-cream/60 hover:text-cream transition-colors duration-300"
                  >
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-cream/10 text-cream/40 mt-8 border-t pt-4 text-center text-sm">
            © {new Date().getFullYear()} Cozy Corner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
