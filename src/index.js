import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App"

ReactDOM.render(<App></App>, document.getElementById("root"))




























// import { createStore } from "redux";
// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// //액션
// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// //액션생성함수
// const addToDoAction = (text) => {
//   return {
//     type: ADD_TODO,
//     text 
//   }
// }

// const deleteToDoAction = (id) => {
//   return {
//     type: DELETE_TODO,
//     id
//   }
// }


// //리듀서
// const reducer = (state = [], action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, {text: action.text, id: Date.now() }];
//     case DELETE_TODO:
//       //delete는 filter를 쓰면 무조건 새로운 배열로 나온다 그래서 filter를 쓴다
//       //filter에 첫인자는 모든 투두들을 담고, 우리가 유지시켜야할 todo를 새배열로 받아와야함
//       return state.filter(toDo => toDo.id !== parseInt(action.id))
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// store.subscribe(() => console.log(store.getState()));

// //여기서 text는 write to do에 뭐가 쓰일지를 넣는 인자다
// // 왜냐면 리듀서에 text와 id값을 넣어서 state를 변화시킨다 했으니
// // dispatch 보낼때 앞단에서 변화되는 text값을 같이 넣어서 보내줘야되기 때문
// const addTodo = (text) => {
//   store.dispatch(addToDoAction(text));
// }

// //그럼 삭제는? 고유한 id값을 삭제하면 되지않겟어?
// const deleteToDo = (e) => {
//   const id = e.target.parentNode.id;
//   store.dispatch(deleteToDoAction(id))
// }

// //앞단에다가 표시해주기
// const paintToDos = () => {
//   //지금 변화한 state값
//   const toDos = store.getState();
//   //ul값 리셋시키기
//   ul.innerHTML = "";
//   //반복문 돌리기
//   toDos.forEach(toDo => {
//     //변수 li는 옆에 점 생성하는거임, btn은 삭제버튼
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", deleteToDo);
//     li.id = toDo.id
//     li.innerText = toDo.text;
//     //ul에다가 li 찍어주기 li옆에는 버튼만들기
//     li.appendChild(btn);
//     ul.appendChild(li);
//   })
// }

// store.subscribe(paintToDos);



// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   addTodo(toDo);
// };

// form.addEventListener("submit", onSubmit);
