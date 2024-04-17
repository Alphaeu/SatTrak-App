// App.js
import React, { useState, useDebugValue } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SatelliteInfo from './SatelliteInfo';
import './App.css';
import React from 'react';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/satellite');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>SatTrak App</h1>
      <p>{data ? data.message : 'Loading...'}</p>
      {/* Render more UI elements based on backend data */}
    </div>
  );
};
const Header = () => {
  return (
    <header>
      <div className="logo">SatTrak Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#tracking">Satellite Tracking</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default App;