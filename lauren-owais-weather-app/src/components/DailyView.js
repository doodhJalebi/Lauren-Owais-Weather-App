import React from 'react';
import weatherData from '../weatherData';
import rain from "../assets/images/002-rain.png";
import storm from "../assets/images/005-storm.png";
import windy1 from "../assets/images/007-windy.png";
import clouds from "../assets/images/021-clouds.png";
import windy2 from "../assets/images/029-windy.png";
import hail from "../assets/images/030-hail.png";
import styles from "./dailyView.module.css";

function DailyView() {
    return (
        <div id="container">
            <div id="city-name-box">
                <span className={styles.cityNameText}>Manila</span>
            </div>
            <div id="forecast-text-box">
                <span className={styles.forecastText}>Cloudy</span>
            </div>
            <div className={styles.forecastContainer}>
                <div>
                    <img src={clouds} alt="weather icon" className={styles.weatherImage}/>
                </div>
                <div>
                    <span className={styles.temperatureText}>26º</span>
                </div>
            </div>
        </div>
    )
}

export default DailyView
