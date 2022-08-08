const HAMBURGER = {
    size: {
        small: [5, 20],
        large: [10, 40]
    },
    toppings: {
        tomato: [1.5, 10],
        salad: [2, 5],
        cheese: [1, 20]
    },
    supplements: {
        ketchup: [1.5, 0],
        mayonnaise: [2, 5]
    }
};

// Hamburger Class Create
class Hamburger {
    constructor() {
        this.size = HAMBURGER.size.small;
        this.toppings = [];
        this.supplements = [];
    }

    calc(ingredients, index) {
        let summ = 0;
        for(let el of ingredients){
            summ += el[index];
        }
        return summ;
    }

    addToppings(ingredients) {
        if (Array.isArray(ingredients[0])) {
            for(let el of ingredients){
                this.toppings.push(el);
            }
        } else this.toppings.push(ingredients);
    }

    addSupplement(ingredients) {
        if (Array.isArray(ingredients[0])) {
            for(let el of ingredients){
                this.supplements.push(el);
            }
        } else this.supplements.push(ingredients);
    }

    getPrice() {
        let calcToppings = this.calc(this.toppings, 0);
        let calcSupplements = this.calc(this.supplements, 0);
        const calcAmount = (calcToppings + calcSupplements + this.size[0]);
        console.log ("Price: $" + calcAmount);
    }

    getCalories() {
        let calcToppings = this.calc(this.toppings, 1);
        let calcSupplements = this.calc(this.supplements, 1);
        const calcCalories = (calcToppings + calcSupplements + this.size[1]);
        console.log ("Calories: " + calcCalories);
    }
}

const burger = new Hamburger();
console.log(burger);
burger.addToppings([HAMBURGER.toppings.salad, HAMBURGER.toppings.tomato]);
burger.addSupplement(HAMBURGER.supplements.mayonnaise);
burger.getPrice();
burger.getCalories();


const burger2 = new Hamburger();
console.log(burger2);
burger2.addToppings(HAMBURGER.toppings.cheese);
burger2.addSupplement(HAMBURGER.supplements.ketchup);
burger2.getPrice();
burger2.getCalories();

