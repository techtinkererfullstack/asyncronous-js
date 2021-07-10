console.log("before");
getUser(1, getRepositories)
console.log("after");

function getRepositories(user){
 getRepositories(user.gitHubUsername, getCommit)
}

function  getCommit(repos) {
getCommit(repo, disppayCommit)
}

function disppayCommit(commits) {
  console.log(commits)
}

function getUser(id, callback){
setTimeout(() => {
  console.log('database reading...')
  callback({id:id, gitHubUsername: "mosh"})
}, 2000);
}

function getRepositories(username, callback) {
  console.log('calling github api...')
  callback(["repo1", "repo2", "repo3"])
}