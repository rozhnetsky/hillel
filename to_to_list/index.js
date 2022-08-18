const form = document.getElementById("form");

const renderForm = () => {
  let render = `
    <div class="form__to-do-list"></div>
    <div class="form__input-row">
      <label for="input-row">To do:</label>
      <input class="form__text-field" id="input-to-do" type="text"/>
      <a href="#" class="form__add-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
      </a>
    </div>
    <input class="form__submit" id="submit" type="submit" value="Submit"/>
    <div class="form__success">All Done!</div>`;
    form.innerHTML = render;
};

const renderRow = (value,idNum) => {
  const render = `
  <div class="form__to-do">
    <div class="form__row">
      <input type="checkbox" value="${value}" id="${idNum}-checkbox" />
      <label for="${idNum}-checkbox">${value}</label>
      <div class="form__remove-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
      </div>
      <div class="form__edit-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
      </div>
    </div>
  </div>`
  return render;
};

const addToDoLine = () => {
  const active = "active";
  const toDoAdd = document.querySelector(".form__add-button");
  const toDoInput = document.getElementById("input-to-do");
  const toDoList = document.querySelector(".form__to-do-list");
  let toDoValue;
  let count = 0;
  let targetVal;

  toDoInput.addEventListener("input", e => {
    e.preventDefault();
    targetVal = e.target.value;
    if (targetVal === "") {
      toDoAdd.classList.remove(active);
      return;
    }
    toDoAdd.classList.add(active);
    toDoValue = targetVal;
  });

  toDoAdd.addEventListener("click", () => {
    count++;
    const id = "to-do-"+count;
    toDoList.innerHTML += renderRow(toDoValue, id);
    toDoInput.value = "";
    toDoAdd.classList.remove(active);
    removeLine();
    editLine(count);
    initChackboxes();
  });
  
};

const initChackboxes = () => {
  const checkboxes = document.querySelectorAll(".form__to-do input[type='checkbox']");
  for (checkbox of checkboxes) {
    checkbox.addEventListener("change", event => {
      const row = event.target.closest(".form__to-do");
      if (event.currentTarget.checked) {
        row.classList.add("active");
      } else {
        row.classList.remove("active");
      }
    });
  } 
}

const initEditEvent = button => {
  button = button.target;
  const targetVal = button.closest(".form__row").childNodes[3].innerText;
  button
    .closest(".form__to-do")
    .innerHTML += `
      <div class="form__edit-row">
        <input class="form__edit-input" type="text" value="${targetVal}" />
        <svg class="form__edit-ok" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
      </div>`;

  form.classList.add("edit");

  const toDoField = document.querySelector(".form__edit-input");

  toDoField.addEventListener("input", e => {
    e.target
      .closest(".form__to-do")
      .querySelector(".form__row label").innerText = e.target.value;
    e.target
      .closest(".form__to-do")
      .querySelector(".form__row input[type='checkbox']").value = e.target.value;
  });

  const editOkButton = document.querySelector(".form__edit-ok");
  editOkButton.addEventListener("click", button => {
    document.querySelector(".form__edit-row").remove();
    form.classList.remove("edit");
    removeLine();
    editLine();
  });
}

const removeLine = () => {
  const toDoRemoveButtons = document.querySelectorAll(".form__remove-button");
  for(button of toDoRemoveButtons) {
    button.addEventListener("click", e => e.target.closest(".form__to-do").remove());
  }
};

const editLine = count => {
  const editButtons = document.querySelectorAll(".form__edit-button");
  for(button of editButtons) {
    button.addEventListener("click", initEditEvent);
  }
};

const showError = error => {
  form.innerHTML += `<div class='error'>${error}<div>`
  form.querySelector(".form__submit").style.pointerEvents = "none";
}

const hideError = () => {
  setTimeout(() => {
    form.querySelector(".error").remove();
    form.querySelector(".form__submit").style.pointerEvents = "all";
  }, 3000);
  addToDoLine();
}

const getValues = () => {
  const formData = [];
  const checkboxes = form.querySelectorAll(".form__to-do input[type='checkbox']");
  for(check of checkboxes) {
    const status = check.checked ? "done" : "not done";
    formData.push({ "value" : check.value, "status" : status});
  }
  if (Object.keys(formData).length === 0) {
    showError("Please enter at least one value");
    hideError();
    return;
  };
  console.log(formData);
  form.classList.add("success");
}

form.addEventListener("submit", e => {
  e.preventDefault();
  getValues();
})

renderForm();
addToDoLine();

