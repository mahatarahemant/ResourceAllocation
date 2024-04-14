import './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Left from './Components/left/Left';
import Map from './Components/Map/Map';

export default function MyApp() {
  const [showMarker, setShowMarker] = useState(false);

  const handleCheckboxChange = (isChecked) => {
    setShowMarker(isChecked);
  };

  return (
    <>
      <div className="main">
        <Header />
      </div>
      <div className="body">
        <div className="left">
        <Left onCheckboxChange={handleCheckboxChange} />
        </div>
        <div className="right"> <Map showMarker={showMarker} /> </div>
      </div>

    </>
  );
}
