const axios = require('axios')
const URL = 'https://api.github.com'

export default async function getCommits() {
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