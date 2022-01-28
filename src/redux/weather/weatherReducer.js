import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherSuccess = (weathers) => ({
  type: FETCH_WEATHER,
  payload: weathers,
});

export const fetchWeather = () => (dispatch) => {
  axios
    .get('http://api.openweathermap.org/data/2.5/air_pollution?lat=60&lon=70&appid=6ecf420a1bbd4a7b6cb83e24509c64c2')
    .then((response) => {
      console.log('weather API response is ', response.data);
      const weathers = response.data;
      dispatch(fetchWeatherSuccess(weathers));
    });
};

const initialState = {
  weather: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
