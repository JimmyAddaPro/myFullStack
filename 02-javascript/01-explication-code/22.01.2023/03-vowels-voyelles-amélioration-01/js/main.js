//Objectif : Amélioration : Faire en sorte que le code s'applique au moment de l'execution d'une fonction. 

// Etape 1 : Passage du code dans la fonction 
function splitVowelsCons(text){
 
    var arr = text.toLowerCase().replaceAll(" ", "").split("").sort();
    
    var message = "";
    //var vowelMessage = "Your string containes the following vowels : ";
    //var consonantMessage = "Your string containes the following consonants : ";
    var vArr = [];
    var cArr = [];

    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
    }

    message = `Your string containes the following vowels : ${vArr.join(", ")} 
    Your string containes the following consonants :  ${cArr.join(", ")}`;
    //alert(message);
    //return(message);
    //document.querySelector("p").innerText = message;
}


//Etape 2 : Execution de la fonction 
// splitVowelsCons("Prénom Nom");
// splitVowelsCons("Mickey Mouse");
// splitVowelsCons("Bruce Wayne");
// splitVowelsCons("Peter Parker");
// splitVowelsCons(prompt("Enter a text"));



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



Explication des methodes/Fonctions : 
----------------------------------
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
-----------------------------------------------------------------------------------------
Explications des instructions/statements :
---------------------------------------
continue                      -> sort de la boucle ou condition dans laquelle elle se trouve et continue la suite du code à partir de la sortie de la boucle ou condition.

*/