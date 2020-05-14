import React from 'react';
import {useEffect, useState} from 'react'
import CommitsList from './components/CommitsList'
import {getCommits, getRepoCommits} from './helpers/githubGets'

require('dotenv').config();
const USER = process.env.REACT_APP_USER
function App() {

  const [commits, setCommits] = useState([])
  // const [user, setUser] = useState('')

  useEffect(() => {
    const repo = 'Light-Invite'
    getCommits(USER)
    .then(res => {
      setCommits(res)
    })
    getRepoCommits(USER, repo)
      .then((res) =>  {
        console.log(res)
      })
  }, [])
  return (
    <div className="App">
      <CommitsList commits={commits} />
    </div>
  );
}

export default App;
