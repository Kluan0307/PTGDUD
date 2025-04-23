import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../reducers/CounterSlide";
import React from "react";

const CounterToolkit =()=>{
    const count = useSelector((state)=> state.counter.count);
    const dispatch  = useDispatch();
    return(
        <div style={{ textAlign: "center" }}>
              <h3>ReduxToolkit</h3>
              <p>Count: {count}</p>
              <button onClick={() => dispatch(increment())}>+</button>
              <button onClick={() => dispatch(decrement())}>
                -
              </button>
            </div>
    );
};
export default CounterToolkit;