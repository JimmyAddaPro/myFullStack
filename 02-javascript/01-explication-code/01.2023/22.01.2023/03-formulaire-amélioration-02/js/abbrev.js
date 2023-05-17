var appDiv = document.getElementById("main") ;
const user = {
   fName: "Bruce Wayne",
   email: "brucewayne@batmail.com",   
   pass: "whatIDoThatDefinesMe.",   
}
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
            if(emailInput.value.toLowerCase().replaceAll(" ", "") === user.email && passInput.value === user.pass){
                goToDashBoard()
            }
            else{
                alert("Wrong credentials");
            }

        }
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
        // Etape 4
        function goToDashBoard(){
            alert("Clark Kent is Superman !");
            var section = document.createElement("section");
            var h1 = document.createElement("h1");
            h1.innerText = `Welcome, dear ${user.fName}`;
            section.append(h1);
            loginSection.remove();
            appDiv.append(section);
        } 
    } 