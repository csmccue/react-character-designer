import React from 'react';
import './Controls.css';



export default function Controls({ top, setTop, mid, setMid, bot, setBot, incrementTop, incrementMid, incrementBot }) {  
  return (
    <div className="controls">
      <div className="form-control">
        <select value={top} onChange={(e) => {
          setTop(e.target.value); 
          incrementTop();}}>
          <option value="duck">Duck</option>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
        </select>
        <select value={mid} onChange={(e) => {
          setMid(e.target.value);
          incrementMid();}}>
          <option value="blue">Blue</option>
          <option value="dress">Fancy</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
        <select value={bot} onChange={(e) => {
          setBot(e.target.value);
          incrementBot();}}>
          <option value="leg">Leg</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
  );
}
