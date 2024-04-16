// App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SatelliteInfo from './SatelliteInfo';
import './App.css';

const App = () => {
  const [satelliteData, setSatelliteData] = useState(null);

  const searchSatellite = async (searchTerm) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/satellite?searchTerm=${searchTerm}`);
      setSatelliteData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <div>
      <h1>SatTrak - Satellite Tracking</h1>
      <SearchBar onSearch={searchSatellite} />
      {satelliteData && <SatelliteInfo satellite={satelliteData} />}
    </div>
  );
};

export default App;
