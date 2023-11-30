import React, { useState } from 'react'
import Card from './components/Card'
import List from './components/List'
import BitcoinBlockHeight from './components/BlockHeight';

const App = () => {
  const [musicNumber, setMusicNumber] = useState(0)
  const [open, setOpen] = useState(false)

  return (
    <div className='container'>
      <main>
      <BitcoinBlockHeight />
      <Card props={{musicNumber, setMusicNumber, setOpen}}/>
      <List props={{open, setOpen, musicNumber, setMusicNumber}}/> 
      </main>
    </div>
  )
}

export default App