require('dotenv').config()

const axios = require('axios')

const URL = 'https://api.github.com'

const getCommits = async () => {
  try {
    const response = await axios.get(`${URL}/users/${process.env.USERNAME}/events`)
    
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

getCommits()
  .then(res => console.log(res))
