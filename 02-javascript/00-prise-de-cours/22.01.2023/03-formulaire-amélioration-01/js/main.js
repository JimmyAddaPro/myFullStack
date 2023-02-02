var appDiv = document.getElementById("main") ;
//Etape 2.1 Création d'un ou plusieurs USER/Object : 
const user = {
   fName: "Bruce Wayne",
   email: "brucewayne@batmail.com",   
   pass: "whatIDoThatDefinesMe.",   
}
//Fin Etape 2.1
init();
function init(){
        // Elements
        // Email
        var emailDiv = document.createElement("div");       
        var emailLabel = document.createElement("label");
        // Mdp
        var passDiv = document.createElement("div");           
        var passLabel = document.createElement("label");     
        // Btn
        var btnDiv = document.createElement("div");           
        var btn = document.createElement("button");

        // Imbrication
        // Email
        emailLabel.innerText = "Enter your email";              
        var emailInput = document.createElement("input");       
        emailLabel.append(emailInput);
        emailDiv.append(emailLabel);
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
        //Etape 1
        // Display: none
        passDiv.style.display = "none";
        btnDiv.style.display = "none";
        //Etape 2.0
        // Creation des EventListener et des fonctions 
        emailInput.addEventListener("input", checkEmail);
        passInput.addEventListener("input", checkPass);
        btn.addEventListener("click", login);
        function login(){
            // Creer un USER avant d'écrire le code de la fonction login
            //Etape 2.2
            if(emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passInput.value === user.pass){
                alert("Clark Kent is Superman !");
                goToDashBoard()
            }
            else{
                alert("Wrong credentials");
            }

        }

        function checkEmail(){
            if(emailInput.value.includes("@") && emailInput.value.includes(".com")) {
                 passDiv.style.display = "block"; // Passe en block si condition True
            }
            else{
                passDiv.style.display = "none"; // Repasse en none si condition False. Le else permet d'enlever le champs s'il l'utilisateur efface.
            }
        }
        function checkPass(){
            if(passInput.value.includes(".") && passInput.value.length > 7) {
                 btnDiv.style.display = "block"; // Passe en block si condition True
            }
            else{
                btnDiv.style.display = "none"; // Repasse en none si condition False. Le else permet d'enlever le champs s'il l'utilisateur efface.
            }
        }
        
    } 
    // Etape 3
    function goToDashBoard(){
        // Suite dans amélioration 02
    }

/*
    Objectif  :  
    01. Création d'un formulaire avec e-mail, mot de passe et boutton depuis JS. 
    02. Récupération des informations donnés par l'utilisateur.
    03. Début de traitement des informations.

    Evolution : 
    00 -- introduction.
        1. Création de l'élément div#main dans index.html
        2. recupération sous forme d'Object de cet élément via getElementById("main")
        3. Création et execution de la fonction init() : Sans code au début.
    01 -- Création d'un formulaire avec e-mail, mot de passe et boutton depuis JS.
        4. Création du formulaire : éléments input, label, div, button dans la fonction init()
    --> Amélioration 01.
    02 -- Récupération des informations donnés par l'utilisateur 
        5. On passe les éléments input password et button en display : none
        6. Création du addEventListener sur l'input email(emailInput) et de la fonction checkEmail() qui sera déclanchée.
        7. Création du addEventListener sur l'input pass (passInput) et de la fonction checkPass() qui sera déclanchée.
    03 -- Début de traitement des informations.
        8. Création du addEventListener sur le btn et de la fonction login(), -vide pour l'instant, qui sera déclanchée.
        9. Création d'un utilisateur en dure, -nous n'avons pas de bdd.
        10. execution, dans la fonction login, de la fonction goToDashBoard() avec un controle : IF -> l'email et le mdp correctent{ alors goToDashedBoard()} else -> { alert("Mauvais identifiants")}
        11. Création de la fonction goToDashBoard() tout en bas du fichier, en dehord de init(). Le but est de remplacer le formulaire par un nouveau contenu. On la laisse vide. On continue dans amélioration 02
 
    
*/
/*
    Methodes/Fonctions  : replaceAll
    
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