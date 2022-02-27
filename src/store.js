import { createStore } from "redux";
import {configureStore, createAction, createReducer} from "@reduxjs/toolkit"

//액션
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")


//리듀서
// const reducer = (state = [], action) => {
//     switch(action.type){
//         case addToDO.type:
//             return [{text: action.payload, id: Date.now() }, ...state];
//         case deleteToDo.type:
//             return state.filter(toDo => toDo.id !== action.payload);
//         default:
//             return state;
//     }
// };

const reducer = createReducer([],{
    //addTodo에는 이미 있는 state를 변형시키기 때문에 mutate가 되어버려 중괄호를 씌워 immer 적용
    [addToDo]: (state, action) => {
        state.push({text: action.payload, id: Date.now()});
    },
    //filter라는 메소드가 새배열을 만들어주기 때문에 mutate걱정이 없음, 중괄호 안씌워줘도 됨
    [deleteToDo]: (state,action) =>
        state.filter(toDo => toDo.id !== action.payload)
})

const store = configureStore({reducer});

export const actionCreators  = {
    addToDo,
    deleteToDo,
}

export default store;