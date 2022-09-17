import React from 'react';

import './Display.css';

export default function Display({ catchphraseArray }) {
  return (
    <div className="display">
      <h1>{catchphraseArray}</h1>
    </div>
  );
}
