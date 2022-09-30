/**
 * These classes displays data of a Vehicle (make, model, year) and a Cars, extending functionality from Vehicle (make, model, year, doors)
 * Due - Chayapol Hongsrimuang - G00388741
 */

//parent class - Vehicle
class Vehicle {

    //constructor for class
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //logs model and year information in
    Information() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

//children of Vehicle
class Cars extends Vehicle {
    //constructor for class
    constructor(make, model, year, doors) {
        super(make, model, year); //call parent's constructor
        this.doors = doors;
    }

    //logs model, year, and doors information in
    Information() {
        super.Information(); //call parent's Information() method
        console.log(`Doors ${this.doors}`);
    }
}

//testing - new objects and invoking
let bmtw = new Vehicle("a", "b", 1999); //test for Vehicle
bmtw.Information();

let bmtw2 = new Cars("c", "d", 1998, 4); //test for Cars
bmtw2.Information();