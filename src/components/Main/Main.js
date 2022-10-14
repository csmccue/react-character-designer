import React from 'react';
import { useState } from 'react';

import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';

import './Main.css';

export default function Home() {
  const [top, setTop] = useState('black-cherry-blitz'); 
  const [mid, setMid] = useState('chips-and-salsa');
  const [bot, setBot] = useState('oldtimer-with-cheese');
  const [topCount, setTopCount] = useState(0); 
  const [midCount, setMidCount] = useState(0);
  const [botCount, setBotCount] = useState(0);
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArray, setCatchphraseArray] = useState([]);
  const [menuItemsArray, setMenuItemsArray] = useState([]);

  function addCatchphrase(catchphrase) {
    setCatchphraseArray(prevCatchphrase => [...prevCatchphrase, catchphrase]);
    setCatchphrase('');
  }
  function addMenuItems(top, mid, bot) {
    setMenuItemsArray(prevMenuItems => [...prevMenuItems, top, mid, bot]);
  }

  function incrementTop() {
    setTopCount((prevTopCount)=> prevTopCount + 1) ;
  }
  function incrementMid() {
    setMidCount((prevMidCount)=> prevMidCount + 1) ;
  }
  function incrementBot() {
    setBotCount((prevBotCount)=> prevBotCount + 1) ;
  }
  return (
    <main>
      <div className='chilis'>
        <h1>🌶️ Welcome To Chilis! 🌶️</h1>
        <h1>🌶️ Please Select Your 3 For Me Combo 🌶️</h1>
      </div>
      <container>
        <Character top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} />
        <Controls top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} incrementTop={incrementTop} incrementMid={incrementMid} incrementBot={incrementBot} />
        <Catchphrase addMenuItems={addMenuItems} top={top} mid={mid} bot={bot} menuItemsArray={menuItemsArray} setMenuItemsArray={setMenuItemsArray} catchphrase={catchphrase} setCatchphrase={setCatchphrase} addCatchphrase={addCatchphrase} />
        <Display menuItemsArray={menuItemsArray} setMenuItemsArray={setMenuItemsArray} catchphrase={catchphrase} catchphraseArray={catchphraseArray} />
        <div>
          <h1>{'You have your mind about your beverage ' + topCount + ' times'}</h1>
          <h1>{'You have your mind about your entree ' + midCount + ' times'}</h1>
          <h1>{'You have your mind about your dessert ' + botCount + ' times'}</h1>
        </div>
      </container>
    </main>
  );
}
