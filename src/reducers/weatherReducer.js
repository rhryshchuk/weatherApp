const initialState = {
  loading: false,
  weatherData: null,
  error: null
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_WEATHER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_WEATHER_SUCCESS':
      return {
        ...state,
        loading: false,
        weatherData: action.payload,
        error: null
      }
    case 'FETCH_WEATHER_FAILURE':
      return {
        ...state,
        loading: false,
        weatherData: null,
        error: action.payload
      }
    default:
      return state
  }
};

export default weatherReducer;
