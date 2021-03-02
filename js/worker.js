function randomLetter() {
    let n = Math.floor(Math.random() * 5);
    let l = ['a', 'e', 'i', 'o', 'u'];
    return l[n];
}

function analyse(string) {
    return string.replaceAll(randomLetter(), 'yop');
}

onmessage = function(e){
    postMessage('[Worker] : traitement en cours...');

    let rep, i;
    for(i = 0; i < e.data.nbItarations; i++){
        rep = analyse(e.data.string);
    }

    postMessage(`[Worker] : ${i} éléments traités ! rep.length ${rep.length}`);
}