var fullName = prompt("enter your full name").toLowerCase().replaceAll(" ", "").split("").sort();

var vowelMessage = "Your string containes the following vowels : ";
var consonantMessage = "Your string containes the following consonants : ";
var vArr = [];
var cArr = [];


for(let i = 0; i < fullName.length; i++){
    const x = fullName[i];
    "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
}

var message = vowelMessage + vArr.join(", ") + "\n" + consonantMessage + cArr.join(", ");
alert(message);