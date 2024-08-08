import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const count = useSelector((state) => state.cart.cartList);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between px-6 md:px-12 bg-neutral-800 h-10 text-stone-400 font-medium text-sm">
        <div className="hidden md:flex items-center mr-20">
          <Link to="/login">Log in</Link>
          <div className="border-l border-gray-400 mx-4 h-6"></div>
          <Link to="/create">Create Account</Link>
        </div>
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <Link
            to="/mylist"
            className="border border-gold py-1 px-1 w-auto h-6 ml-2 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span className="mx-1">{count.length} </span>
            <h2>Cart</h2>
          </Link>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-1/2 bg-black bg-opacity-95 py-12 space-y-4  text-white font-garmond p-4 transform translate-x-0 transition-transform duration-300 ease-in-out">
            <Link to="/login" className="block mb-2 hover:bg-teal-900 py-2 px-2 border-l border-b " onClick={closeMenu}>
              Log in
            </Link>
            <Link to="/create" className="block mb-2 hover:bg-teal-900 py-2 px-2 border-l border-b" onClick={closeMenu}>
              Create Account
            </Link>
            <Link to="/about" className="block mb-2 hover:bg-teal-900 py-2 px-2 border-l border-b" onClick={closeMenu}>
              ABOUT
            </Link>
            <Link to="/contact" className="block mb-2 hover:bg-teal-900 py-2 px-2 border-l border-b" onClick={closeMenu}>
              CONTACT
            </Link>
            <div className="relative group hover:bg-teal-900 py-2 px-2 border-l border-b">
              <button className="flex items-center ">
                SHOP
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <div className="hidden group-hover:block absolute z-10 text-emerald-950 font-roboto top-8 left-0 mt-2 p-2 bg-emerald-200 border border-gray-200 rounded-md shadow-md w-full">
                <div className="space-y-2 text-sm flex flex-col ">
                  <Link to="/jeans" onClick={closeMenu}>
                    JEANS
                  </Link>
                  <Link to="/tshirts" onClick={closeMenu}>
                    T-SHIRT
                  </Link>
                  <Link to="/shoeses" onClick={closeMenu}>
                    SHOESES
                  </Link>
                  <Link to="/hats" onClick={closeMenu}>
                    HATS
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-black bg-opacity-50" onClick={closeMenu}></div>
        </div>
      )}

      <nav className="bg-teal-700 text-white py-3">
        <div className="text-center font-roboto text-l">
          Free Shipping For Orders Over $99
        </div>
      </nav>

      <nav className="text-emerald-900 bg-fuchsia-50 bg-opacity-50 p-4 px-20 flex items-center justify-between">
        <Link to="/">
          <div className="text-xl font-semibold font-playwrite">
            Mollyjpgger
            <span className="text-sm font-normal">
              Field, Forest, Stream
            </span>
          </div>
        </Link>
        <div className="hidden md:flex space-x-4">
          <div className="relative group">
            <button className="flex items-center">
              SHOP
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
            <div className="hidden group-hover:block absolute z-10 text-emerald-900 w-32 top-4 left-0 mt-2 p-2 bg-white border border-gray-200 rounded-md shadow-md">
              <div className="space-y-2 text-sm flex flex-col">
                <Link to="/jeans">JEANS</Link>
                <Link to="/tshirts">T-SHIRT</Link>
                <Link to="/shoeses">SHOESES</Link>
                <Link to="/hats">HATS</Link>
              </div>
            </div>
          </div>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
