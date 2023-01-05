import { combineReducers } from "redux";
import themeReducer from "./ThemeReducer/themeReducer";
import counterSlice from "../slices/counterSlice";
import addToCartReducer from "./AddToCartReducer/AddToCartReducer";


const rootReducer = combineReducers({
  themeReducer : themeReducer,
  counterSlice : counterSlice,
  addToCartReducer : addToCartReducer
})

export default rootReducer;