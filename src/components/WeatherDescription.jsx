import React from 'react';
import logo from '.././logo.svg';

export default function WeatherDescription({weather, className}) {
    //отвечает за вывод описания погоды
    return (
        <div className={`${className}-description`}>
            <div><img src={logo} alt="погода" width="20px"/></div>
            <div>{weather.temp_now}</div>
            <div>{weather.day_temp}</div>  
        </div>
    )
}
