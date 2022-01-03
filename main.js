function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message")

    messageElement.textContent = message;
    messageElement.classList.remove("from__message--success","form__message--error")
    messageElement.classList.add(`form__message--${type}`);
}


function setFormMessage(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.preventDefault.querySelector(".form__input-error-message").textContent;
}


document.addEventListener("DOMContentLoaded" , () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click", e => { 
        e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");

    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //pefrom your AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0  && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 charactor in lenght")
            }

        });
    });
});