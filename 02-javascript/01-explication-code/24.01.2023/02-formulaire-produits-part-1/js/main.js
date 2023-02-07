// E-3.2 - DEBUT
const Categories = [
  {value: " ", text: "--Choose a category--"},
  {value: "Sport",    text: "Sport"},
  {value: "Casual",   text: "Casual"},
  {value: "Evening",  text: "Evening"},
  {value: "Relax",    text: "Relax"}
]; 
// E-3.2 - FIN
// E-4.1 - DEBUT
const Products = [];
// E-4.1 - FIN
// E-1.5 - DEBUT
createForm();
// E-1.5 - FIN
// E-1.4 - DEBUT
function createForm(){
  var model = myInput("model-input", "Enter the model name", "text");
  var brand = myInput("brand-input", "Enter the brand brand", "text");
  var price = myInput("price-input", "Enter the price", "number");
// E-3.3 - DEBUT
  var categories = mySelect("category-select", "", Categories);
// E-3.3 - FIN
  var sale = myInput("sale-input", "", "checkbox", "form-check-input");//Class bootstrap
  // E-1.8 - DEBUT
  var btn = myButton("submit", "", "Add a product",  addProduct);
  // E-1.8 - FIN
  var formDiv = document.getElementById("form-div");
  /* à écrire à l'E-1.4 :
  formDiv.append(model.div, brand.div, price.div, sale.div);
  */ 

  // E-1.7 - DEBUT
  //formDiv.append(model, brand, price, sale); 
  // E-1.7 - FIN

  // E-2.2 - DEBUT
  // formDiv.append(model, brand, price, sale, btn); 
  // E-2.2 - FIN

  // E-3.4 - DEBUT
  formDiv.append(model, brand, price, categories, sale, btn); 
  // E-3.4 - FIN

  // E-2.1 - DEBUT
  function addProduct(){
      console.log("added a product. Et ça c'est cool dans la vie.");
  }
  // E-2.1 - FIN

}
function myInput(_id, _placeholder, _type, _class = ""){ // L'id, le placeholder et le type sont ajouté par des paramètres/arguments. On ajoute après le paramètre _class un ="" afin qu'il est une valeur par défaut afin de ne pas avoir d'indefined si nous ne le renseignons pas.
  /*
    Version avec object - à écrire à l'E-1.4, commenté à E-1.6 
          var obj = {}
          obj.div = document.createElement("div");
          obj.input = document.createElement("input");
          obj.input.className = "form-control" + _class;
          obj.input.id = _id;
          obj.input.placeholder = _placeholder;
          obj.input.type = _type;
          // --
          obj.div.append(obj.input);
          obj.div;  
          console.log(obj);
          return obj;
  */   
  // E-1.6 - DEBUT : version avec variables

    var div = document.createElement("div");
    var input = document.createElement("input");
    input.className = "form-control" + _class;
    input.id = _id;
    input.placeholder = _placeholder;
    input.type = _type;
    div.append(input);  
    //console.log(div);
    return div;
  // E-1.6 - FIN
} 
// E-1.4 - FIN
// E-3.1 - DEBUT
function mySelect(_id, _class = "", _arr){
  var div = document.createElement("div");
  var select = document.createElement("select");
  select.className = "form-select" + _class;
  select.id = _id;
  // E-3.3 - DEBUT
  for (let i = 0; i < _arr.length; i++) {
    const opt = _arr[i];
    var option = document.createElement("option");
    option.value = opt.value;
    option.innerText = opt.text; 
    select.append(option);
  }
  // E-3.3 - FIN
  div.append(select);  
  return div;
} 
// E-3.1 - FIN
// E-1.8 - DEBUT
function myButton(_id, _class = "", _text,  _callback){ 
  var div = document.createElement("div");
  var btn = document.createElement("button");
  btn.className = "btn btn-success" + _class;
  btn.innerText = _text;
  btn.id = _id;
  btn.addEventListener("click", _callback); // Au clique de btn, execution du callback(une fonction passée en pramètre/argument).
  div.append(btn);  
  return div;
} 
// E-1.8 - FIN
/*
    Objectif  :  
       énoncé    : 
        1.....   
        2.....   
        ----------------------------------------------------------------------------------------
        Evolution : 
        1. Création du formulaire - Structure du formulaire - Eléments input et btn.
        ---------------------------------------------------------------
            1.1- ajout ds bootstrap derniere version -> cdn -> Css pour styliser rapidement. 
            1.2- ajout ds bootstrap derniere version -> cdn -> js  pour que le js bootstrap fonctionne. 
            1.3- Ecriture de la partie non dynamique du html en dure. 
            1.4- Création de la fonction createForm() et myInput(). Codage/remplissage de myInput() et ensuite de createForm().
            1.5- Execution de la fonction creatForm().
            1.6- Revenons pour l'instant à une écriture plus simple de la fonction myInput() en passant par des variables plutôt que par un object. Par la suite nous reviendrons à l'object.
            1.7- Modification des arguments de formDiv.append(...).    
                /!\         ->   version 1.4 : formDiv.append(model.div, brand.div, price.div, sale.div);
                /!\         ->   version 1.7 : formDiv.append(model, brand, price, sale); 
                Explication ->   Les arguments ne sont plus des objects mais des HTMLDivElement. Pour vérifier, dans la fonction myInput(), faire un console.log(div); avant le return.
            1.8- Création du bouton avec la fonction myButton(). 
                /!\         ->   La fonction myButton() ressemble à myInput() mais contient des différences. Par exemple, le paramètre _callback etc.
            1.9- Execution de la fonction myButton() avec ses arguments.
                /!\         ->   L'arg callback fait appel à addProduct() qu'il faut tout de suite créer(Voir 2.1).
                /!\         ->   En tant qu'argument de myButton(), addProduct() s'écrit sans les parenthèses. Pourquoi ? Pour qu'addProduct() s'exécute au moment de l'évènement "click", et non au moment de l'exécution de la fonction addProduct().

        2. Création du formulaire - Quand on clique sur le btn (partie 1).
        ------------------------------------------------------------------   
            2.1- Création de la fonction addProduct(). Pour l'instant elle ne fait qu'écrire un message "added a product" dans la console.
            2.2- Ajout de l'argument btn à formDiv.appen().
                /!\         ->   version 1.7 : formDiv.append(model, brand, price, sale); 
                /!\         ->   version 2.2 : formDiv.append(model, brand, price, sale, btn);
        3. Création du formulaire - Elément select option. 
        -----------------------------------------------------------
            3.1- Création de la fonction mySelect(). Le paramètre _arr attend un Array. Cet Array contiendra des ojects contenant la value et le contenu de chaque option.
                /!\         ->   La boucle for est insérée à l'étape 3.3.
            3.2- Création de l'Array -> const categories... avant createForm() pour qu'il soit défini avant d'être appelé. Effectivement, mySelect() est éxécutée dans createForm().
            3.3- ajout dans la fonction mySelect() de la boucle for pour parcourir Array et ajouter les options à l'intérieur du select.
            3.4- Ajout de l'argument categories à formDiv.appen().   
                /!\         ->   version 2.2 : formDiv.append(model, brand, price, sale, btn);  
                /!\         ->   version 3.4 : formDiv.append(model, brand, price, categories, sale, btn); // On déclare categories avant le sale, simplement pour qu'il apparaîsse avant le sale.
        4. Création du formulaire - Quand on clique sur le btn (partie 2). 
        -----------------------------------------------------------
        Suite dans la deuxieme partie.
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
    Bonnes pratiques / Conventions: 
    -Le nom d'une constante commence par un majuscule.
    -Les paramètres d'une fonction ont comme préfixe un underscore, afin de les reconnaître rapidement et de ne pas les confondre avec le nom d'une propriété/variable.
   
    -Par convention, le callback d'un addEvenListener() s'appelle toujours callback. S'il est dans une fonction, pour faire appel au paramètre, il s'appellera _callback. Voir myButton E-1.8.
    
    -Pour une application ou même de manière générale, le main n'est utilisé qu'une seule fois.

    --> Amélioration 00 
        /P\ ... ?
        /S\ ...
        /!\ ...
*/