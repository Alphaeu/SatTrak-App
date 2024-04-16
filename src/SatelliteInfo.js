// SatelliteInfo.js
import React from 'react';

const SatelliteInfo = ({ satellite }) => {
  return (
    <div>
      <h2>Satellite Information</h2>
      <p>Name: {satellite.name}</p>
      <p>ID: {satellite.id}</p>
      {/* Add more parameters as needed */}
    </div>
  );
};

export default SatelliteInfo;
