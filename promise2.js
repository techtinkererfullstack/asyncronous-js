/* console.log('before');
getUser(1, user => {
    getRepositories(user.gitHubUsername, repos => {
        getCommits(repos[0], commit => console.log(commit))
    })
})
console.log('after'); */

//promose based approach

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repo => getCommits(repo[0]))
    .then(commits => console.log('commits', commits))
				.catch(err => console.log('error', err.message))


//async & await approach


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
            resolve(["repo1", "repo2", "repo3"])
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