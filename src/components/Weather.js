import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../actions/weatherActions';
import '../style.css';

const Weather = ({ city }) => {
    const dispatch = useDispatch();
    const weatherData = useSelector(state => state.weatherData);
    const error = useSelector(state => state.error);
    const loading = useSelector(state => state.loading);
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    useEffect(() => {
        dispatch(fetchWeather(city))
    }, [dispatch, city]);

    if (loading) {
        return <div className='text'>Loading...</div>
    };

    if (error) {
        return <div className='text'> Enter the correct city</div>
    };
    

    return (
        <div>
            {weatherData && (
                <div className='d-flex'>
                    <div className='first-weather-info'>
                        <p className='temp'>{(weatherData.main.temp - 273.15).toFixed(0)}°C</p>
                        <p className='day'>Today</p>
                        <p className='time-city'>Time:{hours}:{minutes}:{seconds}</p>
                        <h2 className='time-city'>{weatherData.name}, {weatherData.sys.country}</h2>
                    </div>
                    <div className='second-weather-info'>
                        <p className='wether-info'><img className='icons' src='/icons/temp.png' alt='' /><span className='item'>Temperature:</span> <span className='item-results'>{(weatherData.main.temp - 273.15).toFixed(2)}°C</span> </p>
                        <p className='wether-info'><img className='icons' src='/icons/feels-like.png' alt='' /><span className='item'>Feels like:</span> <span className='item-results'>{(weatherData.main.feels_like - 273.15).toFixed(2)}°C</span> </p>
                        <p className='wether-info'><img className='icons' src='/icons/humidity.png' alt='' /><span className='item'>Humidity:</span> <span className='item-results'>{weatherData.main.humidity}%</span> </p>
                        <p className='wether-info'><img className='icons' src='/icons/wind.png' alt='' /><span className='item'>Wind:</span> <span className='item-results'>{weatherData.wind.speed} m/s</span> </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
