import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

//액션
const ADD = "ADD"
const MINUS = "MINUS"


//리듀서 switch 타입
const reducer = (count = 0, action) => {
  switch (action.type){
    case ADD :
      return count + 1;
    case MINUS :
      return count - 1;
    default:
      return count;
  }
};

//스토어
const countStore = createStore(reducer);

//store.subscribe = store의 변화를 감지해주는 메서드
//onchange가 발동될때마다 subscribe가 store의 변화를 감지
const onChange = () => {
  number.innerText = countStore.getState()
}
countStore.subscribe(onChange);

//이벤트 핸들러 => 내가 자주보는 컴포넌트에서의 이벤트 값들
//여기선 액션타입값을 주었지만 컴포넌트에선 액션생성함수를 받아옴
const handleAdd = () => {
  countStore.dispatch({type: ADD })
}

const handleMinus = () => {
  countStore.dispatch({type: MINUS })
}

add.addEventListener("click", handleAdd)

minus.addEventListener("click", handleMinus)
