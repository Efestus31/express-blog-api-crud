# express-blog-api-crud
Esercizio
Per il nostro blog, concentriamoci sul creare una rotta:
* la rotta dovrá rispondere al verbo POST e delegare un metodo store del controller dei posts per effettuare le operazioni di creazione della risorsa.
Questa dovrà riceve i dati in formato json e dovrà restituire l'elenco dei posts in formato json incluso il nuovo elemento appena creato
Tutte le funzioni delle rotte dovranno essere scritte nel controller dedicato.
Testare le rotte tramite Postman.
Bonus
* modificate la rotta index creata ieri (commentala via) e ricreala restituendo un JSON con la lista dei posts invece di un ul.
* persistenza: come visto in classe usa il modulo fs per salvare la nuova array nel file dopo aver inserito un nuovo elemento grazie alla rotta store creata
* e se volessi aggiornare un post? sapresti implementare la rotta update per aggiornare una risorsa esistente?
Alla fine dovrete usare postman come visto in classe per testare tutti i vostri endpoint.

## express-blog-api-crud (update)
Per il nostro blog, concentriamoci sul creare 2 rotte:
/:id [PUT] - rotta update del crud che riceverà dei dati e modificherá un post esistente. Questa dovrà riceve i dati in formato json e dovrà restituire il json dell’elemento appena creato.
/:id [DELETE] - rotta destroy del crud che dovrà restituire un 404 nel caso non sia stato trovato un post corrispondente.
Restituire come responso la nuova array escluso il post eliminato
Testare le rotte tramite Postman.

