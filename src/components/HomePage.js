import React, { useEffect, useState } from "react";

import { fetchWeatherWithoutDispatch } from "../redux/weather/weatherReducer";
import { useDispatch, useSelector } from "react-redux";

import DetailsPage from "./DetailsPage";
import Form from "./Form";
import CurrentPollutionData from "./CurrentPollutionData";
import store from "../redux/configureStore";
import { fetchWeatherDispatch } from "../redux/weather/weatherReducer";
import backIcon from "../images/backIcon.png";

const HomePage = () => {
  const dispatch = useDispatch();

  const fetchDataByInput = async (lat, long) => {
    dispatch(fetchWeatherWithoutDispatch(lat, long));
  };

  const [detailPage, setDetailPage] = useState(false);

  useEffect(() => {
    if (Object.keys(store.getState().weatherReducer).length === 0) {
      dispatch(fetchWeatherDispatch());
    }
  }, []);

  const seeMore = (city) => {
    if (city === "Addis Ababa") {
      dispatch(fetchWeatherWithoutDispatch(4, 5));
    } else if (city === "Hawassa") {
      dispatch(fetchWeatherWithoutDispatch(8, 37));
    } else if (city === "Hossana") {
      dispatch(fetchWeatherWithoutDispatch(22, 44));
    } else if (city === "London") {
      dispatch(fetchWeatherWithoutDispatch(17, 9));
    }
    setDetailPage(!detailPage);
  };

  const weatherReducer = useSelector((state) => state.weatherReducer);

  const { coord = {}, list = [] } = weatherReducer;

  return (
    <div>
      <div className={`${detailPage ? "hidden" : ""}`}>
        <Form seeMore={seeMore} fetchDataByInput={fetchDataByInput} />

        <div className={`${detailPage ? "hidden" : ""}`}>
          <CurrentPollutionData
            seeMore={seeMore}
          />
        </div>
      </div>
      <div className={`${detailPage ? "" : "hidden"}`}>
        <div className="flex items-center gap-14 bg-[#35538c] text-white px-3 ">
          <button className="w-10" onClick={() => seeMore()} type="button">
            <img src={backIcon} alt="back icon" />
          </button>
          <p className="text-sm text-white py-2 w-screen">
            DATA ABOUT POLLUTING GASES
          </p>
        </div>
        {weatherReducer && <DetailsPage coord={coord} list={list} />}
      </div>
    </div>
  );
};

export default HomePage;
