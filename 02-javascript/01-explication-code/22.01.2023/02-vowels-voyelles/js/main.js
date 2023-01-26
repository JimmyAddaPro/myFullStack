//Etape 1 : Interaction avec utilisateur, récupération et affectation

// var vowels = ["a", "e", "i", "o", "u", "y"];

var fullName = prompt("enter your full name").toLowerCase().replaceAll(" ", "").split("").sort(); // Array

//Etape 2 : Création des varables de recupération pour l'affichage

var message = "";
var vowelMessage = "Your string containes the following vowels : ";
var consonantMessage = "Your string containes the following consonants : ";
var vArr = [];
var cArr = [];

//Etape 3 : Affichage

    // Exemple écriture courante : 
/*
for(let i = 0; i < fullName.length; i++){
    const x = fullName[i];
    if("aeiouy".includes(x)){
        vArr.push(x);
        continue;
    }
    cArr.push(x);
}
*/
    // Exemple écriture ternaire : 
for(let i = 0; i < fullName.length; i++){
    const x = fullName[i];
    "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
}

message = vowelMessage + vArr.join(", ") + "\n" + consonantMessage + cArr.join(", ");
alert(message);
// document.write(message);

/*
Explication des methodes/Fonctions : 
--------------------------
toLowareCase()              -> Transforme string en minuscule 
                                -> ex -> prénom nom
--
replaceAll(arg1, arg2)      -> Ramplace tout 
                                -> arg 1 -> Ce qui doit être remplacé
                                -> arg 2 -> Par quoi cela doit être remplacé
                                -> ex -> prénomnom
--
split()                     -> Retourne un Array              
                                -> /!\ -> n'est utilisable qu'à partir d'un String
                                -> ex -> [p], [r], [é], [n], [o], [m], [n], [o], [m]
--
sort()                      -> Le Array prend les valeurs de chaque indice et les ranges par ordre alphabetique
                                -> /!\ -> n'est utilisable qu'à partir d'un Array. Le sort modifie l'Array.
                                -> ex -> [é], [m], [m], [n], [n], [o], [o], [p], [r]
--
includes()                      -> determine si une chaîne de carractère est contenue dans une autre
                                -> retourne -> True ou False
                                -> Fonctionne avec String et Array
--
push()                          -> Ajoute un ou plusieurs éléments à la fin d'un Array
                                -> retourne ->  La nouvelle longueur du tableau.
-----------------------------------------------------------------------------------------
Explications des propriétés/variables :
---------------------------------------
length                      -> Calcule et retourne la longueur du String
                            -> ex -> 
-----------------------------------------------------------------------------------------
Explications des instructions/statements :
---------------------------------------
continue                      -> sort de la boucle ou condition dans laquelle elle se trouve et continue la suite du code à partir de la sortie de la boucle ou condition.

*/

