import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [sunlight, setSunlight] = useState(0);
  const [orientation, setOrientation] = useState(0);

  // Fetch data from Flask backend
  const fetchSunlightData = () => {
    axios.get('http://localhost:5000/get-sunlight')
      .then(response => {
        setSunlight(response.data.sunlight_intensity);
        setOrientation(response.data.panel_orientation);
      })
      .catch(error => {
        console.error("There was an error fetching the sunlight data!", error);
      });
  };

  useEffect(() => {
    const interval = setInterval(fetchSunlightData, 3000); // Fetch data every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="App">
      <h1>Dual-Axis Solar Mounting Panel Simulation</h1>
      <div className="dashboard">
        <h3>Sunlight Intensity: {sunlight.toFixed(2)}%</h3>
        <h3>Panel Orientation: {orientation.toFixed(2)}°</h3>

        <div className="simulation">
          <h4>Panel Orientation Simulation:</h4>
          <div
            className="panel"
            style={{ transform: `rotate(${orientation}deg)` }}
          >
            🌞
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
