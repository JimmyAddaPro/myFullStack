function splitVowelsCons(text){
    var arr = text.toLowerCase().replaceAll(" ", "").split("").sort();
    var message = "";
    var vArr = [];
    var cArr = [];
    for(let i = 0; i < arr.length; i++){
        const x = arr[i];
        "aeiouy".includes(x) ? vArr.push(x) : cArr.push(x);
    }
    message = `Your string containes the following vowels : ${vArr.join(", ")} 
    Your string containes the following consonants :  ${cArr.join(", ")}`;
    document.querySelector("p").innerText = message;
}