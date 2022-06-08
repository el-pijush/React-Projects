import { appAction
 } from "./action";

 export const reducer=(state,action)=>
{
    switch(action.type)
    {
        case appAction.INCREMENT_COUNT:
            return{
                ...state,count:state.count+1
            }
            case appAction.DECREMENT_COUNT:
                return{
                    ...state,count:state.count-1
                };
                default:return state;

        
    }
}