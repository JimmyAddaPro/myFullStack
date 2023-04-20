//E - 1 - DEBUT
const Participants = [
  {fName: "Bruce", lName: "Wayne", email: "brucewayne@batmail.com", tz: 123456789},
  {fName: "Clark", lName: "Kent", email: "Clarkkent@supermail.com", tz: 123456789},
  {fName: "Peter", lName: "Parker", email: "peterparker@spidermail.com", tz: 123456789},
  {fName: "Barry", lName: "Allen", email: "barryallen,@flashmail.com", tz: 123456789},
  {fName: "Eddie", lName: "Brock", email: "eddiebrock@venomail.com", tz: 123456789},
]
//E - 1 - FIN
//E - 3 - DEBUT
doTable();
function doTable(){
    var table = document.createElement("table");
    table.className = "table table-dark table-striped table-bordered text-center";
    var thead = document.createElement("thead");
    thead.className = "thead-dark";
    thead.innerHTML = 
        `<tr class="fw-bold">
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Toudat Zeout</th>
        </tr>`;
    var tbody = document.createElement("tbody");
    var htmlData = "";
    //E - 3.2 - DEBUT
    Participants.forEach(createTable);
    function createTable(obj, i){
        htmlData += 
        `<tr>
            <th scope="row"  class="fw-bold">${i + 1}</th>
            <td>${obj.fName}</td>
            <td>${obj.lName}</td>
            <td>${obj.email}</td>
            <td>${obj.tz}</td>
        </tr>`;
    }
    //E - 3.2 - FIN
    
    tbody.innerHTML = htmlData;
    table.append(thead, tbody);
    document.getElementById("main").append(table);
}
//E - 3 - FIN
/*
    Objectif  :  
       énoncé    : Afficher une liste de "participants" dans un tableau HTML. Cette liste est issue d'un Array contenant pour chaque participant un prénom, un nom de famille, un email, une teoudat zeout. On utilisera Bootstrap pour la partie CSS.   
        ----------------------------------------------------------------------------------------
        Evolution : 
        1. Création de la constante Participants avec son contenu
        --
        2. Liaison avec Bootstrap  
        2.1 Création du div id="main"
        --   
        3. Création de la fonction doTable() qui va creer le tableau   
        3.1 Deux exemples simples boucle foreach pour comprendre la suite.
        3.2 Récupération des données du Array via la boucle foreach.
        --   
        FIN
        --
*/
/*
Methodes/Fonctions  : 
    --    
    Array.forEach() -------------- permet d'utiliser la boucle foreach.
    ->  arg      ->  l'argument est soit une fonction normale, soit une fonction anonyme. 
    -> La fonction qui est executé peut avoir deux paramètres : 
        paramètre 1 : Valeur du Array
        paramètre 2 : Indice du Array
    E - 3.1 - DEBUT
    ->  exemple  1 ->  
    const MyArray = ["A","B", "", "C","D"];
    MyArray.forEach(function(valeur, indice){
        console.log(" " + indice + "-" +  valeur);
    });
    ->  exemple  2 ->
    const MySecArray = ["A", "B", "C", "D"];
    function parcoursArray(valeur, indice){
        document.write(indice + " = " + valeur + "<hr>");
    }
    MySecArray.forEach(parcoursArray);
    E - 3.1 - FIN
    --

    29-01-2023 - 2H48
----------------------------------------------
Propriétés/Variables  :   
    --  
    NomDeLaPropriété      : Utilité principale
    ->  exemple  ->
----------------------------------------------
Instructions  :  
    --  
    NomDeLInstruction     : Utilité principale
        ->  exemple  ->
----------------------------------------------
    Bonnes pratiques : 
    Pour une application ou même de manière générale, le main n'est utilisé qu'une seule fois.            -
    --> Amélioration 
        /P\ ... ?
        /S\ ...
        /!\ ...
    Rêgles : 
    1 - Toutes les methodes de Array ont des boucles for à l'intérieur.
        /!\ Quand on utilise une methode de Array, nous ne pouvons pas utiliser l'instruction break; La boucle tournera autant de fois qu'elle trouvera des informations dans le Array.
    2 - on utilise une fonction anonyme, - cad sans nom -, lorsque nous n'avons aucune raison de la réutiliser.
*/