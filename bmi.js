/**
 * This class calculates the BMI of specified height and weight.
 * Due - Chayapol Hongsrimuang - G00388741
 */
class BMI {
    //constructor for the class
    constructor(height, weight) {
        this.height = height; //height in metres
        this.weight = weight;
    }

    //calculates the BMI - weight / height ** 2
    calculateBMI() {
        return this.weight / (this.height ** 2);
    }
}

//testing - new object and invoking
var bmiInstance = new BMI(1.74, 69);
console.log(bmiInstance.calculateBMI());