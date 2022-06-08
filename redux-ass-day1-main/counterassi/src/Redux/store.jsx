import { appAction,incrementCountAction } from "./action";

import {reducer} from "./reducer";


import { legacy_createStore } from "redux";

const initState={count:0};

const store=legacy_createStore(reducer,initState);

store.subscribe(()=>{
    console.log(store.getState())
});

store.dispatch(incrementCountAction(1));
store.dispatch(incrementCountAction(-1))

export default store;