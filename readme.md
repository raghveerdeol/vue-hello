<!-- Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. -->
-aggiungiamo CDN vue al file index;
-creiamo la cartella div con id app in cui contenere il codice;
-creiamo un h1 al intrno del div#app;
-<h1>{{messaggio}} </h1>;
<!-- Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. -->
-creiamo un elemento img
- nel elemento img usiamo v-bind per collegare nome attributo al nome variabile; 
<!-- Bonus 2:
Aggiungiamo la possibilita' di modificare in tempo reale con un input sia l'h1 che l'url dell'immagine! -->
-aggiungiamo tag input al interno del div#app;
- e usiamo v-model per collegarlo al message;
Bonus Special:
Al click sull'immagine facciamo succedere qualcosa di creativo!