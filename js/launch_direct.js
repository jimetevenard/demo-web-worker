/*
    Méthode "dure" :
    ================

    Tout faire en une seule boucle.

    La page est bloquée (freeze) pendant toute l'éxécution.
    Et le message "Page bloquée" peut même apparaitre.
*/
function runAnalyse(s) {
    let i, timestampStart = Date.now();
    for (i = 0; i < nb; i++) {
        analyse();
    }
    display(i, nb, Date.now() - timestampStart);
}