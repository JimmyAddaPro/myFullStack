// E - 0 - LIAISON AVEC BOOTSTRAP & ECRITURE DU HTML(div id="main");
// E - 1 - DEBUT
const Characters = [
    {name : "Ryu", like : "Arts martiaux", dontLike : "araignées", size : "1,75m", weight : "85kg", description : "S'entraînant sans relâche, il cherche la vraie force. Courtois et sincère, Ryu parcourt le monde à la recherche d'adversaires dignes de ce nom. Maîtrisant enfin le Satsui no Hado, il veut désormais se surpasser."},
    {name : "E. Honda", like : "Les bains", dontLike : "L'indécision", size : "1,75m", weight : "137kg", description : "E. Honda est un sumotori qui veut faire connaître son sport à travers le monde. Il possède les techniques d'un yokozuna, mais n'a jamais atteint ce grade à cause de ses voyages. C'est un expert du ragoût chanko."},
    {name : "Blanka", like : "Samantha, les poupées Blanka-chan", dontLike : "Les fourmis légionnaires", size : "1,92m", weight : "98kg", description : "Ardent défenseur de la nature, Blanka est devenu un guide touristique pour aventuriers, persuadé que sa connaissance intime de la jungle lui servira de tremplin vers la célébrité pour offrir une belle vie à sa mère."},
    {name : "Ken", like : "Famille", dontLike : "Les réunions inutiles", size : "1,75m", weight : "82kg", description : "Ancien champion des USA et ex-vice-président de la Fondation Masters. Accusé d'avoir orchestré un complot criminel, Ken a dû abandonner sa famille et ses affaires pour se cacher."},
    {name : "Guile", like : "Regarder du sport, promener son chien", dontLike : "Les cachottiers, les fainéants", size : "1,82m", weight : "99kg", description : "Pilote de l'US Air Force qui se bat pour son pays, Guile a fait tomber Shadaloo et vengé son ami Charlie. Il profite de sa vie de famille, mais de nouveaux combats l'attendent."},
]
// E - 1 - FIN
// E - 2 - DEBUT
doTable();
function doTable(){
    var table = document.createElement("table");
    table.className = "table table-dark table-striped table-bordered text-center"
    var thead = document.createElement("thead");
    thead.className = "thead-dark";
    thead.innerHTML = 
    `<tr class="fw-bold">
        <th scope="col">ID</th>
        <th scope="col">Personnage</th>
        <th scope="col">Aime</th>
        <th scope="col">N'aime pas</th>
        <th scope="col">Taille</th>
        <th scope="col">Poid</th>
        <th scope="col">Description</th>
    </tr>`;
    var tbody = document.createElement("tbody");
    var htmlData = "";
    // E - 3 - DEBUT : Construction d'une methode foreach par nous-même qu'on appelle myForeach
    Characters.myForeach = function(callback){
        for(let i = 0; i<this.length; i++){
            const element = this[i];
            callback(element, i); // Execution du callback donc de createTable. La difficulté réside dans le fait de comprendre que this[i] retourne un Objet issue du ARRAY Characters. A chaque tour de boucle c'est un nouvel Objet correspondant à la valeur de i qui n'est autre que l'indice. la méthode myForeach permet donc d'executer une fonction dans la boucle for. Cette fonction doit obligatoirement avoir 2 paramètres : P1 -> un Objet, p2 -> un Indice. Donc à chaque fois que je souhaite mettre en forme(HTML/CSS) un ARRAY contenant des Objets, je dois creer une fonction(ici createTable) qui contient deux paramètres : P1 -> Row du ARRAY, P2 -> Indice de la Row. A l'interieur de la fonction je peux mettre en forme avec par exemple des tr, th et td ... This fait référence à l'objet le plus prêt de l'endroit où il se trouve. C'est tjrs un objet.
        }
    }
    // E - 3 - FIN
    // E - 4 - DEBUT
    Characters.myForeach(createTable);
    function createTable(obj, i){
        htmlData += 
        `<tr class="align-middle">
            <th scope="row" class="fw-bold">${i + 1}</th>
            <td class="align-middle">${obj.name}</td>
            <td class="align-middle">${obj.like}</td>
            <td class="align-middle">${obj.dontLike}</td>
            <td class="align-middle">${obj.size}</td>
            <td class="align-middle">${obj.weight}</td>
            <td class="align-middle">${obj.description}</td>
        </tr>`;
    }
    // E - 4 - FIN

    tbody.innerHTML = htmlData;
    table.append(thead, tbody);
    
    document.getElementById("main").append(table);
}

// E - 2 - FIN