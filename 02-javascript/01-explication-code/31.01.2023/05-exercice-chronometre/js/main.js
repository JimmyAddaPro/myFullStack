// Constante $, qui représente de DOM(Document Object Model). Plus simplement, c'est l'endroit de création des différents éléments nécessaire à notre exercice.
const $ = {
// 1 : création des btn
  start:document.createElement("button"),
  stop:document.createElement("button"),
  reset:document.createElement("button"),
// 2 : Création des éléments d'affichage : secondes, minutes, heures, des "deux points" qui séparent, des zones A & B
  sec:document.createElement("span"),
  min:document.createElement("span"),
  hours:document.createElement("span"),
  colon1:document.createElement("span"),
  colon2:document.createElement("span"),
  zoneA:document.createElement("div"),
  zoneB:document.createElement("div"),
  main:document.getElementById("main"),
}
// 6 : Création de l'Objet Timer qui contiendra toutes les propiétés et les fonctions necessaire au Timer.
const Timer = {
  s: 0,
  m: 0,
  h: 0,
  int: null,
  start: function(){
// 8.0: Execution de la fonction theLogic(). à l'étape suivante nous créons cette fonction. Comme le code que contiendra cette fonction est complexe, on preferera l'éxterioriser, par propreté du code, afin de bien séparer chaque chose. 
theLogic();

// 6.7 : Enleve la possibilité de "Starter" si le chrono/timer est déjà en marche.
    $.start.removeEventListener("click", Timer.start);
// 6.9 : Si on clique X fois sur le btn "stop", il executera X fois $start.addEvenListener(click, Timer.start). Si bien que si nous cliquons une fois sur le btn start cela executera X fois la fonction Timer.start. Il nous faut lui dire qu'au clique du btn "start" tu n'executes qu'une fois le code qui est dans la fonction start. Meir explique je crois que le fait de faire  $stop.addEventListener("click", Timer.stop); résout le probleme, je ne comprend pas pk. pr moi c'est le $.start.removeEventListener("click", Timer.start); qui résout ce problème.
    $.stop.addEventListener("click", Timer.stop);
// 6.10 : Ajout du listener btn reset
    $.reset.addEventListener("click", Timer.reset);
// 7.0 : test
    console.log("Started");
    
  },
  stop: function(){
// 6.5 : ClearInterval permet d'arreter setInterval qu'on écrira par la suite.
    clearInterval(Timer.int);
// 6.9 : Enleve la possibilité de "Stopper" si le chrono/timer est déjà en stop.
    $.stop.removeEventListener("click", Timer.stop);
// 6.12 : MEIR EXPLICATION : serves just to cancel in case it was added in reset : Même faux-probleme je crois que 6.9 : Ici, c'est : quand on clique sur btn reset et ensuite btn stop alors nous faisons 2 addEvenListener click/start. Meir dit que cela pose problème car quand on va appuyer sur btn start les deux listener vont etre "alerté" et la fonction start sera executé 2 fois ou X fois, bref on a compris. La solution de Meir est de remove "au cas où" le addEvenlistener du btn start pour ensuite en refaire un juste après. 
    $.start.removeEventListener("click", Timer.start);
// 6.6 : Possibilité de Start le chrono/timer. 
    $.start.addEventListener("click", Timer.start);
// 7.1 : test 
    console.log("Stopped");
  },
  reset: function(){
// 6.8 : Possibilité de Start le chrono/timer soit au moment du reset,  soit par défaut car init() execute reset(). 
    $.start.addEventListener("click", Timer.start);
// 6.3 : ClearInterval permet d'arreter setInterval qu'on écrira par la suite.
    clearInterval(Timer.int);
// 6.4 : La partie API est remise à 00. Si on ne fait pas ça, le chrono/timer reprendra où il s'est arrété et non à 0.
    Timer.s = 0;
    Timer.m = 0;
    Timer.h = 0;
// 6.1 : L'afichage/La partie HTML revient/est à 00 :
    $.hours.innerText = "00";
    $.min.innerText = "00";
    $.sec.innerText = "00";
// 6.11 : Ajout du remove btn reset : Enleve la possibilité de "Reset" si le chrono/timer est déjà en reset.
    $.reset.removeEventListener("click", Timer.reset);
    // JIMMY $.stop.removeEventListener("click", Timer.stop);
// 7.2 : test
    console.log("Reset");
  }  
}
// 2.1 : Pour la propreté du code nous créons une fonction init qui contiendra les étapes 3 & 4
function init(){
  // 3 : Ajout des éléments, dans les zones A & B et ensuite dans l'index/le navigateur
  $.zoneA.append($.hours, $.colon1, $.min, $.colon2, $.sec);
  $.zoneB.append($.start, $.stop, $.reset);
  $.main.append($.zoneA, $.zoneB);
  // 4 : Ajout, du contenu & des CLASS CSS aux éléments
  $.start.innerText = "Start"; 
  $.start.className = "start"; 
  //--
  $.stop.innerText = "Stop"; 
  $.stop.className = "stop"; 
  //--
  $.reset.innerText = "Reset"; 
  $.reset.className = "reset"; 
  //--
  // $.hours.innerText = "00"; // Couper/coler à l'étape 6.1 dans la fonction reset de l'Objet Timer.
  $.hours.className = "hours"; 
  //--
  // $.min.innerText = "00"; // Couper/coler à l'étape 6.1 dans la fonction reset de l'Objet Timer.
  $.min.className = "min"; 
  //--
  // $.sec.innerText = "00"; // Couper/coler à l'étape 6.1 dans la fonction reset de l'Objet Timer.
  $.sec.className = "sec"; 
  //--
  $.colon1.innerText = ":"; 
  $.colon1.className = "colon1";
  //--
  $.colon2.innerText = ":"; 
  $.colon2.className = "colon2";
  //-- 
  $.zoneA.id = "zoneA";
  //-- 
  $.zoneB.id = "zoneB";
// 6.2 : Execution de la fonction reset de l'objet Timer - pour bien mettre les zéros.
  Timer.reset();
}
// 5 : Mise en forme CSS
// 8.1: Création de la fonction theLogic().
function theLogic(){
  Timer.int = setInterval(function(){
    Timer.s ++; // Augmente les sec API
    //8.2 : Ma solution
    //if(Timer.s == 60) Timer.s = 0;
    $.sec.innerText = Timer.s < 10 ? "0" + Timer.s : Timer.s; // Augmente les sec dans l'Affichage. Nous  pouvons voir un premier resultat !
    // 8.2 :  Solution de Meir
    // if(Timer.s == 59) Timer.s = -1;
    // 8.3 : On suit la logique de Meir pour ne pas se tromper, on réécrit le if avec accolade et le code necessaire.
    if(Timer.s == 59){
      Timer.s = -1;
      Timer.m ++;
      $.min.innerText = Timer.m < 10 ? "0" + Timer.m : Timer.m;
      // 8.4 ...
      if(Timer.m == 59){
        Timer.m = -1;
        Timer.h ++;
        $.hours.innerText = Timer.h < 10 ? "0" + Timer.h : Timer.h;
        //FIN : Une erreur perciste. A 59 on passe à +1. Ma solution dans abbrev.js.
      }
    }
  }, 300);
}
// 2.2 : Execution du init en fin de fichier
init();
/*
    Objectif  :  
       énoncé    : 03:00:00 => 333/01/2023
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