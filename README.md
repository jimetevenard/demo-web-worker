# Démo JS : API _Worker_

**Démo live** : <https://jimetevenard.github.io/demo-web-worker/>

Comparaison de performance et de comportement sur différentes façons de lancer une fonction javascript couteuse.

Le test consiste à exécuter un nombre défini de fois une fonction d'analyse sur une chaine de caractères.

Cette fonction d'analyse procède au remplacement, dans la chaine de test, de chaque occurrence d'une voyelle choisie aléatoirement par une chaine arbitraire.

Trois modes d'exécution sont mis en œuvre :

*   Lancement direct par une boucle
*   Lancement par lots différés via `setInterval()`
*   Lancement via un [Web Worker](https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API/Using_web_workers)

Le but de ce petit test est d'illustrer les différents comportements du navigateur selon le mode d'exécution mis en œuvre, et d'illustrer les avantages du lancement dans un [Web Worker](https://developer.mozilla.org/fr/docs/Web/API/Web_Workers_API/Using_web_workers).
