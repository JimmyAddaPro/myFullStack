// Exercice : Faire une liste avec mise en forme HTML-CSS que des noms de l'ARRAY Characters, en utilisant la methode map() et foreach
// -> map() pour recuperer un nouvel ARRAY que des noms et ensuite foreach pour le parcourir et le mettre en forme le nouvel ARRAY recupéré.

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
var newArray = Characters.map(function(obj){
    return obj.name;
})
console.log(newArray);
// E - 2 - FIN
// E - 3 - DEBUT

var ulElem = document.createElement("ul");

newArray.forEach(function(elem, i){
    var liElem = document.createElement("li");
    liElem.innerText =  i + " : " + elem;
    ulElem.append(liElem);    
})
var displayMain = document.getElementById("main");
displayMain.append(ulElem);
// E - 3 - FIN
// Map permet de prendre l'ARRAY existant et rend un nouvel ARRAY.













