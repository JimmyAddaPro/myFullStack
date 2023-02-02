var appDiv = document.getElementById("main") ;
const user = {
   fName: "Bruce Wayne",
   email: "brucewayne@batmail.com",   
   pass: "whatIDoThatDefinesMe.",   
}
init();
function init(){
        // Elements
        // Etape 1 :
        var loginSection = document.createElement("section");
        // Etape 1 - Fin 

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

        // Etape 1.1 
        // appDiv.append(emailDiv);            
        // appDiv.append(passDiv);  
        // appDiv.append(btnDiv);  

        loginSection.append(emailDiv);            
        loginSection.append(passDiv);  
        loginSection.append(btnDiv);  
        appDiv.append(loginSection);  
        
        // Etape 1.1 - Fin
        passDiv.style.display = "none";
        btnDiv.style.display = "none";

        emailInput.addEventListener("input", checkEmail);
        passInput.addEventListener("input", checkPass);
        btn.addEventListener("click", login);
        function login(){
            

            if(emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passInput.value === user.pass){
                // alert("Clark Kent is Superman !");
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
        // Etape 4
        function goToDashBoard(){
            alert("Clark Kent is Superman !");
            var section = document.createElement("section");
            var h1 = document.createElement("h1");
            h1.innerText = `Welcome, dear ${user.fName}`;
            section.append(h1);
            // Etape 4.1
            loginSection.remove();
            appDiv.append(section);
            // Etape 4.1 - Fin
        } 
        //
    } 
    // // Etape 3
    // function goToDashBoard(){
    //     alert("Clark Kent is Superman !");
    //     var section = document.createElement("section");
    //     var h1 = document.createElement("h1");
    //     h1.innerText = `Welcome, dear ${user.fName}`;
    //     section.append(h1);
    //     //appDiv.append(section);
    // }

/*
    Objectif  :  
        [...]
        04. Suite traitement des informations.

    Evolution : 
        [...]
        11. Création de la fonction goToDashBoard() tout en bas du fichier, en dehord de init(). Le but est de remplacer le formulaire par un nouveau contenu. On la laisse vide. 
        --> Amélioration 02
        11.Suite Code de la fonction goToDashBoard() : 
            /P\ Le probleme rencontré est que si nous faison un appen du nouveau contenu à appDiv, ce contenu sera ajouté au formulaire. Nous souhaitons qu'il écrase(qu'il fasse disparaître) le formulaire. Comment faire ?
            /S\ La première solution est de faire un innerHTML à appDiv, au div id="main". Meir trouve que c'est mieux de travailler sur une section à l'interieur de div id="main". Il faut donc faire en sorte que notre formulaire soit dejà dans un section et, à cette même section, nous remplaçons son contenu par le nouveau. On peut dire que c'est mieux car s'il y avait plus de contenu que le formulaire, alors même le reste serait effacé...
        12. Modification du code, afin que le formulaire soit dans une section : 
            - Création de la variable loginSection à qui on appen tout le formulaire( les input et le btn).
            - Appen de la section à appDiv
            /P\ Nouveau problème : La fonction goToDashBoard à été créé en dehors de init(). Nous ne pouvons pas avoir acces à loginSection() qui est dans init(). Nous ne pouvons donc pas effacé son contenu.
            /S\ On place donc la fonction goToDashBoard() dans le init(). Ce n'était pas prévu, mais cela règle le problème. 
            - On remove() la loginSection() juste avant le appDiv de la nouvelle section.   
         13. On a fini.    
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