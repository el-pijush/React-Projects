import { applyMiddleware ,combineReducers} from "redux";
import { loginreducer } from "./Login/reducer";
import { signupreducer } from "./Signup/reducer";
import { productreducer } from "./product/reducer";
import { legacy_createStore as createStore } from "redux";
//
import thunk from 'redux-thunk'

export const rootReducer=combineReducers({
    login:loginreducer,
    signup:signupreducer,
    product:productreducer
})



export const store=createStore(rootReducer,applyMiddleware(thunk))