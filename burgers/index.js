let form = document.querySelector(".form");
const burgerIllustration = document.querySelector(".burger-illustration");

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

let { size } = HAMBURGER;
let { large, small } = size;

let burgerSetup = {
    size: [small],
    toppings: [],
    supplements: []
};

let hamburgerIllustration = ["bread-1", "meat-1", "bread-2"];

const renderForm = () => {
    let render = "";
    for(let i in Object.keys(HAMBURGER)){
        render += `
        <fieldset>
            <legend>${Object.keys(HAMBURGER)[i]}</legend>`
        for(let x in Object.values(HAMBURGER)[i]){
            const _cost = "+$" + HAMBURGER[Object.keys(HAMBURGER)[i]][x][0];
            const _calories = HAMBURGER[Object.keys(HAMBURGER)[i]][x][1];
            const sizeGroup = Object.keys(HAMBURGER)[i] === "size";
            const inputType = sizeGroup ? "radio" : "checkbox";
            const checked = sizeGroup && x === "small" ? "checked" : "";
            render += `
                <div class="form__row">
                    <input type="${inputType}" name="${Object.keys(HAMBURGER)[i]}" id="${x}" value="${x}" ${checked}>
                    <label for="${x}">${x.charAt(0).toUpperCase() + x.slice(1)} 
                      <span>(cost: ${_cost}; calories: ${_calories})</span>
                    </label>
                </div>`
        }
        render += `
        </fieldset>`
    }
    form.innerHTML +=
    `${render}
    <div class="result"></div>
    `;
    initCheckboxes();
}

const initCheckboxes = () => {
    const checkboxes = document.querySelectorAll(".form input[type='checkbox'], .form input[type='radio']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", el => {
            const targetElement = el.target;
            const group = targetElement.getAttribute("name");
            const value = targetElement.value;
            const elementIndex = Object.keys(HAMBURGER[group]).indexOf(value);
            if(targetElement.checked) {
                if (group === "size") burgerSetup[group][0] = HAMBURGER[group][value];
                else burgerSetup[group][elementIndex] = HAMBURGER[group][value];

                if (value === "large") hamburgerIllustration.push("meat-2");
                else if (value === "small") hamburgerIllustration = hamburgerIllustration.filter(e => e !== "meat-2");
                else hamburgerIllustration.push(value);
            }
            else {
                burgerSetup[group][elementIndex] = undefined;
                hamburgerIllustration = hamburgerIllustration.filter(e => e !== value);
            }
            createBurger(burgerSetup);
            drawBurger(hamburgerIllustration);
        });
    });
}

const drawBurger = array => {
    let render = "";
    for(let layer of array) {
        render += `
            <div class="burger-illustration__layer burger-illustration__layer--${layer} active">
                <img src="images/burger-${layer}.png" alt="Burger layer" />
            </div>
        `
    }
    burgerIllustration.innerHTML = render;
}

drawBurger(hamburgerIllustration);
renderForm();

// Hamburger Class Create
class Hamburger {
    constructor(...ingredients) {
        const _ingredients = ingredients[0] || {};
        this.size = _ingredients.size;
        this.toppings = _ingredients.toppings || 0;
        this.supplements = _ingredients.supplements || 0;
        this.amount = ingredients[0].amount || this.size[0][0];
        this.calories = ingredients[0].calories || this.size[0][1];
    }

    calc(ingredients, index) {
        let summ = 0;
        if (ingredients !== 0 && ingredients !== undefined) {
            if (Array.isArray(ingredients)){
                for(let el of ingredients){
                    if (el !== undefined) {
                        summ += el[index];
                    }
                }
            } else summ += ingredients[index];
        }
        return summ;
    }

    addToppings(index) {
        return this.calc(this.toppings, index);
    }

    addSupplement(index) {
        return this.calc(this.supplements, index);
    }

    getPrice() {
        const calcAmount = (this.addToppings(0) + this.addSupplement(0) + this.size[0][0])
        return "Price: $" + calcAmount;
    }

    getCalories() {
        const calcCalories = this.addToppings(1) + this.addSupplement(1) + this.size[0][1]
        return "Calories: " + calcCalories;
    }
}


// New Burger Create
const createBurger = arr => {
    const result = document.querySelector(".result");
    let burger = {};
    burger = new Hamburger(arr);

    result.innerHTML = "";

    result.innerHTML += `
        ${burger.getPrice()}
        ${burger.getCalories()}
    `
}

createBurger(burgerSetup);

