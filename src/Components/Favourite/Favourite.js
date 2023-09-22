import React, { useContext, useEffect } from "react";
import { Context } from "../../Context";
import { BsFillHeartFill } from "react-icons/bs";

export const Favourite = () => {
  const { state, dispatch } = useContext(Context);
  const favCheck = () => {
    let favs = [...state.prod].filter((v, i) => {
      return v.isFav === true;
    });
    dispatch({ type: "favs", payload: favs });
  };

  useEffect(favCheck, [state.prod]);

  const favi = (ity) => {
    let chge = [...state.prod].map((v, i) => {
      return ity === v.id ? { ...v, isFav: !v.isFav } : v;
    });
    dispatch({ type: "change", payload: chge });
  };
  return (
    <div className="container">
      <div className="home-row">
        {state.fav.map((v, i) => {
          return (
            <div className="home-col">
              <div className="home-card">
                <img src={v.source} alt="vegetable" />
                <h3>{v.name}</h3>
                <h4>{v.price}</h4>
                {v.isFav ? (
                  <BsFillHeartFill
                    className="home-i"
                    onClick={() => favi(v.id)}
                  />
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
