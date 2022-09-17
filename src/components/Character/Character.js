import React from 'react';

import './Character.css';

export default function Character({ top, mid, bot }) {
  return (
    <>
      <div className="character">
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${top}-bev.png`} />
        </h1>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${mid}-app.png`} />
        </h1>
        <h1>
          <img src={`${process.env.PUBLIC_URL}/characters/${bot}-entree.png`} />
        </h1>
      </div>  
    </>
  );

}