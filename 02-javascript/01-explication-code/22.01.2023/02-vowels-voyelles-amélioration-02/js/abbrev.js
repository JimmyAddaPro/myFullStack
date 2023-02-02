var pars = parseInt(2,3);
alert(pars);
function splitVowelsCons(text){
 
    var arr = text.toLowerCase().replaceAll(" ", "").split("").sort();
    
    var message = "";
    var vArr = [];
    var cArr = [];

    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
    }
    
    return `Your string containes the following vowels : ${vArr.join(", ")} 
    Your string containes the following consonants :  ${cArr.join(", ")}`;
}
 
var h1 = document.querySelector("h1");

function updateH1(){

    var text = prompt("Enter a text");
    
    h1.innerText = splitVowelsCons(text);

    h1.style.color = `rgb(${parseInt(Math.random()* 255)},${parseInt(Math.random()* 255)},${parseInt(Math.random()* 255)})`

}