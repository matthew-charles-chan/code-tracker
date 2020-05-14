const axios = require('axios')
const URL = 'https://api.github.com'


async function getCommits(user) {
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


function addDays(unixDate, days) {
  let jsDate = new Date(unixDate);
  jsDate.setDate(jsDate.getDate() + days);
  return jsDate
}

async function getRepoCommits(user, repo) {

  try {
    const {data} = await axios.get(`${URL}/repos/${user}/${repo}/stats/commit_activity`);
    const activeWeeks =  data.filter(week => {
      return week.total > 0
    })
    
    const formattedWeeks = activeWeeks.map((week) => {
      const formattedWeek = []
      for (let i = 0; i < week.days.length; i ++) {
        formattedWeek.push({
          date: addDays(week.week, i),
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