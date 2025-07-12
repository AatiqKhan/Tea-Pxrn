import React from "react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../ui/Header";

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
const GalleryPreviewImg = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg"];
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
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav
        className={`fixed z-50 w-full transition-all duration-500 ${
          isScrolled ? "bg-coffee-dark/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl text-cream">☕</span>
              <span className="text-lg font-light tracking-wider text-cream">
                Cafe Bliss
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              {["home", "menu", "gallery"].map((item) => (
                <button
                  key={item}
                  className="text-sm uppercase tracking-wider text-cream/80 transition-colors duration-300 hover:text-cream"
                >
                  <NavLink to={`${item}`}> {item}</NavLink>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-xl text-cream md:hidden"
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
                <button
                  key={item}
                  className="block py-2 text-sm uppercase tracking-wider text-cream/80 hover:text-cream"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to={`/${item}`}> {item}</NavLink>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
      {/* <Header /> */}
      {/* Hero Section */}
      <section
        id="home"
        className="flex h-screen items-center justify-center bg-coffee-dark px-4"
      >
        <div className="max-w-2xl text-center">
          <h1 className="mb-6 text-4xl font-light tracking-wider text-cream md:text-5xl">
            CRAFTING MOMENTS,
            <br />
            ONE CUP AT A TIME
          </h1>
          <p className="text-lg font-light tracking-wide text-cream/80">
            we sell cigarates too, but thats not the point.
          </p>
        </div>
      </section>
      {/* Story Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg font-light leading-relaxed text-coffee-dark/80">
            Founded with a passion for perfectly roasted beans and a deep
            appreciation for minimalist design, Cozy Corner creates a space
            where coffee isn't just served – it's celebrated in its purest form.
          </p>
        </div>
      </section>
      {/* Menu Preview */}
      <section id="menu" className="bg-white px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center text-2xl font-light uppercase tracking-wider text-coffee-dark">
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
                className="border-none bg-cream shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-medium text-coffee-dark">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm text-coffee-dark/60">
                    {item.description}
                  </p>
                  <p className="text-coffee-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              className="bg-coffee-dark text-sm uppercase tracking-wider text-cream hover:bg-coffee-dark/90"
              onClick={() => (window.location.href = "/menu")}
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
            {GalleryPreviewImg.map((image, i) => (
              <img
                key={i}
                src={`/GalleryPreview/${image}`}
                alt={`Café ambiance ${i + 1}`}
                className="aspect-square w-full object-cover transition-opacity duration-300 hover:opacity-90"
              />
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-coffee-dark py-12 text-cream">
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {/* Brand and Description */}
            <div className="flex flex-col gap-4 md:w-1/3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">☕</span>
                <span className="text-lg tracking-wider">COZY CORNER</span>
              </div>
              <p className="text-sm font-light text-cream/60">
                A minimalist space dedicated to the art of coffee, where every
                detail is crafted with intention.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              {/* Hours */}
              <div className="space-y-2">
                <div className="mb-2 flex items-center space-x-2 text-cream/80">
                  <span className="text-lg">⏰</span>
                  <span className="text-sm tracking-wide">HOURS</span>
                </div>
                <div className="text-sm text-cream/60">
                  <p>Mon-Fri: 7am - 8pm</p>
                  <p>Sat-Sun: 8am - 6pm</p>
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <div className="mb-2 flex items-center space-x-2 text-cream/80">
                  <span className="text-lg">📍</span>
                  <span className="text-sm tracking-wide">FIND US</span>
                </div>
                <div className="text-sm text-cream/60">
                  <p>123 Coffee Street</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2">
                <span className="mb-2 block text-sm tracking-wide text-cream/80">
                  SOCIAL
                </span>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    📱
                  </a>
                  <a
                    href="#"
                    className="text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    📘
                  </a>
                  <a
                    href="#"
                    className="text-cream/60 transition-colors duration-300 hover:text-cream"
                  >
                    🐦
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-cream/10 pt-4 text-center text-sm text-cream/40">
            © {new Date().getFullYear()} Cozy Corner. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
