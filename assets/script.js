// Capture form submission and perform actions
document.getElementById("checkInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Validate input
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var companyInput = document.getElementById("company");
    var purposeInput = document.getElementById("purpose");
    
    if (nameInput.value === "" || emailInput.value === "" || phoneInput.value === "" || companyInput.value === "" || purposeInput.value === "") {
      alert("Please fill out all fields.");
      return;
    }
    
    // Store visitor data
    var visitorData = {
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
      purpose: purposeInput.value
    };

     // Visitor check-in function
  function visitorCheckIn() {
    var visitorName = document.getElementById("visitorName").value;
    console.log("Visitor " + visitorName + " has checked in.");
    // Add your logic here to save the visitor check-in data

    // Display check-in feedback
    var message = "Visitor " + visitorName + " has successfully checked in.";
    document.getElementById("checkInMessage").textContent = message;
  }

  // Employee sign-in function
  function employeeSignIn() {
    var employeeName = document.getElementById("employeeName").value;
    console.log("Employee " + employeeName + " has signed in.");
    // Add your logic here to save the employee sign-in data
  }
    
    // Reset form
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    companyInput.value = "";
    purposeInput.value = "";
  });