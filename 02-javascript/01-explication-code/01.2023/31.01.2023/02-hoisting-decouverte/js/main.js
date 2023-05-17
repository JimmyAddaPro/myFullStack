// Hoisting is the mechanism of moving the variables and functions declaration to the top of the function scope (or global scope if outside any function).
// Le levage est le mécanisme de déplacement de la déclaration des variables et des fonctions vers le haut de la portée de la fonction (ou de la portée globale si elle est en dehors de toute fonction).
//---------------------------------------------------------------------------------------
// E - 3 : DEBUT
// touteBete();
// touteSmart();
// E - 3 : FIN

// E - 1 : DEBUT
function touteBete(){
  console.log("JE SUIS SMART");
}
var touteSmart = function(){
  console.log("JE SUIS BETE");
}
// E - 1 : FIN

// E - 2 : DEBUT
touteBete();
touteSmart();
// E - 2 : FIN

/*
 Ce qu'il faut comprendre c'est que l'interpréteur lis d'abord les fonctions, puis les mets en mémoire, pour enfin relire le fichier depuis le début.

Ici dans notre fichier nous voyons que la fonction touteSmart est déclaré sous forme de variable. c'est pour cela qu'elle n'est pas lu quand on l'éxécute avant sa propre déclaration.

La question est : Dans quel cas utiliser une déclaration de fonction par une variable (Comme nous faisons ici avec touteSmart)?
// E - 4 : DEBUT
Ecrire dans la console du navigateur : 
function touteBete(){
  console.log("nouvelle utilisation de touteBete");
}
touteBete()
// Nous pouvons donc la modifier à partir de la console !

// E - 4 : FIN
// E - 5 : FIN
Modifier var touteSmart, par const touteSmart. Vérifier que l'étape 3 est commenté et que l'étape 2 est décommenté.

écrire function touteSmart(){
  console.log("nouvelle utilisation de touteSmart");
}
Nous ne pouvons pas le modifier dans la console !
// E - 5 : FIN ✊ 
*/ 
/*
    Objectif  :  
       énoncé    : Découverte du Hoisting.
*/