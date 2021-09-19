const { parentPort, workerData } = require('worker_threads');
const queries = require('../utils/queries');

parentPort.on('message', data => {
    data.actions.forEach(action => {
        if(action === 1) {
            queries.countTitles(result => {
                parentPort.postMessage(result);
            });
        } else if(action === 2) {
            queries.countDescriptions(result => {
                parentPort.postMessage(result);
            });
        }
        else if(action === 3) {
            queries.listTitles(result => {
                parentPort.postMessage(result);
            });
        }
        else if(action === 4) {
            queries.listDescriptions(result => {
                parentPort.postMessage(result);
            });
        }
        else if(action === 5) {
            queries.tablesCount(result => {
                parentPort.postMessage(result);
            });
        }
        else if(action === 6) {
            queries.mergeTables(result => {
                parentPort.postMessage(result);
            });
        }
    })
})