import axios from 'axios';

const _api_key = 'b07166abb91a702d34cd551d93d20796';

export const fetchWeatherRequest = () => {
  return {
    type: 'FETCH_WEATHER_REQUEST'
  }
};

export const fetchWeatherSuccess = (weatherData) => {
  return {
    type: 'FETCH_WEATHER_SUCCESS',
    payload: weatherData
  }
};

export const fetchWeatherFailure = (error) => {
  return {
    type: 'FETCH_WEATHER_FAILURE',
    payload: error
  }
};

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest())
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${_api_key}`)
      .then(response => {
        const weatherData = response.data
        dispatch(fetchWeatherSuccess(weatherData))
      })
      .catch(error => {
        dispatch(fetchWeatherFailure(error.message))
      })
  }
};
