function Car(year, make, model) {
    this.year = year
    this.make = make
    this.model = model

    this.drive = () => console.log('Vroom!');

    //this.drive = function() {
    //    console.log("Vroom!");

    this.drive = (m) => {
        console.log('Vroom!');
        console.log(`Hey, your ${m} is going too fast!`);
    }

    this.drive = m, l => {
        console.log(`Your ${l} said zoom!`); // why does this argument need the icon next to 1//
        console.log(`Hey, your ${m} is going too fast!`);
    }
}

carTwo = new Car('2021', 'Chevrolet', 'Tahoe');
carTwo.drove('Corvette');

