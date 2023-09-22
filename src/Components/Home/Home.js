import React, { useContext } from "react";
import { BsFillHeartFill, BsCartPlusFill } from "react-icons/bs";

import "./Home.scss";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { state, dispatch } = useContext(Context);

  let m;
  const fav = (ind) => {
    m = [...state.prod].map((a, b) => {
      return b === ind ? { ...a, isFav: !a.isFav } : a;
    });
    dispatch({ type: "favColor", payload: m });
  };
  let n;
  const cart = (ill) => {
    n = [...state.prod].map((a, b) => {
      return b === ill ? { ...a, toCart: !a.toCart } : a;
    });
    dispatch({ type: "toCart", payload: n });
  };

  let navFavour = useNavigate();
  const navFav = () => {
    navFavour("/favourite");
  };
  let navCarted = useNavigate();
  const navCart = () => {
    navCarted("/cart");
  };
  return (
    <div className="container">
      <div className="btns">
        <button onClick={navFav}>Favourites</button>
        <button onClick={navCart}>Cart</button>
      </div>
      <div className="home-row">
        {state.prod.map((v, i) => {
          return (
            <div className="home-col">
              <div className="home-card">
                <img src={v.source} alt="vegetable" />
                <h3>{v.name}</h3>
                <h4>{v.price}</h4>
                <div className="home-icons">
                  {v.isFav ? (
                    <BsFillHeartFill
                      className="home-i"
                      onClick={() => fav(i)}
                    />
                  ) : (
                    <BsFillHeartFill
                      className="home-heart"
                      onClick={() => fav(i)}
                    />
                  )}

                  {v.toCart ? (
                    <BsCartPlusFill
                      className="home-carts"
                      onClick={() => cart(i)}
                    />
                  ) : (
                    <BsCartPlusFill
                      className="home-cart"
                      onClick={() => cart(i)}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
