var myObj = {
    'name': 'Eli',
    "age" : 30,
    location: 'Chicago',
    laptops: ['Apple', 'Windows']
}

console.log(myObj)

// object notation
console.log(myObj[ 'name'] )

// object dot notation
console.log(myObj.age)

for (let i = 0; i < myObj.laptops.length; i++) {
    const element = myObj.laptops[i];
    console.log(laptop)
}

// derek uses this the most
for (const o of myObj) {
    console.log(o)
}

for (const key in myObj) {
    if (Object.hasOwnProperty.call(myObj, key)) {
        const element = myObj[key];
        console.log(element)
    }
}

myObj.laptops.forEach(function(laptop, index) {
    console.log(`${index+1}: ${laptop}`)
});

function Car(year, make, model) {
    this.year = year
    this.make = make
    this.model = model

    this.drive = () => console.log('Vroom!');

    //this.drive = function() {
    //    console.log("Vroom!");
    }

var carOne = new Car(2015, 'Chevrolet', 'Corvette')
console.log(carOne['year']);
console.log(carOne.make);
console.log(carOne.model);

carOne['year'] = 2017
carOne.model = 'Tahoe';

carOne.drive()

//class Car:
//def __init__(self, year, make, model):
    // self.year = year
    // self.make = make
    // self.model = model

//car1 = Car(2015, 'Chevrolet', 'Corvette')