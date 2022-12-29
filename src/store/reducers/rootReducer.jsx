import { combineReducers } from "redux";
import themeReducer from "./ThemeReducer/themeReducer";
import counterSlice from "../slices/counterSlice";


const rootReducer = combineReducers({
  themeReducer : themeReducer,
  counterSlice : counterSlice
})

export default rootReducer;