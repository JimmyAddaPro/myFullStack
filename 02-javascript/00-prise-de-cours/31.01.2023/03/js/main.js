// //Qu'est-ce qu'un CALLBACK
// function calculate(a, b){
//     return a() + b()
// }


// function getFirstNumber(){
//     return 2+2
// }
// function getSecondNumber(){
//     return 3+3
// }

// alert(calculate(getFirstNumber, getSecondNumber)) //10




// --------------------------------------------
//Qu'est-ce qu'un CALLBACK
function calculate(a, b){
    return a(1, 2) + b(3, 4)
}


function getFirstNumber(b, d){
    return b+d
}
function getSecondNumber(e, f){
    return e+f
}

alert(calculate(getFirstNumber, getSecondNumber)) //10

