import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useRealtime } from '@space-kit/redis-realtime-react'
// import Header from './components/Header'
import SkedNavbar from './components/NavBar/NavBar'
import Job from './components/Job/Job'

function App() {
  const [jobName, setJobName] = useState("")

  // const {publisher, subscribe} = useRealtime()
  // const {setDb} = publisher('text')
  // const {data='', isLoadding} = subscribe('text')
  
  // const addJob = () => {

  // }

  const handleChange = (event) => {
    console.log(event.target.value)
    // setDb(event.target.value)
  }

  const handleSubmit = (event) => {
    console.log(event.target.value)
    setJobName(event.target.value)
  }

  return (
    <>

      {/* <button class="add-button">Add</button> */}
      <SkedNavbar />
      <Job />

      {/* <form id="job-form">
        <label htmlFor="name">Job Name</label>
        <input type="text" id="name" name="name" autoComplete="off" onChange={handleChange}/>
        <input type="submit" value="Submit" onSubmit={handleSubmit}/>
      </form> */}
    </>
  );
}

export default App;
