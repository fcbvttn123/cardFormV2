let mainForm = document.querySelector("form")
let notifySuccess = document.querySelector(".form-submitted-successfully")
let inputs = document.querySelectorAll("input")
let blankError = document.querySelectorAll("[data-blank-error]")
let continueBtn = document.querySelector("[data-continue-btn]")
let inputGroup = document.querySelectorAll(".input-group")
let submitBtn = document.querySelector("[data-submit-btn]")

mainForm.addEventListener("submit", e => {

    e.preventDefault();

    checkBlankError() && hideForm();

})

continueBtn.addEventListener("click", e => {

    showForm();

})

function hideForm() {

    mainForm.classList.add("hide-form")

    notifySuccess.classList.add("active")

}

function showForm() {

    inputs.forEach(elements => {

        elements.value = ""

    })

    mainForm.classList.remove("hide-form")

    notifySuccess.classList.remove("active")  

}

function checkBlankError() {

    inputGroup.forEach(inputGroup => {

        let inputs = inputGroup.querySelectorAll("input");

        if(inputGroup.matches(".input-group-expDate")) {

            if(inputs[0].value == "") {

                inputGroup.querySelector("input").classList.add("invalid")

            } else {

                inputGroup.querySelector("#exp-month").classList.remove("invalid")

            }

            if (inputs[1].value == "") {

                inputGroup.querySelector("#exp-year").classList.add("invalid")

            } else {

                inputGroup.querySelector("#exp-year").classList.remove("invalid")

            }

            if(inputs[0].value == "" || inputs[1].value == "") {

                inputGroup.querySelector("[data-blank-error]").classList.remove("hide")

            }

            if(inputs[0].value.length > 0 && inputs[1].value.length > 0) {

                inputGroup.querySelector("[data-blank-error]").classList.add("hide")

            }

        } else {

            if(inputs[0].value == "") {

                inputGroup.querySelector("input").classList.add("invalid")

                inputGroup.querySelector("[data-blank-error]").classList.remove("hide")

            } else {

                inputGroup.querySelector("input").classList.remove("invalid")

                inputGroup.querySelector("[data-blank-error]").classList.add("hide")

            }

        }

    })

    let error = true;

    inputs.forEach(elements => {

        if(elements.classList.contains("invalid")) {

            error = false;

            return;
    
        }

    })

    return error;

}
