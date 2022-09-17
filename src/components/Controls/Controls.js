import React from 'react';
import './Controls.css';



export default function Controls({ top, setTop, mid, setMid, bot, setBot, incrementTop, incrementMid, incrementBot }) {  
  return (
    <div className="controls">
      <div className="form-control">
        <select value={top} onChange={(e) => {
          setTop(e.target.value); 
          incrementTop();}}>
          <option value="black-cherry-blitz">Black Cherry Blitz</option>
          <option value="premium-long-island-ice-tea">Premium Long Island Ice Tea</option>
          <option value="patron-marg">Patron Margerita</option>
          <option value="titos-bloody-mary">Titos Bloody Mary</option>
          <option value="tropical-sunrise-marg">Tropical Sunrise Margerita</option>
        </select>
        <select value={mid} onChange={(e) => {
          setMid(e.target.value);
          incrementMid();}}>
          <option value="bone-in-chicken-wings">Bone-in Chicken Wings</option>
          <option value="boneless-chicken-wings">Boneless Chicken Wings</option>
          <option value="chips-and-salsa">Chips and Salsa</option>
          <option value="classic-nachos">Classic Nachos</option>

          <option value="fried-pickles">Fried Pickles</option>
          <option value="southwestern-eggrolls">Southwestern Eggrolls</option>
          <option value="texas-fries">Texas Fries</option>
          <option value="triple-dipper">Triple Dipper</option>

        </select>
        <select value={bot} onChange={(e) => {
          setBot(e.target.value);
          incrementBot();}}>
          <option value="brisket-quesadilla">Brisket Quesadilla</option>
          <option value="cajun-chicken-pasta">Cajun Chicken Pasta</option>
          <option value="big-mouth-crispy-chicken">Big Mouth Crispy Chicken</option>
          <option value="buffalo-chicken-ranch-sandwich">Buffalo Chicken Ranch Sandwich</option>
          <option value="chicken-bacon-ranch">Chicken Bacon Ranch</option>
          <option value="chicken-crispers">Chicken Crispers</option>

          <option value="cilantro-lime-carne-asada">Cilantro Lime Carne Asada</option>
          <option value="classic-6oz-sirloin">Classic 6oz Sirloin</option>
          <option value="individual-chicken-fajitas">Individual Chicken Fajitas</option>

          <option value="oldtimer-with-cheese">Oldimer with Cheese</option>
          <option value="classic-6oz-sirloin">Classic 6oz Sirloin</option>
        </select>
      </div>
    </div>
  );
}
