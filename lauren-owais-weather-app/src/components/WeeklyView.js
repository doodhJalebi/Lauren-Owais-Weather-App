import React from "react";
import WeeklyTile from "./WeeklyTile";
import weatherData from "../weatherData";
 
function WeeklyView() {
    const WeeklyOverview = weatherData.map(item => <WeeklyTile key={item.id} item={item}/>)
    return (
        <div>
            {WeeklyOverview}
        </div>
    );
}

export default WeeklyView;
