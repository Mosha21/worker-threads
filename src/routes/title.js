const express = require('express');

const { Worker } = require('worker_threads');

// https://livecodestream.dev/post/how-to-work-with-worker-threads-in-nodejs/
let actions = [1, 2, 3, 4, 5, 6];
const size = Int32Array.BYTES_PER_ELEMENT*actions.length;
const sharedBuffer = new SharedArrayBuffer(size);
const sharedArray = new Int32Array(sharedBuffer);

actions.forEach((action, index) => {
    Atomics.store(sharedArray, index, action);
})

const router = new express.Router();

router.get('/titles', async (req, res) => {
    responseList = [];

    // Create new worker
    const worker = new Worker('./src/worker.js');

    // Listen for message
    worker.on('message', result => {
        responseList.push(result);
    });

    worker.on('error', error => {
        console.log(error);
    });

    worker.on('exit', exitCode => {
        console.log(exitCode);
    })

    worker.postMessage({actions: sharedArray});
    
    const wait = () => {
        if(responseList.length < actions.length) {
            setTimeout(() => {
                wait();
            }, 0);
        } else res.status(200).send(responseList);
    }
    wait();
})

module.exports = router;