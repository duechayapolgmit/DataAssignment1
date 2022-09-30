class Vehicle {
    make;
    model;
    year;

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information() {
        console.log(`Model: ${this.model}, Year: ${this.year}`);
    }
}

class Cars extends Vehicle {
    doors;

    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    Information() {
        super.Information();
        console.log(`Doors ${this.doors}`);
    }
}

let bmtw = new Vehicle("a", "b", 1999);
bmtw.Information();

let bmtw2 = new Cars("c", "d", 1998, 4);
bmtw2.Information();