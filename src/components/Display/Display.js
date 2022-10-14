import React from 'react';
import './Display.css';

export default function Display({ catchphraseArray, menuItemsArray }) {
  const theRealArray = catchphraseArray.map((phrase, i) =>
    <h2 key={i}>Order Number {phrase} Items: {menuItemsArray[i]}, {menuItemsArray[i + 1]}, {menuItemsArray[i + 2]}</h2>
  );

  return (
    <div className="display">
      <div>{theRealArray}</div>
    </div>
  );
}