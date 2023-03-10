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
        11. Cr??ation de la fonction goToDashBoard() tout en bas du fichier, en dehord de init(). Le but est de remplacer le formulaire par un nouveau contenu. On la laisse vide. 
        --> Am??lioration 02
        11.Suite Code de la fonction goToDashBoard() : 
            /P\ Le probleme rencontr?? est que si nous faison un appen du nouveau contenu ?? appDiv, ce contenu sera ajout?? au formulaire. Nous souhaitons qu'il ??crase(qu'il fasse dispara??tre) le formulaire. Comment faire ?
            /S\ La premi??re solution est de faire un innerHTML ?? appDiv, au div id="main". Meir trouve que c'est mieux de travailler sur une section ?? l'interieur de div id="main". Il faut donc faire en sorte que notre formulaire soit dej?? dans un section et, ?? cette m??me section, nous rempla??ons son contenu par le nouveau. On peut dire que c'est mieux car s'il y avait plus de contenu que le formulaire, alors m??me le reste serait effac??...
        12. Modification du code, afin que le formulaire soit dans une section : 
            - Cr??ation de la variable loginSection ?? qui on appen tout le formulaire( les input et le btn).
            - Appen de la section ?? appDiv
            /P\ Nouveau probl??me : La fonction goToDashBoard ?? ??t?? cr???? en dehors de init(). Nous ne pouvons pas avoir acces ?? loginSection() qui est dans init(). Nous ne pouvons donc pas effac?? son contenu.
            /S\ On place donc la fonction goToDashBoard() dans le init(). Ce n'??tait pas pr??vu, mais cela r??gle le probl??me. 
            - On remove() la loginSection() juste avant le appDiv de la nouvelle section.   
         13. On a fini.    
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
    Propri??t??s/Variables  :innerText  
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
*/
/*
    Bonnes pratiques : 
    Pour une application ou m??me de mani??re g??n??rale, le main n'est utilis?? qu'une seule fois.
*/