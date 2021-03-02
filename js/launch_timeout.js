/*
    Méthode "douce"
    ===============

    Utiliser un Interval pour laisser "respirer" le navigateur.

    Cependant, le délai total d'éxécution est considérablement rallongé.

    On peut ajuster le lotissement des éxécutions,
    mais si les lots sont trop gros, on risque des "mini-freeze" assez genants.
*/
function runAnalyseAsync(s) {
    let i = 0;

    let runGroup = function () {
        for (let j = 0; j < decoupage && i < nb; j++) {
            analyse();
            i++;
        }
        display(i, nb);
    }
    let interval = setInterval(function () {
        if (i < nb) {
            runGroup();
        } else {
            clearInterval(interval);
        }


    }, 1);
}