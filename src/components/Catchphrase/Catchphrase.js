import React from 'react';
import './Catchphrase.css';



export default function Catchphrase({ catchphrase, setCatchphrase, addCatchphrase, addMenuItems, top, mid, bot }) {

  
  return (
    <div className="catchphrase">
      <div className="form-control">
        <input type="text" value={catchphrase} placeholder = "Order Number" onChange={(e) => setCatchphrase(e.target.value)} />
        <label htmlFor="catchphrase"></label>
        <button id="catchphrase-button" value={catchphrase} onClick={(e) => {
          addCatchphrase(e.target.value);
          addMenuItems(top, mid, bot);
        }}>Submit Order</button>
      </div>
    </div>
  );
}
