import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
  // fetchWeather,
  fetchWeatherWithoutDispatch,
} from '../redux/weather/weatherReducer';
// import store from '../redux/configureStore';
import DetailsPage from './DetailsPage';

function HomePage() {
  // const weatherFromStore = useSelector((state) => state.weatherReducer);

  // const dispatch = useDispatch();

  const [firstPageData, setFirstPageData] = useState();

  const fetchNewData = async (lat, long) => {
    const withoutDi = await fetchWeatherWithoutDispatch(lat, long);
    console.log('without D ', withoutDi);
    setFirstPageData(withoutDi);
  };

  useEffect(async () => {
    await fetchNewData(50, 50);
    // if (!Object.keys(store.getState().weatherReducer).length) {
    //   // dispatch(fetchWeather(8.9806, 38.7578));
    // }
  }, []);

  // const { coord = {}, list = [] } = weatherFromStore;


  return (
    <div>
      <div>Hello this is the home page.</div>
      <button className="border border-y-neutral-300" onClick={async () => await fetchNewData(8, 37)}>
        User entered a new values to
        {' '}
        {firstPageData?.coord?.lat}
        {' '}
        and
        {' '}
        {firstPageData?.coord?.lon}
      </button>
      {/* <DetailsPage coord={coord} list={list} /> */}
      {firstPageData?.coord && (
        <DetailsPage coord={firstPageData.coord} list={firstPageData.list} />
      )}
      <br />
    </div>
  );
}

export default HomePage;
