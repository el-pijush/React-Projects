import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducer/reducer";



export const Store=createStore(rootReducer)