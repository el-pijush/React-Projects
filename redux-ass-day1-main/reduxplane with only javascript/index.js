const reducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            ...state,count:state.count+1
        }
        case 'DECREMENT':
        return {
            ...state,count:state.count-1
        }
        default:return state

    }
}


class Store{
    #reducer
    #state
    constructor(reducer,initstate){
        this.#reducer=reducer;
        this.#state=initstate;
        
    }
    getState(){
        return this.#state;
    }



dispatch(action){
    console.log("dispatch",action);
    console.log("currentstate",this.#state);
    const updatedstate=this.#reducer(this.#state,action);
    console.log("updated state",updatedstate)
    this.state=updatedstate;
}
}


const initstate={count:0}


const store=new Store(reducer,initstate)


console.log(store.getState());

store.dispatch({type:"INCREMENT"})

console.log(store.getState())
store.dispatch({type:"INCREMENT"})
store.dispatch({type:"INCREMENT"})

store.dispatch({type:"DECREMENT"})
console.log(store.getState())
