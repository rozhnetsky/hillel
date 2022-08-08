const burgerIllustration = document.querySelector(".burger-illustraion");

const HAMBURGER_ILLUSTRATION = ["bread-1", "ketchup", "meat-1", "salad", "meat-2", "mayonnaise", "tomato", "cheese", "bread-2"];

const drawBurger = () => {
    let render = "";
    for(let layer in HAMBURGER_ILLUSTRATION) {render += `
            <div class="burger-illustraion__layer burger-illustraion__layer--${HAMBURGER_ILLUSTRATION[layer]}">
                <img src="images/burger-${HAMBURGER_ILLUSTRATION[layer]}.png" alt="Burger layer" />
            </div>
        `
    }
    return render;
}

burgerIllustration.innerHTML = drawBurger();
