import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeatherDispatch } from '../redux/weather/weatherReducer';
import { fetchWeatherWithoutDispatch } from "../redux/weather/weatherReducer";
import store from '../redux/configureStore';

function DetailsPage(props) {

  const { coord, list } = props;
  
  // console.log('coord in the details page is ', coord)
  // console.log('list in the details page is ', list)
  // const weatherReducer = useSelector((state) => state.weatherReducer);
  
  // const dispatch = useDispatch();
  
  // const { coord = {}, list = [] } = weatherReducer;

  // useEffect(() => {
  //   if (Object.keys(store.getState().weatherReducer).length === 0) {
  //     dispatch(fetchWeatherWithoutDispatch(coord.lon, coord.lat));
  //   }
  // }, []);

  // const dataFromApi = dispatch(fetchWeatherWithoutDispatch(coord.lon, coord.lat));
      
  // console.log('incoming weatherReducer in detail page ', weatherReducer)


  return (
    <div>
      <div className="w-screen text-white items-center">

        <div className="flex flex-col items-end justify-center bg-[#5788e6] w-screen h-44 px-4">
          <h5 className="text-4xl font-bold">CURRENT</h5>
          <h5 className="text-4xl font-bold">COORDINATE</h5>
          <p className="text-lg font-light">
            Longitude:
            {coord.lon}
          </p>
          <p className="text-lg font-light">
            Latitude:
            {coord.lat}
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>Date and time, Unix, UTC </p>
          <p>{list.map((listData) => listData?.dt)}</p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#5788e6]">
          <p> Air Quality Index</p>
          <p>{list.map((listData) => listData.main?.aqi)}</p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>CO(Carbon monoxide)</p>
          <p>
            {list.map((listData) => listData.components?.co)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#5788e6]">
          <p>NO(Nitrogen monoxide)</p>
          <p>
            {list.map((listData) => listData.components?.no)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>NO2(Nitrogen dioxide)</p>
          <p>
            {list.map((listData) => listData.components?.no2)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#5788e6]">
          <p>O3(Ozone)</p>
          <p>
            {list.map((listData) => listData.components?.o3)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>SO2(Sulphur dioxide)</p>
          <p>
            {list.map((listData) => listData.components?.so2)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#5788e6]">
          <p>PM2.5(Fine particles matter)</p>
          <p>
            {list.map((listData) => listData.components?.pm2_5)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>PM10(Coarse particulate matter)</p>
          <p>
            {list.map((listData) => listData.components?.pm10)}
            {' '}
            μg/m3
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#5788e6]">
          <p>NH3(Ammonia)</p>
          <p>
            {list.map((listData) => listData.components?.nh3)}
            {' '}
            μg/m3
          </p>
        </div>
      </div>
    </div>
  );
}

// DetailsPage.propTypes = {
//   coord: PropTypes.instanceOf(Object).isRequired,
//   list: PropTypes.instanceOf(Array).isRequired,
// };

export default DetailsPage;
