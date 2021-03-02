



/**
    GLOBALE : Chaine échantillon
*/
let lorem;

/**
    GLOBALE : Nombre d'itération
*/
let nb;

/**
    GLOBALE : Nombre d'iteration à regrouper
    (Pour le lotissement par interval)
 */
let decoupage;

/**
    GLOBALE : Compteur total de Runs.
*/
let totalRuns = 0;

/**
 * Fonction handler du clic sur les boutons de lancement.
 * 
 * @param {Event} event
 */
function clickLaunchButton(event) {
    totalRuns++;
    getParams();

    let methode = event.target.getAttribute('data-methode');
    switch (methode) {
        case 'hard':
            runAnalyse();
            break;
        case 'soft':
            runAnalyseAsync();
            break;
        case 'worker':
            runAnalyseWorker();
            break;
    }

}

/**
 * Ajout du listener sur les boutons
 */
let boutons = document.querySelectorAll('button.launch');
boutons.forEach(function (btn) {
    btn.addEventListener('click', clickLaunchButton);
})

/**
 * Récupération des paramètres depuis le formulaire.
 */
function getParams(){
    nb = Number.parseInt(document.querySelector('#iterations-select').value);
    decoupage = Number.parseInt(document.querySelector('#lot-select').value);
    lorem = document.querySelector('#chaine-test').innerHTML;
}







