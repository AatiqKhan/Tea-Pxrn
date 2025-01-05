import React from "react";

const LoadingScreen = () => {
  const waves = Array.from({ length: 30 }); // Adjust the number of steam lines

  return (
    <div className="fixed inset-0 flex h-screen items-center justify-center overflow-hidden bg-white">
      {waves.map((_, i) => (
        <svg
          key={i}
          className="absolute h-48 w-8 opacity-80"
          style={{
            left: `${Math.random() * 100}vw`,
            // left: `${10 + i * 3}%`, // Spread out across the screen width
            //animationDuration: `${3 + Math.random() * 2}s`,
            animationDelay: `${i * 0.8}s`, // Staggered delays for continuous steam
          }}
          viewBox="0 0 300 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 180 C 50 100, 250 100, 300 50"
            fill="transparent"
            stroke="#6b7280"
            strokeWidth="2"
            className="animate-steam"
          />
        </svg>
      ))}
    </div>
  );
};

export default LoadingScreen;
