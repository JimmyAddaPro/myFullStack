// Etape 1 : récupération de l'élément #main.
var appDiv = document.getElementById("main") ;

// Etape 2 : Création du formulaire depuis init() 
init();
function init(){
    // Création Objets HTML pour le formulaire :
        // Email
        var emailDiv = document.createElement("div");           // <div></div>
        var emailLabel = document.createElement("label");       // <label></label>
    
        // Mdp
        var passDiv = document.createElement("div");           
        var passLabel = document.createElement("label");     

        // Btn
        var btnDiv = document.createElement("div");           
        var btn = document.createElement("button");             // <button></button>
  
    // Imbrication des futurs éléments HTML pour le formulaire : 
    
    // Procédure 1 : non fonctionnelle.  
        // emailLabel.innerText = "Enter your email";
        // var emailInput = document.createElement("input");
        // emailLabel.innerText += emailInput;
        // emailDiv.innerText += emailLabel;
        // appDiv.innerText = emailDiv; // Nous avons [object HTMLDivElement] qui est affiché.
    // Procédure 2 :
        // Email
        emailLabel.innerText = "Enter your email";              // <label>Enter your email</label>
        var emailInput = document.createElement("input");       // <input />
        emailLabel.append(emailInput);                          // <label>Enter your email <input /></label>
        emailDiv.append(emailLabel);                            // <div><label>Enter your email <input /></label></div>
        // Mdp
        passLabel.innerText = "Enter your Password";            
        var passInput = document.createElement("input");        
        passLabel.append(passInput);                            
        passDiv.append(passLabel);                              
       // Btn
        btn.innerText = "Login Please";
        btnDiv.append(btn);
        
    // Affichage :  
        appDiv.append(emailDiv);            
        appDiv.append(passDiv);  
        appDiv.append(btnDiv);  


}











/*
    Objectif  :  
    1. Création d'un formulaire avec e-mail, mot de passe et boutton depuis JS. 
    2. Récupération des informations donnés par l'utilisateur.
    3. Traitement des informations.

    Evolution : 
    1. Création de l'élément div#main dans index.html
    2. recupération sous forme d'Object de cet élément via getElementById("main")
    3. Création et execution de la fonction init() : Sans code au début.
    4. Création du formulaire : éléments input, label, div, button dans la fonction init()
*/
/*
    Methodes/Fonctions  : 
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
    Propriétés/Variables  :innerText  
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
*/
/*
    Bonnes pratiques : 
    Pour une application ou même de manière générale, le main n'est utilisé qu'une seule fois.
*/