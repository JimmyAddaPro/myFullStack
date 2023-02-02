//Objectif : Amélioration de la fonction pour qu'elle puisse apparaître dans un élement HTML au choix. Création de la fonction updateH1() 
var pars = parseInt(2,3);
alert(pars);
function splitVowelsCons(text){
 
    var arr = text.toLowerCase().replaceAll(" ", "").split("").sort();
    
    var message = "";
    var vArr = [];
    var cArr = [];

    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
    }
    /*
    message = `Your string containes the following vowels : ${vArr.join(", ")} 
    Your string containes the following consonants :  ${cArr.join(", ")}`;
    */
    //return(message);
    
    return `Your string containes the following vowels : ${vArr.join(", ")} 
    Your string containes the following consonants :  ${cArr.join(", ")}`;
    
}
//Etape 1 : Récupération via la méthode querySelector de l'élément H1 et affection de l'Objet retourné à une variable pour pouvoir travailler avec.
 
var h1 = document.querySelector("h1");

//Etape 2 : Création de la fonction de modification de l'élément h1.
/*
function updateH1(elem){

    var text = prompt("Enter a text");//récupération d'un texte 
    
    elem.innerText = splitVowelsCons(text);//Passage de ce texte dans la fonction splitVowelsCons(). Le resultat retrouné est envoyé en contenu de l'élément h1.


}
*/
// var arrColors = ["red", "blue", "green"];
// var i = 0;

function updateH1(){

    var text = prompt("Enter a text");//récupération d'un texte 
    
    h1.innerText = splitVowelsCons(text);//Passage de ce texte dans la fonction splitVowelsCons(). Le resultat retourné est envoyé en contenu de l'élément h1.

    //h1.className = "important";

    // h1.className = arrColors[i];
    // i++;

    h1.style.color = `rgb(${parseInt(Math.random()* 255)},${parseInt(Math.random()* 255)},${parseInt(Math.random()* 255)})`

}

/*
Explication de l'amélioration : 
------------------------------
    1.
        Une fois le code passé dans la fonction, on crée l'argument text à la place du prompt() et on l'affecte à la variable arr. 

        Pourquoi cette variable s'appelle arr ?
        Parce qu'à la variable arr est afféctée une valeur Array.  
    2.  Recuperation et affichage dans l'index plutôt que dans un alert. Il faut donc transformer l'alert en return.
    3. Création du bouton(événement) dans index.html 
    4. Dans main.js, les variables vowelMessage & consonantMessage sont en trop étant donné qu'on ne les utilise qu'une fois. Il faut donc récuperer leur valeur et l'écrire directement dans la variable message. 
    5. Dans l'index.html, faire apparaître le resulatat dans un élément p.
    6. Amélioration de la fonction pour qu'elle puisse apparaître dans un élement HTML au choix. Création de la fonction updateH1()
    7. La variable message n'a pas lieu d'éxister puisqu'on retourne directement son contenu. 
    8. dans index.html executer la fonction updateH1() au onclick. 
    
    9. Amélioration de la fonction updateH1(). Elle va maintenant executer la fonction splitVowelsCons() dans un élément HTML déterminé via l'argument.
    9.bis -> Cette étape est finalement annulé. La raison est que l'argument n'est pas pris en compte pour une raison qu'on verra plus tard dans la formation.
    10. Nous revenons donc à l'étape précedente ou la fonction updateH1 n'attend pas d'argument. Il faut donc enlever les arguments de la fonction dans main.js et index.html
    11. Création de la classe CSS .important{color: red;}
    12. Via la propriété className on ajoute, au moment du clique, l'attribut class="important" à l'élément h1. le texte retourné, en plus d'être écrit dans le h1, est maintenant de couleur rouge.
    13. Création d'un Array arrColors qui contient 3 couleurs : red, blue, green. Affectation d'une valeur à une variable i avant la fonction updateH1(). Ce i sert d'indice du Array arrColors. Pour passer à l'indice suivant à chaque éxécution de la fonction updateH1 i est incrémenté en fin de fonction.
    14. On ajoute les classes CSS dans style.css : .red{color: red;}, .blue{color: blue;}, .green{color: green;}.  A chaque éxécution de la fonction uptadeH1, la couleur change.
    -> On aurrait pu continuer comme cela longtemps. Par exemple, ici, une fois que i est égal à 3 la couleur redevient noir. On aurait pu faire une condition et dire que i revient à 0 s'il est egal à 3.
    15. Ici nous allons rendre l'application de couleur de texte aléatoir via la propriété HTMLElement.style, les fonctions parsentInt() et Math.random(), en modifiant les valeurs rgb de la propriété CSS : color : rgb(255, 255, 255);
    Fin de l'amélioration.

Explication des methodes/Fonctions : 
----------------------------------


parsentInt()                   ->  renvoie un entier.                                 
--
Math.random()                   -> renvoie un nombre pseudo-aléatoire à virgule flottante supérieur ou égal à 0 et inférieur à 1.                                 
--
document.querySelector()        -> Selectionne un élément HTML dans la page. 
                                -> arg -> élément visé
                                -> ex  -> document.querySelector("h1")                                
--
toLowareCase()              -> Transforme string en minuscule 
                                -> ex -> prénom nom
--
replaceAll(arg1, arg2)      -> Ramplace tout 
                                -> arg 1 -> Ce qui doit être remplacé
                                -> arg 2 -> Par quoi cela doit être remplacé
                                -> ex    -> prénomnom
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
--
join()                          -> Crée une nouvelle chaîne en concaténant tous les éléments d'un tableau
                                -> retourne ->  Renvoie la nouvelle avec le séparateur indiqué en argument.
-----------------------------------------------------------------------------------------
Explications des propriétés/variables :
---------------------------------------
length                      -> Calcule et retourne la longueur du String
                            -> ex -> 
                                
--
HTMLElement.innerText           -> contenu à l'interieur de l'élément HTML. 
                                -> ex  -> h1.innerText = "Titre de ma page"
--
HTMLElement.className           -> Ajoute une classe à l'élément HTML. 
                                -> ex  -> h1.className = "nomdelaclassecss"
--
HTMLElement.style               -> Ajoute l'attribut style à l'élément HTML. Il faut ajouter .nomdelapropriété = valeur pour écrire à l'intérieur de l'attribut 
                                -> ex  -> h1.style.color = "red"
-----------------------------------------------------------------------------------------
Explications des instructions/statements :
---------------------------------------
continue                      -> sort de la boucle ou condition dans laquelle elle se trouve et continue la suite du code à partir de la sortie de la boucle ou condition.

*/