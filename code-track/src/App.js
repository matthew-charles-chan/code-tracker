import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';
import CommitsList from './components/CommitsList'
require('dotenv').config()


const URL = 'https://api.github.com'

async function getCommits() {
  try {
    const response = await axios.get(`${URL}/users/matthew-charles-chan/events`)
    return response.data.filter(event => { 
      return event.type === 'PushEvent'
    }).map((commit) => {
      return {
        date: commit.created_at,
        repo: commit.repo.name,
        message: commit.payload.commits[0].message
      }
    })
  } catch(err) {
    console.log(err)
  }
}



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
      hello
      <CommitsList commits={commits} />
    </div>
  );
}

export default App;
