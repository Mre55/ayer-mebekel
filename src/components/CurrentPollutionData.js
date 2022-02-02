import React from 'react';
import { PropTypes } from 'prop-types';
import detailIcon from '../images/detailIcon.png';

const CurrentPollutionData = (props) => {
  const {
    seeMore,
    firstPageData,
    secondPageData,
    thirdPageData,
    fourthPageData,
  } = props;

  return (
    <div className="w-screen">
      <h2 className="bg-[#35538c] text-sm text-white md:text-center pl-4 py-1">
        CURRENT AIR POLLUTION DATA
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Addis Ababa')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">ADDIS ABABA</h4>
            <p>
              {' '}
              Air Quality:
              {firstPageData?.coord
                && firstPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Hawassa')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">HAWASSA</h4>
            <p>
              {' '}
              Air Quality:
              {secondPageData?.coord
                && secondPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Hossana')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className="text-lg font-bold font-bold">HOSSANA</h4>
            <p>
              {' '}
              Air Quality:
              {thirdPageData?.coord
                && thirdPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('London')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">LONDON</h4>
            <p>
              {' '}
              Air Quality:
              {fourthPageData?.coord
                && fourthPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Addis Ababa')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">ADDIS ABABA</h4>
            <p>
              {' '}
              Air Quality:
              {firstPageData?.coord
                && firstPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Hawassa')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">HAWASSA</h4>
            <p>
              {' '}
              Air Quality:
              {secondPageData?.coord
                && secondPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('Hossana')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">HOSSANA</h4>
            <p>
              {' '}
              Air Quality:
              {thirdPageData?.coord
                && thirdPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => seeMore('London')}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">LONDON</h4>
            <p>
              {' '}
              Air Quality:
              {fourthPageData?.coord
                && fourthPageData.list.map((listData) => listData.main?.aqi)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CurrentPollutionData.propTypes = {
  seeMore: PropTypes.func.isRequired,
  firstPageData: PropTypes.instanceOf(Object).isRequired,
  secondPageData: PropTypes.instanceOf(Object).isRequired,
  thirdPageData: PropTypes.instanceOf(Object).isRequired,
  fourthPageData: PropTypes.instanceOf(Object).isRequired,
};

export default CurrentPollutionData;
