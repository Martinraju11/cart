import React, { useReducer } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./Login.json";
import { Login } from "./Components/Login/Login";
import { Home } from "./Components/Home/Home";
import { Favourite } from "./Components/Favourite/Favourite";
import { Context } from "./Context";
import { initialState, reducer } from "./State";
import { Cart } from "./Cart/Cart";

export const Routings = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          {state.isLogin ? (
            <Routes>
              <Route path="/home" element={<Home data={Users} />} />
              <Route path="/favourite" element={<Favourite />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<Login data={Users} />} />
            </Routes>
          )}
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
};
