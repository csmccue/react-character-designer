import React from 'react';
import './Display.css';

export default function Display({ catchphraseArray, menuItemsArray }) {
  const theRealArray = catchphraseArray.map((phrase, i) =>
    <h2 key={i}>Order Number {phrase} Items: {menuItemsArray[3 * i]}, {menuItemsArray[(3 * i) + 1]}, {menuItemsArray[(3 * i) + 2]}</h2>
  );
  console.log(menuItemsArray);
  console.log(theRealArray);
  return (
    <div className="display">
      <div>{theRealArray}</div>
    </div>
  );
}