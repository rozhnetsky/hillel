const HIDDEN = "hidden";
let alternativeUi = false;
let numType = "trivia";

const renderForm = () => {
    let render = `
        <form class="form" id="form">
            <div class="form__row">
                <label for="type-select">Select type of fact</label>
                <select name="type-select" id="type-select">
                    <option value="trivia">Trivia</option>
                    <option value="math">Math</option>
                    <option value="date">Date</option>
                    <option value="year">Year</option>
                </select>
            </div>
            <div class="form__row form__row--input form__row--number">
                <label for="number-input">Input your number</label>
                <input name="number" type="text" id="number-input" />
            </div>
            <div class="form__row form__row--input form__row--date ${HIDDEN}">
                <label for="date-input">Input date</label>
                <input name="date" type="text" id="date-input" />
                <label for="month-input">Input month</label>
                <input name="month" type="text" id="month-input" />
            </div>
            <span id="error"></span>
            <input type="submit" value="Send Request" />
            <div id="result"></div>
        </form>`;
    document.body.innerHTML += render;
};

const initTypeSelect = form => {
    const typeSelect = document.getElementById("type-select");

    typeSelect.addEventListener("change", e => {
        const date = e.target.value === "date";
        const numberField = form.querySelector(".form__row--number");
        const dateFields = form.querySelector(".form__row--date");
        if (date) {
            numberField.classList.add(HIDDEN);
            dateFields.classList.remove(HIDDEN);
            alternativeUi = true;
        } 
        else if (numberField.classList.contains(HIDDEN)) {
            numberField.classList.remove(HIDDEN);
            dateFields.classList.add(HIDDEN);
            alternativeUi = false;
        }
        numType = e.target.value;
    });
};

const validateFrom = form => {
    return new Promise((resolve) => {
        const input = form.querySelector(`#number-input`);
        const day = form.querySelector(`#date-input`);
        const month = form.querySelector(`#month-input`);
        const error = form.querySelector(`#error`);
        const throwError = errorMessage => {
            error.innerText = errorMessage;
            setTimeout(() => {
                error.innerText = "";
            }, 2000)
        };

        if (!alternativeUi) {
            if (isNaN(input.value) || input.value < 1) {
                throwError("please enter a Number");
                return;
            };
            if (numType === "year") {
                if (input.value.length !== 4 || input.value > 2020 || input.value < 1900) {
                    throwError("please enter a year within 1900-2020");
                    return;
                }
            }
            resolve(input.value);
        } else {
            if (isNaN(day.value) || day.value < 1 || day.value > 31) {
                throwError("please enter day");
                return;
            };
            if (isNaN(day.value) || month.value < 1 || month.value > 12) {
                throwError("please enter month");
                return;
            };
            resolve(`${month.value}/${day.value}`);
        }
        
    });
};

const initForm = () => {
    renderForm();
    const form = document.getElementById("form");
    initTypeSelect(form);
    form.addEventListener("submit", e => {
        e.preventDefault();
        validateFrom(form)
            .then(number => {
                initFact(numType, number);
            });
    });
};

const createFact = (type, number) => {
    return new Promise((resolve, reject) => {
        const url = `http://numbersapi.com/${number}/${type}?callback=showNumber`;
        const data = fetch(url, {method: "GET"});
        data.then(e => {
            resolve(data);
        })
        .catch(error => {
            reject("Something wrong :(");
        });
    });
};

const initFact = (type, number) => {
    const numberElement = document.getElementById("result");

    createFact(type, number)
        .then(data => {
            return data.text();
        })
        .then(result => {
            numberElement.innerText = result;
        })
        .catch(error => {
            console.log(error);
        })
    
};


initForm();