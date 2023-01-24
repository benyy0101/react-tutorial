
//a way valina js imports a 3rd party library
const redux = require('redux');


/*
*********REDUCER FUNCTION
* Input: old states + dispatched action
* output: new state obj
*
* Caution: Same input leads to same output
* */
const counterReducer = (state = {counter: 0},action)=>{
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }

    return state;
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () =>{
    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})