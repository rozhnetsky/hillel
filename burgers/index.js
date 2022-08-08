let form = document.querySelector(".form");
const burgerIllustration = document.querySelector(".burger-illustraion");

const HAMBURGER = {
    size: {
        large: [10, 40],
        small: [5, 20]
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

let { size, supplements, toppings } = HAMBURGER;
let { large, small } = size;
let { tomato, salad, cheese } = toppings;
let { ketchup, mayonnaise } = supplements;

let burgerSetup = {
    size: small,
    toppings: [],
    supplements: []

};


const renderForm = () => {
    let render = "";
    for(let i in Object.keys(HAMBURGER)){
        render += `
        <fieldset>
            <legend>${Object.keys(HAMBURGER)[i]}</legend>`
        for(let x in Object.values(HAMBURGER)[i]){
            const sizeGroup = Object.keys(HAMBURGER)[i] === "size";
            const inputType = sizeGroup ? "radio" : "checkbox";
            const checked = sizeGroup && x === "small" ? "checked" : "";
            render += `
                <div class="form__row">
                    <input type="${inputType}" name="${Object.keys(HAMBURGER)[i]}" id="${x}" value="${x}" ${checked}>
                    <label for="${x}">${x.charAt(0).toUpperCase() + x.slice(1)}</label>
                </div>`
        }
        render += `
        </fieldset>
        <div class="result"></div>`
    }
    form.innerHTML += render;
    initCheckboxes();
}

const initCheckboxes = () => {
    const checkboxes = document.querySelectorAll(".form input[type='checkbox'], .form input[type='radio']");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", el => {
            const targetElement = el.target;
            const group = targetElement.getAttribute("name");
            const value = targetElement.value;
            if(targetElement.checked) {
                // if (value === "large") burgerSetup[group] = burgerSetup[group].filter(e => e !== "small");
                // else if (value === "small") burgerSetup[group] = burgerSetup[group].filter(e => e !== "large");
                burgerSetup[group].push(HAMBURGER[group][value]);
            }
            else burgerSetup[group] = burgerSetup[group].filter(e => e !== value);
            console.log(burgerSetup);
            createBurger(burgerSetup);
        });
    });
}

const drawBurger = () => {
    const HAMBURGER_ILLUSTRATION = 
        ["bread-1", "ketchup", "meat-1", "salad", "meat-2", "mayonnaise", "tomato", "cheese", "bread-2"];
    let render = "";
    for(let layer in HAMBURGER_ILLUSTRATION) {render += `
            <div class="burger-illustraion__layer burger-illustraion__layer--${HAMBURGER_ILLUSTRATION[layer]} active">
                <img src="images/burger-${HAMBURGER_ILLUSTRATION[layer]}.png" alt="Burger layer" />
            </div>
        `
    }
    burgerIllustration.innerHTML = render;
}

renderForm();
drawBurger();


// Hamburger Class Create
class Hamburger {
    constructor(...ingredients) {
        const _ingredients = ingredients[0] || {};
        this.size = _ingredients.size || HAMBURGER.size.small;
        this.toppings = _ingredients.toppings || 0;
        this.supplements = _ingredients.supplements || 0;
        this.amount = this.size[0];
        this.callories = this.size[1];
        // console.log(this.amount, this.callories);
    }

    calc(ingredients) {
        if (ingredients !== 0) {
            if (Array.isArray(ingredients)){
                for(let el of ingredients){
                    this.amount += Number(el[0]);
                    this.callories += Number(el[1]);
                }
            } else {
                this.amount += Number(ingredients[0]);
                this.callories += Number(ingredients[1]);
            }
        }
    }

    addToppings() {
        return this.calc(this.toppings);
    }

    addSupplement() {
        return this.calc(this.supplements);
    }

    getPrice() {
        this.addToppings();
        this.addSupplement();
        return "Price: $" + this.amount;
    }

    getCalories() {
        this.addToppings();
        this.addSupplement();
        return "Callories: " + this.callories;
    }
};


// New Burger Create
const createBurger = arr => {
    const result = document.querySelector(".result");
    let burger = new Hamburger(arr);
    console.log(burger);

    result.innerHTML = "";

    result.innerHTML += `
        ${burger.getCalories()}
        ${burger.getPrice()}
    `
}

createBurger(burgerSetup);

