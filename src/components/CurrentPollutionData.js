import React from 'react';

import { useNavigate } from 'react-router-dom';
import detailIcon from '../images/detailIcon.png';

const CurrentPollutionData = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen">
      <h2 className="bg-[#35538c] text-sm text-white md:text-center pl-4 py-1">
        CURRENT AIR POLLUTION DATA BY COUNTRY
      </h2>
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Ethiopia');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">ETHIOPIA</h4>
            <p>
              {' '}
              Air Quality:
              {2}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Brazil');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">BRAZIL</h4>
            <p>
              {' '}
              Air Quality:
              {4}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/USA');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className="text-lg font-bold font-bold">USA</h4>
            <p>
              {' '}
              Air Quality:
              {5}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Canada');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">CANADA</h4>
            <p>
              {' '}
              Air Quality:
              {3}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex flex-col items-end bg-[#4269b0] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Ethiopia');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">ETHIOPIA</h4>
            <p>
              {' '}
              Air Quality:
              {2}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end bg-[#3d60a3] h-44 gap-8 p-4">
          <button
            className="w-7"
            onClick={() => {
              navigate('/country/Canada');
            }}
            type="button"
          >
            <img src={detailIcon} alt="detail" />
          </button>
          <div className="text-white flex flex-col items-end">
            <h4 className=" text-lg font-bold font-bold">CANADA</h4>
            <p>
              {' '}
              Air Quality:
              {4}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CurrentPollutionData;
