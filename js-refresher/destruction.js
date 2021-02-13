const car = {
    name: 'Berline',
    brand : 'benz',
    year: 2014,
    carPresentation() {
        console.log('Hi, am ' + this.name + ' my brand is: ' + this.brand + ' and my fabrication year is: ' + this.year
        );
    }
    
};

//object destructuring in JS
const { name, brand, year} = car;
console.log(name,brand,year);

//Array destructuring in JS

const hobbies = ['Music','Ski'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);



