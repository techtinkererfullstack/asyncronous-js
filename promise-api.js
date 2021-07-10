// crating settled promise
const p_resolve = Promise.resolve({
    id: 1
})
p_resolve.then(id => console.log(id))

const p_reject = Promise.reject(new Error('reason for error'))
p_reject.
catch (error => console.log(error))


//Running promisses in parallel

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asyncronous operation 1...')
        reject(1)
    }, 2000)
})

const p2 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('Asyncronous operation 2...')
        resolve(2)
    }, 2000)
})


Promise.all([p1, p2])
    .then(result => console.log(result))
    .catch (err => console.log('operation fail..'))
    
//if any operation of promise.all failes then promise.all will be rejected