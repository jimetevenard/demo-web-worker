/**
 * Init du Woker
 */
let myWorker = new Worker("js/worker.js");
myWorker.onmessage = function(e){
    let s = document.querySelector('#status');
    s.innerHTML = `RUN ${totalRuns} : Message du Worker : <span class="robot">${e.data}</span>`;
};

/**
 * Lancement des itérations sur la fonction d'analyse
 * via un Web Worker.
 */
function runAnalyseWorker(){

    myWorker.postMessage({
        string: lorem,
        nbItarations: nb
    });

}
