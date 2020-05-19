import React from 'react';
import {useEffect, useState} from 'react'
import CommitsList from './components/CommitsList'
import Repo from './components/Repo'
import {getCommits, getRepoCommits} from './helpers/githubGets'

require('dotenv').config();
const USER = process.env.REACT_APP_USER
function App() {

  const [commits, setCommits] = useState([])
  const [repoActivity, setRepoActivity] = useState([])
  // const [user, setUser] = useState('')

  useEffect(() => {
    const repo = 'code-tracker'
    getCommits(USER)
    .then(res => {
      setCommits(res)
    })
    getRepoCommits(USER, repo)
      .then((res) =>  {
        setRepoActivity(res)
      })
  }, [])
  
  return (
    <div className="App">
      <CommitsList commits={commits} />
      <Repo repo={repoActivity}/>
    </div>
  );
}

export default App;
