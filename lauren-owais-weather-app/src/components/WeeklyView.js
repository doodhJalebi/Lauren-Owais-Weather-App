import React from "react"

function TodoItem(props) {
    return (
        <div className="todo-item">
            <p className="date">{props.item.text}</p>
            <span className="weather">{props.item.weather} </span>
            <span> {props.item.temphigh} </span>
            <span className="low"> {props.item.templow} </span>
        </div>
    )
}

export default TodoItem
