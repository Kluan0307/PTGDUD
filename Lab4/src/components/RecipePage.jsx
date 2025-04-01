import React from "react";

import logo from "../../img/chefify.png"

export default function RecipePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <img src={logo}  alt="" />
        <input
          type="text"
          placeholder="Search"
          className="p-2 border rounded w-1/3"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded">
          Your Recipe Box
        </button>
      </header>

      {/* Filters */}
      <div className="flex p-4">
        <aside className="w-1/4 p-4 bg-white shadow-md rounded">
          <h2 className="text-xl font-bold mb-4">Filters</h2>
          <div className="mb-4">
            <h3 className="font-semibold">Type</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {['Pan-fried', 'Grilled', 'Sauteed', 'Steamed', 'Stir-fried', 'Roasted', 'Baked', 'Stewed'].map(type => (
                <label key={type} className="flex items-center gap-2">
                  <input type="checkbox" /> {type}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Time</h3>
            <input type="range" className="w-full" />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">Rating</h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-yellow-400">★</span>
              ))}
            </div>
          </div>
          <button className="w-full bg-pink-500 text-white py-2 rounded">Apply</button>
        </aside>

        {/* Recipe Grid */}
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, index) => (
            <div key={index} className="bg-white shadow-md p-2 rounded">
              <div className="h-32 bg-gray-200 rounded mb-2"></div>
              <h3 className="font-bold">Recipe Name</h3>
              <p className="text-gray-500">32 minutes</p>
              <button className="text-pink-500 mt-2">❤️</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white mt-4">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold">About</h2>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <input type="email" placeholder="Enter your email" className="mt-2 p-2 rounded w-full" />
            <button className="bg-pink-500 text-white mt-2 px-4 py-2 rounded">Send</button>
          </div>
          <div>
            <h2 className="font-bold">Learn More</h2>
            <ul>
              <li>Our Cooks</li>
              <li>See Our Features</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">Recipes</h2>
            <ul>
              <li>Healthy</li>
              <li>Vegetarian</li>
              <li>Vegan</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};
