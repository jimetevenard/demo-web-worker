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

## Performances et réactivité


<table >
    <!-- No rowspan in Markdown ! -->
    <tbody>
        <tr>
            <th><p>Echantillon</p></th>
            <th><p>M&eacute;thode</p></th>
            <th><p>Temps mesuré<sup>[1]</sup> (ms)</p></th>
            <th><p>R&eacute;activit&eacute; de la page</p></th>
            <th><p>Facteur Temps<sup>[2]</sup></p></th>
        </tr>
        <tr>
            <td rowspan="4" ><p>1 000 000</p></td>
            <td><p>Lancement direct (boucle for)</p></td>
            <td><p>3 303</p></td>
            <td><p>Bloqu&eacute;e</p></td>
            <td><p>1</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 10 000)</p></td>
            <td><p>3 609</p></td>
            <td><p>Fluide</p></td>
            <td><p>1,09</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 100 000)</p></td>
            <td><p>3 556</p></td>
            <td><p>Ralentie</p></td>
            <td><p>1,08</p></td>
        </tr>
        <tr>
            <td><p>Web Worker</p></td>
            <td><p>3 122</p></td>
            <td><p>Fluide</p></td>
            <td><p>0,95</p></td>
        </tr>
        <tr>
            <td rowspan="4"><p>2 000 000</p></td>
            <td><p>Lancement direct (boucle for)</p></td>
            <td><p>6 368</p></td>
            <td><p>Bloqu&eacute;e</p></td>
            <td><p>1,93</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 10 000)</p></td>
            <td><p>6 698</p></td>
            <td><p>Fluide</p></td>
            <td><p>2,03</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 100 000)</p></td>
            <td><p>6 648</p></td>
            <td><p>Ralentie</p></td>
            <td><p>2,01</p></td>
        </tr>
        <tr>
            <td><p>Web Worker</p></td>
            <td><p>5 581</p></td>
            <td><p>Fluide</p></td>
            <td><p>1,69</p></td>
        </tr>
        <tr>
            <td rowspan="4"><p>10 000 000</p></td>
            <td><p>Lancement direct (boucle for)</p></td>
            <td><p>31 635</p></td>
            <td><p>Bloqu&eacute;e</p></td>
            <td><p>9,58</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 10 000)</p></td>
            <td><p>94 307</p></td>
            <td><p>Fluide</p></td>
            <td><p>28,55</p></td>
        </tr>
        <tr>
            <td><p>Interval (Pause 1ms chaque 100 000)</p></td>
            <td><p>51 933</p></td>
            <td><p>Ralentie</p></td>
            <td><p>15,72</p></td>
        </tr>
        <tr>
            <td><p>Web Worker</p></td>
            <td><p>28 094</p></td>
            <td><p>Fluide</p></td>
            <td><p>8,51</p></td>
        </tr>
        <tr>
            <td colspan="5">
                <p>
                    Note [1] : Mesure du temps d'exécution donnée à titre indicatif,
                    ce temps dépend, bien entendu, des caractéristiques de la machine Hôte.
                    <br>
                    La mesure ci-dessus a été réalisée avec la configuration suivante :
                    Chrome 88 sous Windows 10 - CPU Intel Xeon E3-1535M v6 3,10 GHz() - 32Go RAM
                </p>
                <p>
                    Note [2] : Facteur par rapport au temps de réference
                    du lancement direct sur un million d'itérations.
                </p>
            </td>
        </tr>
    </tbody>
</table>


