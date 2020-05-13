import React from 'react';
import {useEffect, useState} from 'react'
// import axios from 'axios';
import CommitsList from './components/CommitsList'
import getCommits from './helpers/githubGets'

function App() {

  const [commits, setCommits] = useState([])

  useEffect(() => {
    getCommits()
    .then(res => {
      console.log(res)
      setCommits(res)
    })
  }, [])
  return (
    <div className="App">
      <CommitsList commits={commits} />
    </div>
  );
}

export default App;