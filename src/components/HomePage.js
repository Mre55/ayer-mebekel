import React from 'react';

function HomePage() {
  
  const initialState = {
    coord: {
      lon: 50,
      lat: 50,
    },
    list: [
      {
        main: {
          aqi: 1,
        },
        components: {
          co: 277.04,
          no: 0,
          no2: 0.38,
          o3: 77.96,
          so2: 0.95,
          pm2_5: 1.57,
          pm10: 1.62,
          nh3: 0.09,
        },
        dt: 1643400000,
      },
    ],
  };

  const dataKeys = Object.keys(initialState);
  const coord = initialState[dataKeys[0]];
  const list = initialState[dataKeys[1]][0];

  return (
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
          {list.dt}
        </p>
        <br />
        <h5> Air Quality Index.</h5>
        <p>
          Air Quality Index is:
          {list.main.aqi}
        </p>
        <br />
        <h5>Data polluting gases concentration of:</h5>
        <p>
          CO(Carbon monoxide):
          {list.components.co}
          μg/m3
        </p>
        <p>
          NO(Nitrogen monoxide):
          {list.components.no}
          μg/m3
        </p>
        <p>
          NO2(Nitrogen dioxide):
          {list.components.no2}
          μg/m3
        </p>
        <p>
          O3(Ozone):
          {list.components.o3}
          μg/m3
        </p>
        <p>
          SO2(Sulphur dioxide):
          {list.components.so2}
          μg/m3
        </p>
        <p>
          PM2.5(Fine particles matter):
          {list.components.pm2_5}
          μg/m3
        </p>
        <p>
          PM10(Coarse particulate matter):
          {list.components.pm10}
          μg/m3
        </p>
        <p>
          NH3(Ammonia):
          {list.components.nh3}
          μg/m3
        </p>
      </div>
    </div>
  );
}

export default HomePage;
