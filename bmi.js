class BMI {
    height;
    weight;

    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {
        return this.weight / (this.height ** 2);
    }
}

var bmiInstance = new BMI(1.74, 69);

console.log(bmiInstance.calculateBMI());