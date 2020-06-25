# Web-Animation

[Ontwerp](https://basvandenbrink98.github.io/Web-Animatie/)

## Gekozen kunstwerk
[Gekozen kunstwerk](https://designarchives.aiga.org/#/entries/Nitespots/_/detail/relevance/asc/0/7/12360/nitespots/1)

[Foto gekozen kunstwerk](https://github.com/BasvandenBrink98/Web-Animatie/blob/master/img/gekozen_kunstwerk.jpg)

Het kunstwerk dat ik gekozen heb is een doosje. Hij is ontworpen door Pushpin Lubalin Peckolick, een ontwerpbureau gevestigd in New York. Het bureau is een paar keer van naam veranderd. Het staat vooral bekend als Push Pin Studios.

Helaas is er niet zo veel te vinden over dit specifieke doosje. Het is wel bekend dat Push Pin Studios meerdere snoep verpakkingen heeft gemaakt.

Qua stijl heeft Push Pin niet echt een kenmerkende stijl. Het is vrij uiteenlopend. Voor het ontwerpen van de animatie ben ik dan maar gegaan voor een soort design proces, om zo het ontwerpbureau te evenaren. Een voor een worden er dingen toegevoegd aan het ontwerp in de animatie. Zo wordt er een soort design proces gecreëerd.

## Style
Het ontwerp is responsive. Het werkt op desktop en op mobile formaat. Aangezien het gekozen kunstwerk meer landscape is, heb ik op mobile het ontwerp gekantelt en de tekst gedraaid zodat deze goed te lezen is. De verticale animatie vind ik meer passen bij dit ontwerp voor mobile. Er is zo meer ruimte voor de elementen om te bewegen.

## Interactivity
Ik heb interactie door middel van muis en toetsenbord in mijn ontwerp. Voor mobile is er geen mogelijkheid voor toetsenbordinteractie. Daarom is de interactie voor mobile alleen klikken. Ik heb voor de variatie dubble tap geprobeerd maar in de chrome browser wordt er ingezoomd wanneer je dubble tapt. Ik heb ook geprobeerd om long press toe te voegen als variatie op mobile, maar om dit te bereiken was vrij ingewikkelde javascript nodig.

Om het duidelijk te maken dat je in het begin op de zwarte cirkel kan klikken, heb ik de cursor aangepast wanneer er over de cirkel wordt gehoverd.

## Experiment
Een issue waar ik tegen aan liep tijdens het uitwerken, was de verschillende instucties tonen bij een ander schermformaat. Ik heb heel lang geprobeerd dit op te lossen met window.watchMedia("(max-width:420px)") en vervolgens met een if statement kijken welke insturctie er getoond moet worden (code van https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener). Dit was mij niet gelukt met javascript, maar uiteindelijk kwam ik op het idee om de <p></p> leeg te laten en hier vanuit css content in te zetten. Zo kon ik met media queries andere content toevoegen bij een andere schermbreedte.

Verder heb ik gebruik gemaakt van background-blend-mode. Zo heb ik de achtergrond van het originele ontwerp geprobeerd na te maken.
