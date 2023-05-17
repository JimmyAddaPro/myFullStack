// Exemple 1 : Synchronisation classique du haut vers le Bas
console.log("I STARTED");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(1);
console.log("I FINISHED ");
//--------------------
// Exemple 2 : Synchronisation classique du haut vers le Bas
  document.write("<p class=\"number-list\">I STARTED</p>");
  for(let i = 0; i<10; i++){
    document.write("<p class=\"number-list\">" + (i + 1) + "</p>");
  }
  document.write("<p class=\"number-list\">I FINISHED</p>");
// Execution synchrone de la boucle for puis de la suite.
//---------------------
// Exemple 3 : 
document.write("<hr><p class=\"number-list\">Started from the bottom</p>");
setTimeout(delay, 2000); // arg 1 : function à éxécuter, arg 2 : quand ?
for(let i = 0; i<10; i++){
  document.write("<p class=\"number-list\">" + (i + 1) + "</p>");
}
document.write("<p id=\"end\" class=\"number-list\">Now we here</p>");
function delay(){
  document.getElementById("end").innerHTML += "<p class=\"number-list\">No, we are here</p>";
}
//---------------------
// Exemple 4 : Exercice : Où écrire : "I finished" ? 
 console.log("I started");
 setTimeout(function(){
  console.log("2000 millisecondes");
 }, 2000);
 setTimeout(function(){
  console.log("30 millisecondes");
 }, 30);
 setTimeout(function(){
  console.log("4000 millisecondes - I finished"); // Ajouter "I finished" quand les élèves ont répondu à la question "Où écrire ... ?"
 }, 4000);
 setTimeout(function(){
  console.log("1000 millisecondes");
 }, 1000);
 setTimeout(function(){
  console.log("500 millisecondes");
 }, 500);
//---------------------
// Exemple 5 : Comment annuler un setTimeOut ? Exemple : Si nous cliquons sur un btn annuler avant qu'il ne s'éxécute, alors il ne s'éxécute plus. 

var btn1 = document.createElement("button");
btn1.innerText = "Start";
btn1.className = "btn-1";

var btn2 = document.createElement("button");
btn2.innerText = "Stop";
btn2.className = "btn-2";

document.getElementById("main").append(btn1, btn2);
var t = null; // Nous déclarons la variable t en dehors des fonctions, dans l'éspace global, afin de la rendre accessible partout, même quand nous la modifions dans les fonctions. Nous pouvions faire la même chose sans affecter les setTimeout à la variable t. Mais cela est obligatoire dans le cas où nous avons plusieurs setTimeOut.
btn1.addEventListener("click", function(){
  t = setTimeout(function(){
    alert("To late? you lose!")
  }, 5000);
})
btn2.addEventListener("click", function(){
  clearTimeout(t);
  // La condition vérifie si on a cliqué sur start : Si oui, on a gagné, si non : Message pour expliquer qu'on doit cliquer.
  if(t == null){
    alert("Click on start my friends")
  }else{
    alert("Yes, you got it");
    t = null;
  }
})
//---------------------
// Exemple 6 : setTimeout dans une boucle for // Bravo Nathan qui avait trouvé cette solution
for(let i = 0; i < 10; i++){
    setTimeout(function(){
      document.getElementById("main").innerHTML += "<hr>" + i;
  }, 1000*i);
} 
//---------------------
// Exemple 7 : Mieux(d'après Meir) que setTimeout dans une boucle for, setInterval. 
/*
var i = 0;
setInterval(function(){
document.getElementById("main").innerHTML += "<hr>" + i;
  console.log(i);
  i++;
}, 1000)
*/

// Probleme : Il ne s'arrette pas
//-----------------------------------------------
var btn3 = document.createElement("button");
btn3.innerText = "Clique pour enclencher setInterval";

var btn4 = document.createElement("button");
btn4.innerText = "Stop setInterval";

document.getElementById("main").append(btn3, btn4);

var myInterval = null;
var i = 0; // Déclaré en dehors de la fonction pour que ça ne reparte pas de 0.
btn3.addEventListener("click", function(){

  myInterval = setInterval(function(){
    //document.getElementById("main").innerHTML += "<hr>" + i; // Ne fonctione pas ...A revoir
    var myNumber = i;
    console.log(myNumber);
    i++;
  }, 1000);
});

btn4.addEventListener("click", function(){
  clearInterval(myInterval);
});



