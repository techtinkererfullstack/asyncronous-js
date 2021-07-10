console.log('before');
getUser(1, user => {
    getRepositories(user.gitHubUsername, repos => {
        getCommits(repos[0], commit => console.log(commit))
    })
})

console.log('after');


function getUser(id, callback) {
    setTimeout(() => {
        console.log('database reading...')
        callback({
            id: id,
            gitHubUsername: "mosh"
        })
    }, 2000);
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('calling github api...')
        callback(["repo1", "repo2", "repo3"])
    }, 2000)

}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('calling github api...')
        callback(["commits"])
    }, 2000)

}