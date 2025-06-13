import { combineReducers } from "redux";
import userReducer from "./user/slice";
import  cartReducer  from "./cart/slice";
import  cartUiReducer  from "./cartUI/slice";

export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    cartUI: cartUiReducer
})