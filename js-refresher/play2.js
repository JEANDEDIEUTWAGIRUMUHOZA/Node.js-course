//Working with objects, properties and methods
//declaring object, also called field or property
const car = {
    name: 'Berline',
    brand : 'benz',
    year: 2014,
    carPresentation() {
        console.log('Hi, am ' + this.name + ' my brand is: ' + this.brand + ' and my fabrication year is: ' + this.year
        );
    }
    
};
//console.log(car);
//console.log(car.year); print object varuable
//call our object function
car.carPresentation();



//arrays and arrays methods
  


//we can mix types in an array, you can even stock objects in an array
const mixes = ['Ski',1992,'Sport','Driving',17];

/*for loop on our array
for(let mix of mixes){
    console.log(mix);
}*/

//There is alot of bultin methods in JS


//map method
//console.log('map result:');
//console.log(mixes.map(mix => 'Mix: ' + mix));
//slice: to copy a an array,but doesn't copy it, it make an array inside an array 
//push: add element in an array


//Arrays, objects and references types

//Arrays are references as we can modify them
mixes.push('programming');
console.log(mixes);






//Understanding spread and Rest operators
 

//to copy an array
const copiedArray = [...mixes];
console.log(copiedArray);

//copy with slice methode
const copiedWithSlice = mixes.slice();
console.log(copiedWithSlice);

//copy object car we declared at the beginning of our file
const copiedCar = {...car};
console.log(copiedCar);




//Rest argument to return in Array all given argument, that's flexible
const toArray = (...args) =>{
return args;
};

console.log(toArray(1,2,3,4,7,78,4,5,8));


//Desctruction