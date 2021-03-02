/**
 * fonction d'analyse.
 * ===================
 * 
 * Il s'agit du remplacement, dans la chaine de test,
 * de chaque occurence d'une voyelle choisie aléatoirement
 * par un chaine arbitraire.
 */
function analyse() {
    let n = Math.floor(Math.random() * 5);
    let voyelles = ['a', 'e', 'i', 'o', 'u'];
    let randomLetter = voyelles[n];

    return lorem.replaceAll(randomLetter, 'yop');
}

function display(indice, total) {
    let s = document.querySelector('#status');
    s.innerHTML = `RUN ${totalRuns} : ${indice} traités sur ${total}`;
}