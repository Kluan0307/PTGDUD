import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="font-bold mb-2">About Us</h2>
          <p className="text-sm mb-4">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l w-full" />
            <button className="bg-pink-500 px-4 py-2 rounded-r">Send</button>
          </div>
        </div>

        <div>
          <h2 className="font-bold mb-2">Learn More</h2>
          <ul className="text-sm text-left pl-20">
            <li className="pb-1">Our Cooks</li>
            <li className="pb-1">See Our Features</li>
            <li className="pb-1">FAQ</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Shop</h2>
          <ul className="text-sm text-left pl-20">
            <li className="pb-1">Gift Subscription</li>
            <li className="pb-1">Send Us Feedback</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold mb-2">Recipes</h2>
          <ul className="text-sm text-left pl-20">
            <li className="pb-1">What to Cook This Week</li>
            <li className="pb-1">Pasta</li>
            <li className="pb-1">Dinner</li>
            <li className="pb-1">Healthy</li>
            <li className="pb-1">Vegetarian</li>
            <li className="pb-1">Vegan</li>
            <li className="pb-1">Christmas</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">🍽️ Chefify</h2>
          <span className="text-sm">2023 Chefify Company</span>
        </div>
        <div className="text-sm flex gap-4">
          <span>Terms of Service</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};