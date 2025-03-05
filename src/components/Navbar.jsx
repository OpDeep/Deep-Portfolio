import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f0f0f] via-[#1c1c1c] to-[#0f0f0f] backdrop-blur-lg border-b border-gray-700 shadow-md">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Brand Logo */}
          <a href="#home" className="font-mono text-2xl font-bold text-white">
            Deep<span className="text-[#00e6e6]">.xyz</span>
          </a>

          {/* Hamburger Menu */}
          <div
            className="w-8 h-6 flex flex-col justify-between md:hidden cursor-pointer z-50"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className={`h-1 w-full bg-[#00e6e6] rounded transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-1 w-full bg-[#00e6e6] rounded transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`h-1 w-full bg-[#00e6e6] rounded transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Projects", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#00e6e6] transition-all duration-300 font-medium text-lg relative"
              >
                {item}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#00e6e6] transition-all duration-300 hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
