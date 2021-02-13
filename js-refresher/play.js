//variables

var name = 'Jean de Dieu';
var age = 78;
var hasAccount = true;

//function
/*
function presentUser(userName, userAage, userHasAccount){
    return(
        'Name is: ' +
        userName + 
        '  age: ' + 
        userAage + 
        ' and the user has Account: ' + 
        userHasAccount


    );
}

console.log(presentUser(name,age,hasAccount));*/

//let : can change it's value
//const: the value never change in the program


//Arrow functions, this is function is the same as the function above

const presentation = (userName, userAage, userHasAccount)=>{
    return(
        'Name is: ' +
        userName + 
        '  age: ' + 
        userAage + 
        ' and the user has Account: ' + 
        userHasAccount 
    );
};
console.log(presentation(name,age,hasAccount));

//an other arrow functions syntax
const multiplication = (a,b)=> a * b;

console.log(multiplication(7,5));

//one element arrow function
const checkAge = (c) => 2021 - c;

console.log(checkAge(1992));