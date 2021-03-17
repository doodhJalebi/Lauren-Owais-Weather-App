import React from "react";
import WeeklyView from "./WeeklyView";
import weatherData from "../weatherData";

function WeeklyTile(props) {
    return (
        <div className="WeeklyTile">
            <p className="date">{props.item.text}</p>
            {/* <span className="weather">{props.item.weather} </span> */}
            <img src={props.item.weather} width="50" height="50" />
            <span> {props.item.temphigh} </span>
            <span className="templow"> {props.item.templow} </span>
        </div>
    )
}

export default WeeklyTile
