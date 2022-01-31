// import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeatherSuccess = (payload) => ({
  type: FETCH_WEATHER,
  payload,
});

// export const fetchWeather = (lat, lon) => (dispatch) => {
//   axios
//     .get(
//       `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=6ecf420a1bbd4a7b6cb83e24509c64c2`,
//     )
//     .then((response) => {
//       const weathers = response.data;
//       console.log('weathers ', weathers);
//       dispatch(fetchWeatherSuccess(weathers));
//     });
// };

export const fetchWeatherWithoutDispatch = async (lat, lon) => {
  const data = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=120c2559b5a8678ebed46cf9ff276f28`,
    {
      method: 'GET',
    },
  );
  try {
    return await data.json();
  } catch (error) {
    console.error(error);
  }
};

const weatherReducer = (state = [], action) => {
  console.log('action.payload ', action.payload);
  console.log('state ', state);

  switch (action.type) {
    case FETCH_WEATHER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default weatherReducer;
