const nameField = document.querySelector("[name=nombre]");
const emailField = document.querySelector("[name=email]");
const asuntoField = document.querySelector("[name=asunto]");

const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("error");
        field.nextElementSibling.classList.add("Error");
        field.nextElementSibling.innerText = "Este es un campo requerido";
    } else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("Error");
        field.nextElementSibling.innerText = "";
    }   
}

const validateEmailFormat = e => {
    const field = e.target;
    const fieldValue = e.target.value;
    const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (fieldValue.trim().length > 5 && !regex.test(fieldValue)) {
        field.classList.add("error");
        field.nextElementSibling.classList.add("Error");
        field.nextElementSibling.innerText = "Ingresar un e-mail valido";
    } else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("Error");
        field.nextElementSibling.innerText = "";
    }  
}

nameField.addEventListener("blur", validateEmptyField);
emailField.addEventListener("blur", validateEmptyField);
asuntoField.addEventListener("blur", validateEmptyField);

emailField.addEventListener("input",validateEmailFormat);