import React from 'react';
import weatherData from '../weatherData';
import styles from "./dailyView.module.css";

function DailyView() {
    return (
        <div id="container">
            <div id="city-name-box">
                <span className={styles.cityNameText}>Karachi</span>
            </div>
            <div id="forecast-text-box">
                <span className={styles.forecastText}>Cloudy</span>
            </div>
            <div className={styles.forecastContainer}>
                <div>
                    <img src={weatherData[0].weather} alt="weather icon" className={styles.weatherImage}/>
                </div>
                <div>
                    <span className={styles.temperatureText}>26º</span>
                </div>
            </div>
        </div>
    )
}

export default DailyView
