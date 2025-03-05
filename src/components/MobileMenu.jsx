import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-[#1a1a2e] to-[#16213e] backdrop-blur-lg z-40 flex flex-col items-center justify-center 
                  transform transition-transform duration-500 ease-in-out
                  ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-[#f8f9fa] text-4xl hover:text-[#ff6b81] transition duration-300"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu Items */}
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <a
          key={index}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-[#f8f9fa] my-4 transform transition-all duration-500
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}        
                      hover:text-[#ff6b81] hover:scale-105
                  `}
          style={{ transitionDelay: `${index * 100}ms` }} // Delay for staggered effect
        >
          {item}
        </a>
      ))}
    </div>
  );
};
