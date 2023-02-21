import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/Auth.reducer";
import { productsReducer } from "./Products/products.reducer";
const rootReducer=combineReducers({
auth:authReducer,
products:productsReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))