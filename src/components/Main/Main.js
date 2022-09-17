import React from 'react';
import { useState } from 'react';

import Character from '../Character/Character';
import Controls from '../Controls/Controls';
import Catchphrase from '../Catchphrase/Catchphrase';
import Display from '../Display/Display';

import './Main.css';

export default function Home() {
  const [top, setTop] = useState('duck'); 
  const [mid, setMid] = useState('blue');
  const [bot, setBot] = useState('leg');
  const [topCount, setTopCount] = useState(0); 
  const [midCount, setMidCount] = useState(0);
  const [botCount, setBotCount] = useState(0);
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArray, setCatchphraseArray] = useState([]);

  function addCatchphrase(catchphrase) {
    setCatchphraseArray(prevCatchphrase => [...prevCatchphrase, catchphrase]);
    setCatchphrase('');
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

      <Character top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} />
      <Controls top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} incrementTop={incrementTop} incrementMid={incrementMid} incrementBot={incrementBot} />
      <Catchphrase catchphrase={catchphrase} setCatchphrase={setCatchphrase} addCatchphrase={addCatchphrase} />
      <Display catchphrase={catchphrase} catchphraseArray={catchphraseArray} />
      <div>
        <h1>{'You have changed top ' + topCount + ' times'}</h1>
        <h1>{'You have changed mid ' + midCount + ' times'}</h1>
        <h1>{'You have changed bot ' + botCount + ' times'}</h1>
      </div>

    </main>
  );
}
