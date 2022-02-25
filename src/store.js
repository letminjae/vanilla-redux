import { createStore } from "redux";

//액션
const ADD = "ADD";
const DELETE = "DELETE";


//액션 생성함수
const addToDo = (text) => {
    return {
        type: ADD,
        text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE,
        id: parseInt(id)
    }
}

//리듀서
const reducer = (state = [], action) => {
    switch(action.type){
        case ADD:
            return [{text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo.id !== action.id);
        default:
            return state;
    }
};

const store = createStore(reducer);

export const actionCreators  = {
    addToDo,
    deleteToDo,
}

export default store;