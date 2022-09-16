import React from 'react';
import './Catchphrase.css';



export default function Catchphrase({ catchphrase, setCatchphrase, addCatchphrase }) {

  
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input type="text" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
        <label htmlFor="catchphrase">Catchphrase</label>
        <button id="catchphrase-button" value={catchphrase} onClick={(e) => addCatchphrase(e.target.value)}>Add</button>
      </div>
    </div>
  );
}
