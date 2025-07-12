import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  {
    /* <div className="border-b-2 border-gray-100 bg-white">
  <h1>HEADER</h1>
</div> */
  }
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
    <>
      {/* Navigation */}
      <nav
        className={`fixed z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-coffee-dark/95 backdrop-blur-sm"
            : "bg-transparent text-coffee-dark/95"
        }`}
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#home" className="flex items-center space-x-2">
              <span className="text-xl text-cream">☕</span>
              <span
                className={
                  isScrolled
                    ? "text-lg font-light tracking-wider text-cream"
                    : "text-lg font-light tracking-wider text-coffee-dark/95"
                }
              >
                Cafe Bliss
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden space-x-8 md:flex">
              {["home", "menu", "gallery"].map((item) => (
                <a
                  key={item}
                  className={
                    isScrolled
                      ? "text-sm uppercase tracking-wider text-cream/80 transition-colors duration-300 hover:text-cream"
                      : "tet-coffee-dark/95 text-sm uppercase tracking-wider transition-colors duration-300 hover:text-cream"
                  }
                >
                  <NavLink to={`/${item}`}> {item}</NavLink>
                </a>
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
                <a
                  key={item}
                  className="block py-2 text-sm uppercase tracking-wider text-cream/80 hover:text-cream"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <NavLink to={`/${item}`}> {item}</NavLink>
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
