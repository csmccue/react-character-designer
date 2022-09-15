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
  const [catchphrase, setCatchphrase] = useState('');

  return (
    <main>
      <Character top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} />
      <Controls top={top} setTop={setTop} mid={mid} setMid={setMid} bot={bot} setBot={setBot} />
      <Catchphrase catchphrase={catchphrase} setCatchphrase={setCatchphrase} />
      <Display catchphrase={catchphrase} setCatchphrase={setCatchphrase} />
    </main>
  );
}
