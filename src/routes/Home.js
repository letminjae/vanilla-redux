import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";


function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");
    
    const onChange = (e) => {
        setText(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addToDo(text)
        setText("");
        
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange}/>
            <button>add</button>
            </form>
            <ul>{toDos.map((toDo,index) => <ToDo {...toDo} key={index}/>)}</ul>
        </>
    )
}

const mapStateToProps = (state) => {
    return { toDos: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo : text => dispatch(actionCreators.addToDo(text))
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Home);