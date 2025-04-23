import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";
import React from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-md rounded-xl max-w-md mx-auto mt-10">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">🔥 Counter App</h3>
      <p className="text-3xl font-semibold text-indigo-600 mb-6">Count: {count}</p>
      <div className="flex gap-6">

        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium shadow transition duration-200"
        >
          -
        </button>

        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium shadow transition duration-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
