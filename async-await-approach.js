
//async & await approach

async function displayCommits() {
  try {
    /* code */
const user = await getUser(1);
const repo = await getRepositories(user);
const commits = await getCommits(repo[0]);
console.log(commits)
  } catch (e) {
    console.log(e.message)
  }

}
displayCommits()



function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('database reading...')
            resolve({
                id: id,
                gitHubUsername: "mosh"
            })
        }, 2000);
    })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github api...')
           // resolve(["repo1", "repo2", "repo3"])
           reject(new Error('cannot get repo'))
            
        }, 2000)
    })
}

function getCommits(repo) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling github api...')
            resolve(["commits"])
        }, 2000)
    })
}