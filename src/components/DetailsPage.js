import React from 'react';

function DetailsPage(props) {
  const { coord, list } = props;

  return (
    <div>
      Hello this is details page.
      <div className="pl-5">
        <div>Hello this is the home page.</div>
        <br />
        <div>
          <h3>Here are the datas: </h3>
          <br />
          <h5>Coordinates from the specified location </h5>
          <p>
            Longitude:
            {coord.lon}
          </p>
          <p>
            Longitude:
            {coord.lat}
          </p>
          <br />
          <h5>Date and time, Unix, UTC</h5>
          <p>
            Date and time is :
            {list.map((listData) => listData?.dt)}
          </p>
          <br />
          <h5> Air Quality Index.</h5>
          <p>
            Air Quality Index is:
            {list.map((listData) => listData.main?.aqi)}
          </p>
          <br />
          <h5>Data polluting gases concentration of:</h5>
          <p>
            CO(Carbon monoxide):
            {list.map((listData) => listData.components?.co)}
            μg/m3
          </p>
          <p>
            NO(Nitrogen monoxide):
            {list.map((listData) => listData.components?.no)}
            μg/m3
          </p>
          <p>
            NO2(Nitrogen dioxide):
            {list.map((listData) => listData.components?.no2)}
            μg/m3
          </p>
          <p>
            O3(Ozone):
            {list.map((listData) => listData.components?.o3)}
            μg/m3
          </p>
          <p>
            SO2(Sulphur dioxide):
            {list.map((listData) => listData.components?.so2)}
            μg/m3
          </p>
          <p>
            PM2.5(Fine particles matter):
            {list.map((listData) => listData.components?.pm2_5)}
            μg/m3
          </p>
          <p>
            PM10(Coarse particulate matter):
            {list.map((listData) => listData.components?.pm10)}
            μg/m3
          </p>
          <p>
            NH3(Ammonia):
            {list.map((listData) => listData.components?.nh3)}
            μg/m3
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
