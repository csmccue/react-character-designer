import React from 'react';
import './Display.css';

export default function Display({ catchphraseArray, menuItemsArray, i }) {
  const theRealArray = catchphraseArray.map((phrase) =>
    <h2 key={i}>{phrase}</h2>
  );
  const theRealMenuArray = menuItemsArray.map((phrase, i) =>
    <li key={i}>{phrase}</li>
  );
  console.log(theRealArray, theRealMenuArray);
  return (
    <div className="display">
      <div>{theRealArray}</div>
      <ul>{theRealMenuArray}</ul>
    </div>
  );
}