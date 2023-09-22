import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { PiMinusCircleFill } from "react-icons/pi";
export const Cart = () => {
  const { state, dispatch } = useContext(Context);
  const cartCheck = () => {
    let carts = [...state.prod].filter((v, i) => {
      return v.toCart === true;
    });
    dispatch({ type: "carts", payload: carts });
  };

  useEffect(cartCheck, [state.prod]);

  let z;
  const increase = (il) => {
    z = [...state.prod].map((a, b) => {
      return a.id === il ? { ...a, count: a.count + 1 } : a;
    });
    dispatch({ type: "countIncrease", payload: z });
  };
  let x;
  const decrease = (li) => {
    x = [...state.prod].map((a, b) => {
      return a.id === li
        ? a.count === 1
          ? { ...a, toCart: !a.toCart }
          : { ...a, count: a.count - 1 }
        : a;
    });
    dispatch({ type: "countDecrease", payload: x });
  };
  return (
    <div className="container">
      <div className="home-row">
        {state.cart.map((v, i) => {
          return (
            <div className="home-col">
              <div className="home-card">
                <img src={v.source} alt="vegetable" />
                <h3>{v.name}</h3>
                <h4>{v.price * v.count}</h4>
                {v.toCart ? (
                  <div className="cart-flex">
                    <PiMinusCircleFill onClick={() => decrease(v.id)} />
                    <p className="num">{v.count}</p>
                    <BsFillPlusCircleFill onClick={() => increase(v.id)} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
