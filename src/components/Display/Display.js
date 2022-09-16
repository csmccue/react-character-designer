import React from 'react';

import './Display.css';

export default function Display({ catchphrase, catchphraseArray }) {
  return (
    <div className="display">
      <h1>{catchphrase}</h1>
      <h1>{catchphraseArray}</h1>
    </div>
  );
}
