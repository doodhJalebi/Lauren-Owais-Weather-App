import React from "react"

function WeeklyView(props) {
    return (
        <div className="WeeklyView">
            <p className="date">{props.item.text}</p>
            // <span className="weather">{props.item.weather} </span>
            <img src={props.item.weather} />
            <span> {props.item.temphigh} </span>
            <span className="low"> {props.item.templow} </span>
        </div>
    )
}

export default WeeklyView
