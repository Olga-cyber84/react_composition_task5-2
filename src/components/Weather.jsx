import React from 'react'
import HeaderLine from './HeaderLine';
import WeatherDescription from './WeatherDescription';

export default function Weather({weather}) {
    //отвечает за вывод информации о погоде по переданным в props данным
    //для заголовка используется компонент HeaderLine
    //для содержимого - WeatherDescription
    const source = {
        source: "/#",
        className: "weather"
    }
    
    return (
        <>
            <HeaderLine source={source}>Погода</HeaderLine>
            <WeatherDescription weather={weather} className={source.className}/>
        </>
    )
}
