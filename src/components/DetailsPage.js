import React from 'react';
import { PropTypes } from 'prop-types';

const DetailsPage = (props) => {
  const { coord, list } = props;

  const dateObject = new Date((list.map((listData) => listData?.dt)) * 1000);
  const humanDateFormat = dateObject.toLocaleString();

  return (
    <div>
      <div className="w-screen text-white items-center">
        <div className="flex flex-col items-end justify-center bg-[#5788e6] w-screen h-44 px-4">
          <h5 className="text-4xl font-bold">CURRENT</h5>
          <h5 className="text-4xl font-bold">COORDINATE</h5>
          <p className="text-lg font-light">
            Latitude:
            {coord.lat}
          </p>
          <p className="text-lg font-light">
            Longitude:
            {coord.lon}
          </p>
        </div>

        <div className="flex py-5 px-4 justify-between bg-[#4369b2]">
          <p>Date and time, Unix, UTC </p>
          <p>{humanDateFormat}</p>
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
};

DetailsPage.propTypes = {
  coord: PropTypes.instanceOf(Object),
  list: PropTypes.instanceOf(Array),
};

DetailsPage.defaultProps = {
  coord: {},
  list: [],
};

export default DetailsPage;
