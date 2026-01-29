function validateForm()
{
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("em").value.trim();
    let password = document.getElementById("pass").value;
    let confirm = document.getElementById("cnf").value;
    let phone = document.getElementById("phone").value.trim();
    let gender = document.querySelector('input[name="Gender"]:checked');
    let terms = document.getElementById("tc").checked;

    document.getElementById("nameErr").innerHTML = "";
    document.getElementById("emailErr").innerHTML = "";
    document.getElementById("passErr").innerHTML = "";
    document.getElementById("cnfErr").innerHTML = "";
    document.getElementById("phoneErr").innerHTML = "";
    document.getElementById("genderErr").innerHTML = "";
    document.getElementById("tcErr").innerHTML = "";

    let isValid = true;

    if (name === "") {
        document.getElementById("nameErr").innerHTML = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailErr").innerHTML = "Enter a valid email";
        isValid = false;
    }

    if (password.length < 8) {
        document.getElementById("passErr").innerHTML = "Password must be at least 8 characters";
        isValid = false;
    }

    if (password !== confirm) {
        document.getElementById("cnfErr").innerHTML = "Passwords do not match";
        isValid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneErr").innerHTML = "Enter valid 10-digit mobile number";
        isValid = false;
    }

    if (gender === null) {
        document.getElementById("genderErr").innerHTML = "Please select gender";
        isValid = false;
    }

    if (!terms) {
        document.getElementById("tcErr").innerHTML = "You must accept terms and conditions";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
    }

    return isValid;
}