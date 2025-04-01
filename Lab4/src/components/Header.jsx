import { FaSearch, FaRegBookmark } from "react-icons/fa";

import logo from '../img/chefify.png'
import avt from '../img/avatar.png'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-pink-500 text-2xl font-bold flex items-center gap-1">
          <img src={logo} alt="" />
        </span>
        <div className="relative">
          <FaSearch className="absolute left-2 top-2 text-gray-400" />
          <input
            type="text"
            placeholder="Salad"
            className="pl-8 pr-4 py-2 border rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
      </div>
      <nav className="flex gap-4 text-gray-600">
        <a href="#" className="hover:text-pink-500 pr-3 pl-3">What to cook</a>
        <a href="#" className="hover:text-pink-500 pr-3 pl-3">Recipes</a>
        <a href="#" className="hover:text-pink-500 pr-3 pl-3">Ingredients</a>
        <a href="#" className="hover:text-pink-500 pr-3 pl-3">Occasions</a>
        <a href="#" className="hover:text-pink-500 pr-3 pl-3">About Us</a>
      </nav>
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-pink-100 text-pink-500 px-4 py-2 rounded-full hover:bg-pink-200">
          <FaRegBookmark /> Your Recipe Box
        </button>
        <img
          src={avt}
          alt="User Avatar"
          className="w-10 h-10 rounded-full border border-gray-200"
        />
      </div>
    </header>
  );
}