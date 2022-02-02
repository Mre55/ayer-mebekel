import React from 'react';
import { PropTypes } from 'prop-types';
import DetailsPage from './DetailsPage';
import backIcon from '../images/backIcon.png';

const DetailComponenet = (props) => {
  const { seeMore, selectedCityData } = props;
  return (
    <div>
      <div className="flex items-center gap-14 bg-[#35538c] text-white px-3 ">
        <button className="w-10" onClick={() => seeMore()} type="button">
          <img src={backIcon} alt="back icon" />
        </button>
        <p className="text-sm text-white py-2 w-screen">
          DATA ABOUT POLLUTING GASES
        </p>
      </div>
      {selectedCityData?.coord && (
        <DetailsPage
          coord={selectedCityData.coord}
          list={selectedCityData.list}
        />
      )}
    </div>
  );
};

DetailComponenet.propTypes = {
  seeMore: PropTypes.func.isRequired,
  selectedCityData: PropTypes.instanceOf(Object).isRequired,
};

export default DetailComponenet;
