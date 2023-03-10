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
       ??nonc??    : 
        1.Reprendre le code de l'exercice : Formulaire 22.01.2023/03-formulaire-am??lioration-02.
        2.Ajouter plusieurs Users et faire en sorte que cela fonctionne.   
        ----------------------------------------------------------------------------------------
        Evolution : 
        1. Modification de l'Object user en Array Users.
        2. Modification de la fonction login(). 
            - Nous ajoutons une boucle for pour qu'elle parcourt l'Array Users. 
            - Nous ajoutons un return apr??s l'execution de goToDashedBoard(). 
            - Nous enlevons le else et on place l'alert("Wrong credentials") en dehors de la boucle for.
        --
            - Nous passons la fonction goToDashedBoard() en dehors de init().
            - Nous pla??ons deux args/param??tres que l'on nomme ls et fName.
            - Dans goToDashedBoard() au moment de l'execution nous renseignons l'arg 1 : loginSection et l'arg 2 :  user.fName.
            -On ajoute ls.remove() ?? la place de loginSection.remove()
            -Faire amelioration hero sous forme d'??xercice si n??c??ssaire.
        FIN
        --
*/
/*
    Methodes/Fonctions  :
    
    Element.remove()               La Element.remove()m??thode supprime l'??l??ment du DOM.
    --
    String.prototype.replaceAll() Permet de remplacer des carract??res dans un String.
    ->  retourne -> -------------- Nouveau String
    ->  arg      -> -------------- Carract??re recherch??
    ->  arg 2    -> -------------- Carract??re de remplacement
    ->  exemple  -> -------------- "aabbcc".replaceAll("b", ".");   // 'aa..cc'
    --
    String.prototype.toLowerCase() 
    ->  retourne -> -------------- renvoie la valeur de la cha??ne d'appel convertie en minuscules.
    --
    EventTarget.addEventListener() Configure une fonction qui sera appel??e chaque fois que l'??v??nement sp??cifi?? est livr?? ?? la cible.
    ->  retourne -> -------------- ?
    ->  arg      -> -------------- ??v??nement vis?? pour que la fonction soit appel??e
    ->  arg 2    -> -------------- fonction appel?? ?? chaque fois que l'??l??ment est vis??
    ->  exemple  -> -------------- emailInput.addEnventListener("input", checkEmail)
    ->  /!\      -> -------------- L'argument 1 attend le type d'??v??nement. Cela peut pr??ter ?? confusion quand le nom de l'??v??nement est un nom de champ(ex : input) ce qui veut dire : quand l'utilisateur ??crit dans le champs ou le modifie.Quand l'??v??nement est click c'est plus clair, mais dans les deux cas c'est un ??v??nement.Voici ?? quoi il faut faire r??f??rence : https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
    ->  /!\      -> -------------- L'argument 2 attend la fonction sans les parenth??ses. La fonction sera alors d??clanch??e qu'au moment ou le Listener renvoie True.
    --          
    document.getElementById() ---- Permet de s??lectionner un ??l??ment par son ID
    ->  retourne -> -------------- Un object
    ->  exemple  -> -------------- var objMain = document.getElementById("main");
    --                           
    createElement() -------------- Permet de cr??er un ??l??ment HTML
    ->  arg      -> -------------- tagName/nom de l'??l??ment
    ->  retourne -> -------------- Un nouvel ??l??ment.
    ->  exemple  -> -------------- var email = document.createElement("input");
    --     
    Element.append() -------------- Ajoute du contenu ?? l'int??rieur et ?? la fin d'un ??l??ment.
    ->  arg      ->  -------------- El??ment ?? ajouter
    ->  retourne ->  -------------- ?
    ->  exemple  ->  -------------- emailLabel.append(emailInput);
    --     
    Element.prepend() ------------- Ajoute du contenu ?? l'int??rieur et au d??but d'un ??l??ment.
    ->  arg      ->  -------------- El??ment ?? ajouter
    ->  retourne ->  -------------- ?
    ->  exemple  ->  -------------- emailLabel.prepend(emailInput); 
    --    
    NomDeLaMethode() -------------- Utilit?? principale
    ->  arg      ->  --------------
    ->  retourne ->  --------------
    ->  exemple  ->  --------------
*/
/*
    Propri??t??s/Variables  :  
    HTMLElement.innerText --------- Renseigne du contenu dans un ??l??ment HTML
    ->  exemple  -> --------------- emailLabel.innerText = "Enter your email";
    --  
    HTMLElement.innerHTML --------- Renseigne du contenu HTML dans un ??l??ment HTML
    ->  exemple  -> --------------- var emailDiv = `<div></div>`;
    ->           -> --------------- emailDiv.innerHtml = `<strong>Texte ...</strong>`;
    -> /!\       -> --------------- innerHTML n'attends que du String qui sera transform?? par le navigateur en HTML. On ne peut donc pas lui affecter comme valeur un Object. 
    -> ?? noter   -> --------------- Il est pr??f??rable de cr??er des Objects et ensuite de travailler avec eux comme on veut, plut??t que de faire un bloc d'HTML qu'on ne pourra pas modifier. 
    --  
    NomDeLaPropri??t??      : Utilit?? principale
    ->  exemple  ->

Instructions  :  
return ------------------------ L'instruction return met fin ?? l'ex??cution d'une fonction et d??finit une valeur ?? renvoyer ?? la fonction appelante. mais ici nous l'utilisons pour interompre un fonction.
-> Une fonction s'arr??te imm??diatement ?? l'instant o?? l'instruction return est trait??e.
->  exemple  -> 
/* -------------------------------------------------------
function compteur() {
    for (var compte = 1; ; compte++) {  // boucle infinie
      console.log(compte + "A"); // jusqu'?? 5
        if (compte === 5) {
          return;
        }
        console.log(compte + "B");  // jusqu'?? 4
      }
    console.log(compte + "C");  // cette instruction n'est jamais utilis??e
  }
  
  compteur();
  
  // R??sultat dans la console :
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
    Pour une application ou m??me de mani??re g??n??rale, le main n'est utilis?? qu'une seule fois.            -
    --> Am??lioration 00 
        /P\ ... ?
        /S\ ...
        /!\ ...
*/