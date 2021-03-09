function randomLetter() {
    let n = Math.floor(Math.random() * 5);
    let l = ['a', 'e', 'i', 'o', 'u'];
    return l[n];
}

function analyse(string) {
    return string.replaceAll(randomLetter(), 'yop');
}

var busy = false;

onmessage = function(e){
    if(busy) return;

    let rep, i, progressInterval = 100000, timestampStart = Date.now();
    busy = true;

    try {
        postMessage('[Worker] : traitement en cours...');


        for(i = 0; i < e.data.nbItarations; i++){
            rep = analyse(e.data.string);

            // On envoie un feed back toutes les ${progressInterval} itérations
            if(i % progressInterval == 0){
                postMessage(`[Worker] : En cours, ${i} éléments traités sur ${e.data.nbItarations}`);
            }   
        }
    
        postMessage(`[Worker] : ${i} éléments traités, Terminé ! en ${Date.now() - timestampStart} ms`);
    } finally {
        busy = false;
    }

}