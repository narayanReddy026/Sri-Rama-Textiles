import { useState } from "react";
import NavLinks from "./NavLinls";
import { ShoppingCartIcon } from "lucide-react";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-black text-white flex justify-between items-center h-16 fixed w-full top-0 left-0 z-50 p-5">
        <div className="flex items-center font-medium font-poppins gap-8">
          <img
            src="favicon.ico"
            className="h-9 w-9 rounded-full md:cursor-pointer"
            alt="Logo"
          />
          <a className="uppercase ">Sri rama textiles</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-3xl focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <ul className="md:flex hidden items-center gap-14 font-poppins">
          <NavLinks />
        </ul>
        <div className="md:block hidden">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
            Sign In
          </button>
        </div>
      </header>
      {/* Mobile nav */}
      <ul
        className={`md:hidden bg-black fixed w-full h-full top-0 left-0 pt-24 pl-4 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <NavLinks onClick={handleMobileMenuToggle} />
        <div className="py-5">
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
            Sign In
          </button>
        </div>
      </ul>
    </>
  );
}