/*
    Objectif  :  
       énoncé    : 
        1.....   
        2.....   
        ----------------------------------------------------------------------------------------
        Evolution : 
        1. grande étape 
            - petite étape.
            - petite étape.
        2.etc.   
        FIN
        --
*/
/*
    Methodes/Fonctions  :
    
    Element.remove()               La Element.remove()méthode supprime l'élément du DOM.
    --
    String.prototype.replaceAll() Permet de remplacer des carractères dans un String.
    ->  retourne -> -------------- Nouveau String
    ->  arg      -> -------------- Carractère recherché
    ->  arg 2    -> -------------- Carractère de remplacement
    ->  exemple  -> -------------- "aabbcc".replaceAll("b", ".");   // 'aa..cc'
    --
    String.prototype.toLowerCase() 
    ->  retourne -> -------------- renvoie la valeur de la chaîne d'appel convertie en minuscules.
    --
    EventTarget.addEventListener() Configure une fonction qui sera appelée chaque fois que l'événement spécifié est livré à la cible.
    ->  retourne -> -------------- ?
    ->  arg      -> -------------- évènement visé pour que la fonction soit appelée
    ->  arg 2    -> -------------- fonction appelé à chaque fois que l'élément est visé
    ->  exemple  -> -------------- emailInput.addEnventListener("input", checkEmail)
    ->  /!\      -> -------------- L'argument 1 attend le type d'événement. Cela peut prêter à confusion quand le nom de l'évènement est un nom de champ(ex : input) ce qui veut dire : quand l'utilisateur écrit dans le champs ou le modifie.Quand l'évènement est click c'est plus clair, mais dans les deux cas c'est un évènement.Voici à quoi il faut faire référence : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
    ->  /!\      -> -------------- L'argument 2 attend la fonction sans les parenthèses. La fonction sera alors déclanchée qu'au moment ou le Listener renvoie True.
    --          
    document.getElementById() ---- Permet de sélectionner un élément par son ID
    ->  retourne -> -------------- Un object
    ->  exemple  -> -------------- var objMain = document.getElementById("main");
    --                           
    createElement() -------------- Permet de créer un élément HTML
    ->  arg      -> -------------- tagName/nom de l'élément
    ->  retourne -> -------------- Un nouvel élément.
    ->  exemple  -> -------------- var email = document.createElement("input");
    --     
    Element.append() -------------- Ajoute du contenu à l'intérieur et à la fin d'un élément.
    ->  arg      ->  -------------- Elément à ajouter
    ->  retourne ->  -------------- ?
    ->  exemple  ->  -------------- emailLabel.append(emailInput);
    --     
    Element.prepend() ------------- Ajoute du contenu à l'intérieur et au début d'un élément.
    ->  arg      ->  -------------- Elément à ajouter
    ->  retourne ->  -------------- ?
    ->  exemple  ->  -------------- emailLabel.prepend(emailInput); 
    --    
    NomDeLaMethode() -------------- Utilité principale
    ->  arg      ->  --------------
    ->  retourne ->  --------------
    ->  exemple  ->  --------------
*/
/*
    Propriétés/Variables  :  
    HTMLElement.innerText --------- Renseigne du contenu dans un élément HTML
    ->  exemple  -> --------------- emailLabel.innerText = "Enter your email";
    --  
    HTMLElement.innerHTML --------- Renseigne du contenu HTML dans un élément HTML
    ->  exemple  -> --------------- var emailDiv = `<div></div>`;
    ->           -> --------------- emailDiv.innerHtml = `<strong>Texte ...</strong>`;
    -> /!\       -> --------------- innerHTML n'attends que du String qui sera transformé par le navigateur en HTML. On ne peut donc pas lui affecter comme valeur un Object. 
    -> à noter   -> --------------- Il est préférable de créer des Objects et ensuite de travailler avec eux comme on veut, plutôt que de faire un bloc d'HTML qu'on ne pourra pas modifier. 
    --  
    NomDeLaPropriété      : Utilité principale
    ->  exemple  ->

Instructions  :  
return ------------------------ L'instruction return met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante. mais ici nous l'utilisons pour interompre un fonction.
-> Une fonction s'arrête immédiatement à l'instant où l'instruction return est traitée.
->  exemple  -> 
/* -------------------------------------------------------
function compteur() {
    for (var compte = 1; ; compte++) {  // boucle infinie
      console.log(compte + "A"); // jusqu'à 5
        if (compte === 5) {
          return;
        }
        console.log(compte + "B");  // jusqu'à 4
      }
    console.log(compte + "C");  // cette instruction n'est jamais utilisée
  }
  
  compteur();
  
  // Résultat dans la console :
  // 1A
  // 1B
  // 2A
  // 2B
  // 3A
  // 3B
  // 4A
  // 4B
  // 5A
------------------------------------------------------- */
/*
    Bonnes pratiques : 
    Pour une application ou même de manière générale, le main n'est utilisé qu'une seule fois.            -
    --> Amélioration 00 
        /P\ ... ?
        /S\ ...
        /!\ ...
*/