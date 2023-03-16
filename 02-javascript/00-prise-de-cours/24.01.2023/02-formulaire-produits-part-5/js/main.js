// E-3.2 - DEBUT
const Categories = [
  {value: "",   text: "--Chose a categorie--"},
  {value: "Sport",    text: "Sport"},
  {value: "Casual",   text: "Casual"},
  {value: "Evening",  text: "Evening"},
  {value: "Relax",    text: "Relax"}
]; 
// E-3.2 - FIN
// E-4.1 - DEBUT
// const Products = [];
// E-6.1 - DEBUT
const Products = [
  {model : "Nike Air Force", brand : "Nike", price : "280", category : "Sport"},
  {model : "Levi's 501", brand : "Levi's", price : "199", category : "Usual"},
  {model : "Stan Smith", brand : "Adidas", price : "189", category : "Sport"},
  {model : "Casquette", brand : "Dolce & Gabbana", price : "380", category : "Relax"},
  {model : "Babydoll Brigerton", brand : "Manoush", price : "440", category : "Evening"},
  {model : "Polo Classique", brand : "Lacoste", price : "180", category : "Relax"},
];
// E-6.1 - FIN
// E-4.1 - FIN
// E-6.2 - DEBUT
function init (){
  for(let i = 0; i < Products.length; i++){
    const obj = Products[i];
    createCard(obj); 
  }
}
// E-6.2 - FIN
// E-5.9.1 - DEBUT
const MainDiv = document.getElementById("main");
const MainDivRow = document.getElementById("row-main");
// E-5.9.1 - FIN
// E-6.3 - DEBUT
init();
// E-6.3 - FIN
// E-1.5 - DEBUT
createForm();
// E-1.5 - FIN
// E-1.4 - DEBUT
function createForm(){
  var model = myInput("model-input", "Enter the model name", "text");
  var brand = myInput("brand-input", "Enter the brand", "text");
  var price = myInput("price-input", "Enter the price", "number");
// E-3.3 - DEBUT
  var categories = mySelect("category-select", "", Categories);
// E-3.3 - FIN
  var sale = myInput("sale-input", "", "checkbox", "form-check-input");//Class bootstrap
  // E-1.9 - DEBUT
  var btn = myButton("submit", "btn-success", " Add a product",  addProduct, "fa-plus"); // // E-5.8 - DEBUT & FIN : ajout de btn-success et d'un icon
  // E-1.9 - FIN
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
  //formDiv.append(model, brand, price, categories, sale, btn); 
  // E-3.4 - FIN
  // E-4.4 - DEBUT
  formDiv.append(model.div, brand.div, price.div, categories.div, sale.div, btn);
  // E-4.4 - FIN
  // E-2.1 - DEBUT
  function addProduct(){
    /* à écrire à l'E-2.1 
      console.log("added a product. Et ça c'est cool dans la vie.")
    */
     // E-4.2 - DEBUT
      // var obj = {};
      // obj.model = model.querySelector("input").value;
     // E-4.2 - FIN
     // E-4.5 - DEBUT
      var obj = {};
      obj.model = model.input.value;
      obj.brand = brand.input.value;
      obj.price = price.input.value;
      obj.category = categories.select.value; // On remarque que le nom de la propriété est category afin de ne pas confondre.
      //if(obj.model && obj.brand && obj.price && obj.category) // à écrire à 4.5. Si les champs sont remplient.
      if(validateForm(obj))// E-4.5 - DEBUT & FIN 6.6.6
      {
        Products.push(obj); // Pour ajouter l'Object produit à l'Array Products
        // E-5.9.3 - DEBUT
        createCard(obj);
        // E-5.9.3 - FIN
        model.input.value = ""; //Permet de vider le champ après l'ajout
        brand.input.value = ""; //Permet de vider le champ après l'ajout
        price.input.value = ""; //Permet de vider le champ après l'ajout
        categories.select.value = ""; //Permet de vider le champ après l'ajout
        // /S\ Solution simple à 6.5
        // model.input.classList.remove("red-border");
        // brand.input.classList.remove("red-border");
        // price.input.classList.remove("red-border");
        // categories.select.classList.remove("red-border");
       
      }
      /*
      else{
        // alert("All fields are required"); // A écrire à E-4.5
        // E-4.6 - DEBUT
        //redBorder(obj);
        // E-4.6 - FIN
        // E-6.6.1 - DEBUT
        //validateForm(obj);
        // E-6.6.1 - FIN
      }
      */
     // E-4.5 - FIN
     // E-4.7 - DEBUT - à 4.7 ne rien écrire à l'intérieur des accolades de redBorder().
     //function redBorder(x){ // Avant E-6.6.2 validateForm() se nomme redBorder()
      //Error handling
      function validateForm(x){ // E-6.6.2 - DEBUT & FIN // redBorder() devient validateForm
        var valid = true; // E-6.6.3 - DEBUT & FIN 
     // E-6.4 - DEBUT
      if(!x.model){ //S'il n'y a pas de valeur 
        valid = false; // E-6.6.4
        model.input.classList.add("red-border"); //Un peu comme className, sans l'affectation, mais avec la methode add(), permet d'ajouter une class CSS. 
      } else{
        model.input.classList.remove("red-border");
      }
      if(!x.brand){
        brand.input.classList.add("red-border"); // Un peu comme className, sans l'affectation, mais avec la methode add(), permet d'ajouter une class CSS. 
        valid = false; // E-6.6.4
      } else{
        brand.input.classList.remove("red-border");
      }
      if(!x.price){
        price.input.classList.add("red-border"); //Un peu comme className, sans l'affectation, mais avec la methode add(), permet d'ajouter une class CSS. On peut ajouter plusieurs class CSS en séparant avec des virgules : classList.add("red-border", "...") 
        valid = false; // E-6.6.4
      } else{
        price.input.classList.remove("red-border");
      }
      if(!x.category){
        categories.select.classList.add("red-border"); //Un peu comme className, sans l'affectation, mais avec la methode add(), permet d'ajouter une class CSS. 
        valid = false; // E-6.6.4
      } else{
        categories.select.classList.remove("red-border");
      }
     // E-6.4 - FIN
     return valid; // E-6.6.5
     }
     // E-4.7 - FIN
     
  }
  // E-2.1 - FIN
}
// E-5.1 - DEBUT - Vide au  début. Coder à partir de E-5.3
function createCard(obj){
  // E-5.3 - DEBUT
  var article = document.createElement("article"); 
  article.className = "card col-md-2";
  
  var div = document.createElement("div");
  div.className = "card-body";

  var h5 = document.createElement("h5");
  h5.className = "card-title model-name";
  h5.innerText = obj.model;

  var pBrand = document.createElement("p");
  pBrand.className = "card-text brand-name";
  pBrand.innerText = obj.brand;
  

  var pPrice = document.createElement("p");
  pPrice.className = "card-text price-name";
  pPrice.innerText = obj.price;
  

  var pCategory = document.createElement("p");
  pCategory.className = "card-text category-name";
  pCategory.innerText = obj.category;
  // E-5.3 - FIN

  // E-5.4 - DEBUT
  var btn = myButton("", "btn-primary", " " + obj.price, buyNow, "fa-basket-shopping"); // On souhaite ajouter le prix en texte du btn qu'on concataine avec un espace. Le callback est buyNow. à E-5.6, on ajoute la class CSS  fa-basket-shopping(ou une autre au choix).
  // E-5.4 - FIN
  // E-5.9.2 - DEBUT - Les appends tous ensemble dans cette fonction.
  div.append(h5, pBrand, pPrice, pCategory, btn);
  article.append(div);
  MainDivRow.append(article);
  // E-5.9.2 - FIN 
}
// E-5.1 - FIN
// E-5.4.1 - DEBUT
function buyNow(){
console.log(this);
}
// E-5.4.1 - FIN
function myInput(_id, _placeholder, _type, _class = ""){ // L'id, le placeholder et le type sont ajouté par des paramètres/arguments. On ajoute après le paramètre _class un ="" afin qu'il est une valeur par défaut afin de ne pas avoir d'indefined si nous ne le renseignons pas.
    //Version avec object - à écrire à l'E-1.4, commenté à E-1.6, décommenté à E-4.2: 
          var obj = {}
          obj.div = document.createElement("div");
          obj.input = document.createElement("input");
          obj.input.className = "form-control" + _class;
          obj.input.id = _id;
          obj.input.placeholder = _placeholder;
          obj.input.type = _type;
          // --
          obj.div.append(obj.input); 
          // console.log(obj);
          return obj;   
  // E-1.6 - DEBUT : version avec variables
  /*
  var div = document.createElement("div");
  var input = document.createElement("input");
  input.className = "form-control" + _class;
  input.id = _id;
  input.placeholder = _placeholder;
  input.type = _type;
  div.append(input);  
  //console.log(div);
  return div;
  */
  // E-1.6 - FIN
} 
// E-1.4 - FIN
// E-3.1 - DEBUT
/*
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
*/
// E-3.1 - FIN
// E-4.3 - DEBUT - réécriture de mySelect()
function mySelect(_id, _class = "", _arr){
  var obj = {};
  obj.div = document.createElement("div");
  obj.select = document.createElement("select");
  obj.select.className = "form-select" + _class;
  obj.select.id = _id;
  for(let i = 0; i < _arr.length; i++){
    const opt = _arr[i];
    var option = document.createElement("option");
    option.value = opt.value;
    option.innerText = opt.text;
    obj.select.append(option);
  }
  obj.div.append(obj.select);
  return obj;
}
// E-4.3 - FIN
// E-1.8 - DEBUT 
function myButton(_id, _class = "", _text,  _callback, _icon){  // E-5.5 arg _icon
  var div = document.createElement("div");
  var btn = document.createElement("button");
// E-5.7 - DEBUT 
  if(_icon){
    var i = document.createElement("i");
    i.className = "fa-solid " + _icon;
    btn.append(i);
  }
// E-5.7 - FIN
// E-5.8 - DEBUT 
var span = document.createElement("span");
  // btn.innerText = _text; // E-1.8
  span.innerText = _text;
  
  // btn.className = "btn btn-success" + _class; // E-1.8
  btn.className = "btn " + _class;

  btn.id = _id;
  btn.append(span);
  
// E-5.8 - FIN 

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
            4.1- Création de la constante Products. Cet Array contiendra tous les produits, sous forme de liste d'Objects, qu'on ajoutera via le formulaire.
            4.2- Nous souhaitons ajouter les values des inputs à l'Array. Le problème, c'est que l'input est compris dans div. Il faut donc, par exemple, écrire cela dans addProduct() pour recupérer une value : 
                façon 1 -> function addProduct() { var obj = {}; obj.model = model.querySelector("input").value }
              plutôt que : 
                façon 2 -> function addProduct() { var obj = {}; obj.model = model.value }
              On preferera la deuxieme façon. Nous devons donc dans myInput() retourner un object et revenir à l'E-1.4 pour décommenter. Et donc commenter E-1.6.
            4.3 Pareil avec mySelect(). Il faut qu'elle aussi retourne un object.
            4.4- modifications des arguments dans formDiv.appen().   
                /!\         ->   version 3.4 : formDiv.append(model, brand, price, sale, btn);  
                /!\         ->   version 4.4 : formDiv.append(model.div, brand.div, price.div, categories.div, sale.div, btn); // Le btn restera comme ça et n'a pas vocation à évoluer, nous pouvons le laisser sous forme de variable HTMLDivElement.
            4.5- Ecriture du "vrai" code de la fonction addProduct(). 
                /!\         ->   Pour voir si cela fonctionne, écrire Products dans la console afin de voir si l'Array a bien ajouté l'Object.
            4.6- Toujours dans addProduct(), ajouter else {redBorder(obj);} 
            4.7- Création de la fonction redBorder(x){//Error handling }. Cette fonction a pour objectif d'ajouter une bordure rouge au champ qui n'est pas renseigné par l'utilisateur. Pour l'instant, nous la laissons vide.5.6
            -----------------------------------
        5. Création du formulaire - Quand on clique sur le btn (partie 3 : Affichage produits).
        -----------------------
            5.1- Création de la fonction createCard(obj){}
            5.2- Modification de la structure de div#main et ajout d'une card/product en dure(HTML) en utilisant les class de bootstrap puis commenter la partie qui sera dynamique(<article></article>).
            5.3- Ajout dans createCard() des éléments HTML
            5.4- Ajout dans createCard() du btn. Nous réutulisons la fonction myButton().
            5.4.1 Création de la fonction buyNow() qui est le callback du nouveau myButton().
            5.5- Amélioration de myButton() avec un nouvel arg qui permet de renseigner un icon au btn.
            5.6- ajout du cdn font-awesome.()
              -> Récupération d'un icon sur font awesome. Ex : <i class="fa-solid fa-basket-shopping"></i>
              /!\         ->   En réalité nous n'avons besoin que de prendre connaissance du nom de class CSS ainsi que du nom de l'élémént. Aussi, nous remarquons que l'élément i qui fera apparaître l'icon de notre choix contiendra deux class CSS. La premiere CLASS est toujours la même : fa-solid, nous la renseignons en dure dans le code. la deuxième class dépend de l'icon choisie, il faut donc un arg supplémentaire à notre fonction myButton().
            5.7 Création de l'élément i avec les class CSS : 
              -> Class CSS 1 "fa-solid" en dure
              -> Class CSS Dynamique.   
            5.8 Quelques petites modification dans la fonction myButton().
            -> Ajout d'un élément span à qui on append le texte.
            -> Par conséquent le span est append a btn. 
            -> On enleve la class CSS en dure "btn-success". On la passe en argument au moment de l'éxecution de myButton() dans createForm()
            -> au même endroit(ds l'execution de myButton() dans createForm()), ajout d'un icon en argument. 
            5.9.1 Création des constantes MainDiv et MainDivRow qui contiendront le getElementBy... pour integrer le contenu de creatCard 
            5.9.2 On revient dans createCard() et on append tous les éléments dans l'article et ensuite l'article au div.row lui même déjà présent dans le main.
            5.9.3 Execution de createCard() dans addProduct()
            5.9.4 Ajout de CSS pour l'affichage des produits
            ----
            Le résulat HTML attendu :
            ------------------------- 
            <div>
              <button id="mon-id" class="btn btn-success ma-class">
                <i class="fa-solid basket"></i><span>Envoyer</span>
              </button>
            </div>
            ----
        6. Affichage des produits éxistants.
        -----------------------
          6.1- Création de produits en dure dans l'Array Products. 
          /!\- 
              -> const Products = [];
              devient 
              -> const Products = [{model : "Nike Air Force", brand : "Nike", price : "280", category : "Sport"},...];
          6.2- Création d'une fonction init() qui contient une boucle for. la boucle for parcourt Products et éxecute createCard() à chaque tour de boucle. 
              -> La boucle for a cet avantage qu'elle nous évite de faire une condition if() pour controler s'il y a des produits déjà éxistant. Elle parcourt si ça existe. Si ça n'existe pas elle ne parcourt pas d'elle même.
          6.3- Execution de init() après MainDivRow. 
              -> Pourquoi ? Parce que createCard() ajoute du HTML à MainDivRow, cad dans l'index.html. il faut donc que MainDivRow existe avant que createCard soit appelé.
          6.4- Amélioration de la fonction redBorder(). 
            -> Si le champ est vide, ajout de class CSS "red-border" à l'input via classList.add() sinon classList.remove() de cette class.
          6.5- Ajout dans le CSS de la class .red-border et de son style.
          /P\ -> Problème en trois étapes :
              étape 1 : Valider le formulaire en oubliant de renseigner un ou plusieurs champs. la bordure des champs non renseigné devient rouge.
              étape 2 : renseigner les champs vide 
              étape 3 : La card/produit s'ajoute correctement mais les bordures restent rouge. 
          /S\ -> Solution simple : Nous pouvons ajouter dans le else après avoir vidé les champs.  Voici le code à ajouter :
                    model.input.classList.remove("red-border");
                    brand.input.classList.remove("red-border");
                    price.input.classList.remove("red-border");
                    categories.select.classList.remove("red-border");
          
          6.6- Transformation de redBorder() en validatForm.
              6.6.1- redBorder(obj);  devient validateForm(obj);
              6.6.2- redBorder(x){    devient validateForm(x){
                  /!\ -> On ne modifie que le nom à chaque fois
              6.6.3- ajout de var valid = true;
              6.6.4- ajout de tous les valid = false; dans chaque if(!x....){...}
              6.6.5- ajout de return valid;
              6.6.6- 
              on modifie/remplace :  
                    if(obj.model && obj.brand && obj.price && obj.category)
              par :
                    if(validateForm(obj))
              - FIN DE PART 4 - 
              Nous continuons sur un autre exercice pour comprendre quelque chose et nous revenons faire l'ajout au panier. On sarrette ) 2.10.30 et nous reprenons à 
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
    Element.classList ------------------- propriété en lecture seule qui renvoie une DOMTokenList(sorte de Array) collection dynamique des class attributs de l'élément. Cela peut ensuite être utilisé pour manipuler la liste des classes. L'utilisation classList est une alternative pratique à l'accès à la liste des classes d'un élément sous la forme d'une chaîne délimitée par des espaces via element.className.
    ->  /Différence\      ->  className : "valeur-1 valeur-2 valeur-3"
    ->  /Différence\      ->  classList : ["valeur-1", "valeur-2", "valeur-3"]
    ->  /Exemple\      ->  écrire dans la console MainDiv.className et ensuite MainDiv.classList.
    ->  /Exemple\      ->  Pour ajouter une valeur écrire : MainDiv.classList.add("valeur-4"). Cela ajoute une class CSS. Cela resemble au push pour l'Array.   


    ->  /?\      ->  -------------- Lecture seule ?
    ->  /R\      ->  -------------- Pas encore de réponse
    ->  /?\      ->  -------------- DOMTokenList ?
    ->  /R\      ->  -------------- Pas encore de réponse
    

    NomDeLaMethode() -------------- Utilité principale Element.
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