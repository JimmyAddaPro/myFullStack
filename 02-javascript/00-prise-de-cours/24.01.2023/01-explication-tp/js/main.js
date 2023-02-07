var appDiv = document.getElementById("main") ;
//E.1 - DEBUT
const Users =[
{
    fName: "Bruce Wayne",
    hName: "Batman",
    email: "brucewayne@batmail.com",   
    pass: "whatIDoThatDefinesMe.",   
    }, 
    {
        fName: "Clark Kent",
        hName: "Superman",
        email: "clarkkent@supermail.com",   
        pass: "dreamsSaveUs.",   
    }, 
    {
        fName: "Peter Parker",
        hName: "Spiderman",
        email: "peterparker@spidermail.com",   
        pass: "greatPower.",   
    }
]; 
//E.1 - FIN
init();
function init(){
    // Elements
    var loginSection = document.createElement("section");
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

    loginSection.append(emailDiv);            
    loginSection.append(passDiv);  
    loginSection.append(btnDiv);  
    appDiv.append(loginSection);  
    passDiv.style.display = "none";
    btnDiv.style.display = "none";

    emailInput.addEventListener("input", checkEmail);
    passInput.addEventListener("input", checkPass);
    btn.addEventListener("click", login);
    function login(){
        // E.2 - DEBUT
        for(let i = 0; i < Users.length; i++){
            const user = Users[i];
            if(emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passInput.value === user.pass){
                goToDashBoard(loginSection, user.fName, user.hName)
                return;
            }    
        }
        alert("Wrong credentials");
    }
        // E.2 - FIN
    function checkEmail(){
        if(emailInput.value.includes("@") && emailInput.value.includes(".com")) {
                passDiv.style.display = "block"; 
        }
        else{
            passDiv.style.display = "none"; 
        }
    }
    function checkPass(){
        if(passInput.value.includes(".") && passInput.value.length > 7) {
                btnDiv.style.display = "block";
        }
        else{
            btnDiv.style.display = "none"; 
        }
    }
} 
//E.3 - DEBUT
function goToDashBoard(ls, fName, hName){
    alert("Clark Kent is Superman !");
    var section = document.createElement("section");
    var h1 = document.createElement("h1");
    // h1.innerText = `Welcome, dear ${fName}`;
    h1.innerText = `Welcome, dear ${hName}`;
    section.append(h1);
    ls.remove();
    appDiv.append(section);
} 
//E.3 - FIN
/*
    Objectif  :  
       énoncé    : 
        1.Reprendre le code de l'exercice : Formulaire 22.01.2023/03-formulaire-amélioration-02.
        2.Ajouter plusieurs Users et faire en sorte que cela fonctionne.   
        ----------------------------------------------------------------------------------------
        Evolution : 
        1. Modification de l'Object user en Array Users.
        2. Modification de la fonction login(). 
            - Nous ajoutons une boucle for pour qu'elle parcourt l'Array Users. 
            - Nous ajoutons un return après l'execution de goToDashedBoard(). 
            - Nous enlevons le else et on place l'alert("Wrong credentials") en dehors de la boucle for.
        --
            - Nous passons la fonction goToDashedBoard() en dehors de init().
            - Nous plaçons deux args/paramètres que l'on nomme ls et fName.
            - Dans goToDashedBoard() au moment de l'execution nous renseignons l'arg 1 : loginSection et l'arg 2 :  user.fName.
            -On ajoute ls.remove() à la place de loginSection.remove()
            -Faire amelioration hero sous forme d'éxercice si nécéssaire.
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