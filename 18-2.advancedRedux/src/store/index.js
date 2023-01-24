
import {configureStore} from '@reduxjs/toolkit';
import counterSlice from "./counter";
import authSlice from "./auth";


// const counterReducer = (state = initialState, action) => {
//
//
//     //주의할 점은 return 값은 기존의 값을 덮어씌운다는 점. 즉, 적지 않은 state는 사라진다
//     //절대로 param에서 받은 값을 바꾸지 말고, 아예 새로운 객체를 만들어서 반환하자
//     //기존의 값을 반환하기 시작하면 개꼬임
//
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//
//     if (action.type === 'TOGGLE') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         }
//     }
//     return state
// }

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    },
})



export default store;


