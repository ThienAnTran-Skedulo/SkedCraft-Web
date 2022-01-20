import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useRealtime } from '@space-kit/redis-realtime-react'
import SkedNavbar from './components/NavBar/NavBar'
import Job from './components/Job/Job'

function App() {
  // const {publisher, subscribe} = useRealtime()
  // const {setDb} = publisher('text')
  // const {data='', isLoadding} = subscribe('text')

  return (
    <>
      <SkedNavbar />
      <Job />
    </>
  );
}

export default App;
