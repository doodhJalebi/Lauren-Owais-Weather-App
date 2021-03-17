import React from "react";
import WeeklyTile from "./WeeklyTile";
import weatherData from "../weatherData";
import styles from "./weeklyView.module.css"; 

function WeeklyView() {
    const WeeklyOverview = weatherData.map(item => <WeeklyTile key={item.id} item={item}/>)
    return (
        <div className={styles.weeklyViewContainer}>
            {WeeklyOverview}
        </div>
    );
}

export default WeeklyView;
