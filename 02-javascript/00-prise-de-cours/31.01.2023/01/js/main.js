const obj = {
    fName: "Jo", 
    lName: "Smith",
    sayMyName: function()  {
        // alert(this.fname + " " + this.lName);
        alert(this.className);
    }
}

obj.sayMyName()

const btn = document.createElement("button");
btn.innerText = "Say My Name"
btn.clssName = "Serge est là"
document.getElementById("main").append(btn);

btn.addEventListener("click", obj.sayMyName);
btn.addEventListener("click", touteBete);


function touteBete(){
    console.log("Je suis smart");
}
// const Arr = [
//     {
//         const obj = {
//         fName: "Jo", 
//         lName: "Smith",
//         sayMyName: function()  {
//         return this.fname + " " + thise.lName;
//         }
//     }
// ]