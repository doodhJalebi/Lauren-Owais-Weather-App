import React from "react";
import WeeklyView from "./WeeklyView";
import weatherData from "../weatherData";
import styles from "./weeklyTile.module.css"; 

function WeeklyTile(props) {
    return (
        <div className={styles.weeklyTileContainer} style={{backgroundColor: props.item.background}}>
            <h4 className={styles.date}>{props.item.text}</h4>
            {/* <span className="weather">{props.item.weather} </span> */}
            <img src={props.item.weather} className={styles.weatherImage} />
            <span className={styles.tempText}>
                <p> {props.item.temphigh} </p>
                <p className={styles.templow}> {props.item.templow} </p>
            </span>
        </div>
    )
}

export default WeeklyTile
