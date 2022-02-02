import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherWithInput, fetchWeather } from '../redux/weather/weatherReducer';

import DetailsPage from './DetailsPage';
import Form from './Form';
import CurrentPollutionData from './CurrentPollutionData';
import store from '../redux/configureStore';
import backIcon from '../images/backIcon.png';

const HomePage = () => {
  const dispatch = useDispatch();

  const [detailPage, setDetailPage] = useState(false);

  useEffect(() => {
    if (Object.keys(store.getState().weatherReducer).length === 0) {
      dispatch(fetchWeather());
    }
  }, []);

  const seeMore = (city) => {
    if (city === 'Ethiopia') {
      dispatch(fetchWeatherWithInput(42, 53));
    } else if (city === 'Brazil') {
      dispatch(fetchWeatherWithInput(8, 37));
    } else if (city === 'USA') {
      dispatch(fetchWeatherWithInput(22, 44));
    } else if (city === 'Canada') {
      dispatch(fetchWeatherWithInput(7, 39));
    }
    setDetailPage(!detailPage);
  };

  const weatherReducer = useSelector((state) => state.weatherReducer);

  const { coord = {}, list = [] } = weatherReducer;

  return (
    <div>
      <div className={`${detailPage ? 'hidden' : ''}`}>
        <Form seeMore={seeMore} />

        <div className={`${detailPage ? 'hidden' : ''}`}>
          <CurrentPollutionData
            seeMore={seeMore}
          />
        </div>
      </div>
      <div className={`${detailPage ? '' : 'hidden'}`}>
        <div className="flex items-center gap-14 bg-[#35538c] text-white px-3 ">
          <button className="w-10" onClick={() => seeMore()} type="button">
            <img src={backIcon} alt="back icon" />
          </button>
          <p className="text-sm text-white py-2 w-screen">
            DATA ABOUT POLLUTING GASES
          </p>
        </div>
        {weatherReducer?.coord && (<DetailsPage coord={coord} list={list} />)}
      </div>
    </div>
  );
};

export default HomePage;
