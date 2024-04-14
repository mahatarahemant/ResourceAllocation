import '../style.css'
import React, { useState } from 'react';


export default function Left({ onCheckboxChange }) {
  const [showMarker, setShowMarker] = useState(false);

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setShowMarker(isChecked);
    onCheckboxChange(isChecked);
  };

  return (
    <div className="left">
      <div className="order">
        <div className="layer">
          Layer Order
        </div>
        <div className="search">
          <button>I'm a button</button>
        </div>
      </div>
      <label>
        <input
          type="checkbox"
          checked={showMarker}
          onChange={handleCheckboxChange}
        />
        Show Marker
      </label>
      
    </div>
  )
}
