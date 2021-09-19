const { parentPort, workerData } = require('worker_threads');

parentPort.on('message', data => {
    parentPort.postMessage(myFunction(data));
})

async function myFunction() {
    
}