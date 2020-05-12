require('dotenv').config()

const axios = require('axios')
// const GitHub = require('github-api')
// const gh = new GitHub({
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   token: process.env.TOKEN
// })



const URL = 'https://api.github.com'


// const getRepoNames = async () => {
//   const response = await user.listRepos()
//   return response.data.map((repo) => {
//     return repo.name
//   })
// }

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
