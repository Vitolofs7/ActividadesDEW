document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    let formIsValid = true;

    // Validación de First Name (debe empezar con mayúscula)
    const firstName = document.getElementById("firstName");
    const firstNameError = document.getElementById("firstNameError");
    if (!/^[A-Z]/.test(firstName.value)) {
      firstName.classList.add("is-invalid");
      firstNameError.textContent =
        "First name must start with a capital letter.";
      formIsValid = false;
    } else {
      firstName.classList.remove("is-invalid");
      firstNameError.textContent = "";
    }

    // Validación de Last Name (debe empezar con mayúscula)
    const lastName = document.getElementById("lastName");
    const lastNameError = document.getElementById("lastNameError");
    if (!/^[A-Z]/.test(lastName.value)) {
      lastName.classList.add("is-invalid");
      lastNameError.textContent = "Last name must start with a capital letter.";
      formIsValid = false;
    } else {
      lastName.classList.remove("is-invalid");
      lastNameError.textContent = "";
    }

    // Validación del código postal (5 dígitos)
    const zip = document.getElementById("zip");
    const zipError = document.getElementById("zipError");
    if (!/^\d{5}$/.test(zip.value)) {
      zip.classList.add("is-invalid");
      zipError.textContent = "Zip code must be 5 digits.";
      formIsValid = false;
    } else {
      zip.classList.remove("is-invalid");
      zipError.textContent = "";
    }

    // Validación del número de cuenta (10-16 dígitos)
    const accountNumber = document.getElementById("accountNumber");
    const accountError = document.getElementById("accountError");
    if (!/^\d{10,16}$/.test(accountNumber.value)) {
      accountNumber.classList.add("is-invalid");
      accountError.textContent =
        "Account number must be between 10 and 16 digits.";
      formIsValid = false;
    } else {
      accountNumber.classList.remove("is-invalid");
      accountError.textContent = "";
    }

    // Validación del número de identificación (8-12 caracteres alfanuméricos)
    const idNumber = document.getElementById("idNumber");
    const idNumberError = document.getElementById("idNumberError");
    if (!/^[A-Z0-9]{8,12}$/.test(idNumber.value)) {
      idNumber.classList.add("is-invalid");
      idNumberError.textContent =
        "ID number must be 8-12 alphanumeric characters.";
      formIsValid = false;
    } else {
      idNumber.classList.remove("is-invalid");
      idNumberError.textContent = "";
    }

    // Evitar el envío del formulario si hay errores
    if (!formIsValid) {
      event.preventDefault();
    }
});