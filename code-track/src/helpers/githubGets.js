const axios = require('axios')
const URL = 'https://api.github.com'

const getCommits = async (user) => {
  try {
    const {data} = await axios.get(`${URL}/users/${user}/events`);
    return data.filter(event => { 
      return event.type === 'PushEvent'
    }).map((commit) => {
      return {
        date: new Date(commit.created_at),
        repo: commit.repo.name,
        message: commit.payload.commits[0].message
      }
    })
  } catch(err) {
    console.log(err)
  }
}

const addUTCDays = (unixDate, days) => {
  const date = (new Date(unixDate * 1000))
  date.setDate(date.getUTCDate() + days)
  return date
}

const getRepoCommits = async (user, repo) => {
  try {
    const {data} = await axios.get(`${URL}/repos/${user}/${repo}/stats/commit_activity`);
    const activeWeeks =  data.filter(week => {
      return week.total > 0
    })
    const formattedWeeks = activeWeeks.map((week) => {
      const formattedWeek = []
      for (let i = 0; i < week.days.length; i ++) {
        formattedWeek.push({
          date: addUTCDays(week.week, i),
          count: week.days[i]
        })
      }
      return formattedWeek
    })
    return formattedWeeks
  } catch(err) {
    console.log(err)
  }
}

module.exports = {getCommits, getRepoCommits}