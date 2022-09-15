import React from 'react';

import './Character.css';

export default function Character({ top, mid, bot }) {
  console.log(mid);
  return (
    <>
      <div className="character">
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${top}-head.png`} />
        </h1>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${mid}-middle.png`} />
        </h1>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${bot}-pants.png`} />
        </h1>
      </div>  
    </>
  );

}