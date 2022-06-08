export const appAction={
    INCREMENT_COUNT:"INCREMENT_COUNT",
    DECREMENT_COUNT:"DECREMENT_COUNT"
}
export const incrementCountAction=(count)=>
{
    return{
        type:appAction.INCREMENT_COUNT,
        payload:count

};
};
export const decrementCountAction=(count)=>
{
    return{
        type:appAction.DECREMENT_COUNT,
        payload:count

};
};