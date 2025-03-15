function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = "";

    // Name validation
    if (name.trim() === "") {  // name.trim() ensures that the input isn't just space.
        errorMessage += "Name is required.\n";
    }

    // Email validation using regex/ -It ensures a valid email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Enter a valid email address.\n";
    }

    // Password validation (minimum 6 characters)
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
    }

    // Show errors or submit form
    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Form submitted successfully!");
        document.getElementById("myForm").submit();
    }
}


//document.getElementById("nameInput").addEventListener("input", function () {
//     let name = this.value.trim();
//     let errorElement = document.getElementById("nameError");

//     if (name === "") {
//         errorElement.textContent = "Name is required.";
//     } else {
//         errorElement.textContent = "";
//     }
// });
