/*
Beverage
1. Define a Beverage class with properties name, ounces, container, and isCold.
2. isCold should always be false at instantiation of an object.
3. container should be optional and default to "bottle".
4. Add a describe() method that prints a statement using the values stored in the object's other properties. The statement should read differently depending on whether the beverage is cold or not.
5. Add a refrigerate() method outside the constructor that changes the value of isCold and prints a notification.
6. Instantiate at least 3 different kinds of beverages with unique properties.
7. Use the describe() method to print descriptions of each beverage.
8. Use the refrigerate() method on one of the beverages, then call describe()  again.
*/

class Beverage {
    constructor(name, ounces, isCold = false) {
        this.name = name;
        this.ounces = ounces;
        this.isCold = isCold;
        this.container = "bottle";
    }
    describe(){
        if (!this.isCold){
        console.log(`This ${this.ounces} oz. ${this.name} is luke warm.`);
    }
        else{
        console.log(`This ${this.ounces} oz. ${this.name} is cold.`);
    }
    }
    refrigerate(){
        this.isCold = true;
        console.log(`Your ${this.ounces} oz. ${this.name} has been made chilly!`)
    }
}

let soda = new Beverage("sprite", 16, false, "can");
soda.describe();
soda.refrigerate();
console.log(soda);

let tea = new Beverage("Chai", 12, false, "mug");
tea.describe();
tea.refrigerate();
tea.describe();
console.log(tea);

let water = new Beverage("Dasani", 32, true);
water.describe();
console.log(water);