import React from 'react';

function InitialData(props) {
  const {
    seeMore,
    firstPageData,
    secondPageData,
    thirdPageData,
    fourthPageData,
  } = props;

  return (
    <div>
      <div className="border-solid border-2 border-sky-500">
        <h4>Addis Ababa</h4>
        <p>
          {' '}
          Air Quality:
          {firstPageData?.coord
            && firstPageData.list.map((listData) => listData.main?.aqi)}
        </p>

        <button
          className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
          onClick={() => seeMore('Addis Ababa')}
          type="button"
        >
          Detail
        </button>
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>Hawassa</h4>
        <p>
          {' '}
          Air Quality:
          {secondPageData?.coord
            && secondPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button
          className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
          onClick={() => seeMore('Hawassa')}
          type="button"
        >
          Detail
        </button>
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>Hossana</h4>
        <p>
          {' '}
          Air Quality:
          {thirdPageData
            && thirdPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button
          className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
          onClick={() => seeMore('Hossana')}
          type="button"
        >
          Detail
        </button>
      </div>
      <div className="border-solid border-2 border-sky-500">
        <h4>London</h4>
        <p>
          {' '}
          Air Quality:
          {fourthPageData?.coord
            && fourthPageData.list.map((listData) => listData.main?.aqi)}
        </p>
        <button
          className="bg-blue-600 text-white p-2 w-40 text-lg  rounded"
          onClick={() => seeMore('London')}
          type="button"
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default InitialData;
