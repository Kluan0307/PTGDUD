import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from '../action/ActionRedux';

const CounterUseRedux = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center" }}>
      <h3>UseRedux Thuần</h3>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default CounterUseRedux;
