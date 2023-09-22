import Users from "./Login.json";
export const initialState = {
  isLogin: false,
  prod: Users.veg,
  fav: [],
  cart: [],
};

export const reducer = (state, action) => {
  if (action.type === "Login") {
    return { ...state, isLogin: action.payload };
  } else if (action.type === "favColor") {
    return { ...state, prod: action.payload };
  } else if (action.type === "toCart") {
    return { ...state, prod: action.payload };
  } else if (action.type === "countIncrease") {
    return { ...state, prod: action.payload };
  } else if (action.type === "countDecrease") {
    return { ...state, prod: action.payload };
  } else if (action.type === "favs") {
    return { ...state, fav: action.payload };
  } else if (action.type === "change") {
    return { ...state, prod: action.payload };
  } else if (action.type === "carts") {
    return { ...state, cart: action.payload };
  } else if (action.type === "cartz") {
    return { ...state, prod: action.payload };
  } else {
    return state;
  }
};
