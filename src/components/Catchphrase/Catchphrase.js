import React from 'react';
import './Catchphrase.css';



export default function Catchphrase({ catchphrase, setCatchphrase }) {

  
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input type="text" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
        <label htmlFor="catchphrase">Catchphrase</label>
      </div>
    </div>
  );
}
