// Exercice : Affichage de l'ARRAY sous forme de tableau HTML en n'utilisant que la methode map(sans utiliser foreach).

// E - 0 - LIAISON AVEC BOOTSTRAP & ECRITURE DU HTML(div id="main");
// E - 1 - DEBUT
const Characters = [
    {name : "Ryu", like : "Arts martiaux", dontLike : "araignées", size : "1,75m", weight : "85kg", description : "S'entraînant sans relâche, il cherche la vraie force. Courtois et sincère, Ryu parcourt le monde à la recherche d'adversaires dignes de ce nom. Maîtrisant enfin le Satsui no Hado, il veut désormais se surpasser."},
    {name : "E. Honda", like : "Les bains", dontLike : "L'indécision", size : "1,75m", weight : "137kg", description : "E. Honda est un sumotori qui veut faire connaître son sport à travers le monde. Il possède les techniques d'un yokozuna, mais n'a jamais atteint ce grade à cause de ses voyages. C'est un expert du ragoût chanko."},
    {name : "Blanka", like : "Samantha, les poupées Blanka-chan", dontLike : "Les fourmis légionnaires", size : "1,92m", weight : "98kg", description : "Ardent défenseur de la nature, Blanka est devenu un guide touristique pour aventuriers, persuadé que sa connaissance intime de la jungle lui servira de tremplin vers la célébrité pour offrir une belle vie à sa mère."},
    {name : "Ken", like : "Famille", dontLike : "Les réunions inutiles", size : "1,75m", weight : "82kg", description : "Ancien champion des USA et ex-vice-président de la Fondation Masters. Accusé d'avoir orchestré un complot criminel, Ken a dû abandonner sa famille et ses affaires pour se cacher."},
    {name : "Guile", like : "Regarder du sport, promener son chien", dontLike : "Les cachottiers, les fainéants", size : "1,82m", weight : "99kg", description : "Pilote de l'US Air Force qui se bat pour son pays, Guile a fait tomber Shadaloo et vengé son ami Charlie. Il profite de sa vie de famille, mais de nouveaux combats l'attendent."},
]
// E - 1 - DEBUT
// E - 1 - FIN
init();
function init(){
    var table = document.createElement("table");
    table.className = "table table-dark table-striped table-bordered text-center";
    var thead = document.createElement("thead");
    thead.innerHTML = `
        <tr class="fw-bold">
            <th class="align-middle" scope="col">ID</th>
            <th class="align-middle" scope="col">Nom du combatant</th>
            <th class="align-middle" scope="col">Aime</th>
            <th class="align-middle" scope="col">N'aime pas</th>
            <th class="align-middle" scope="col">Taille</th>
            <th class="align-middle" scope="col">Poid</th>
            <th class="align-middle" scope="col">Description</th>
        </tr>
    `;
var tbody = document.createElement("tbody");
tbody.innerHTML = Characters.map(function(x, i){
    return `
    <tr>
        <th class="fw-bold align-middle" scope="row">${i+1}</th>
        <td class="align-middle">${x.name}</td>
        <td class="align-middle">${x.like}</td>
        <td class="align-middle">${x.dontLike}</td>
        <td class="align-middle">${x.size}</td>
        <td class="align-middle">${x.weight}</td>
        <td class="align-middle">${x.description}</td>
        </tr>
    `;
}).join("");

table.append(thead, tbody);
document.getElementById("main").append(table);
}






