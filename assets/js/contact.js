// Get a reference to the contact form
var contactForm = document.getElementById("contact-form");

// Add a submit event listener to the form
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission from refreshing the page

  // Get the values from the form fields
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var phone = contactForm.elements.phone.value;
  var subject = contactForm.elements.subject.value;
  var message = contactForm.elements.message.value;

  // Create a data object with the form values
  var formData = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  // Send the form data to Firebase using Axios
  axios
    .post(
      "https://https://pawanputratechnology-48873-default-rtdb.firebaseio.com/contacts.json",
      formData
    )
    .then(function (response) {
      // Clear the form after successful submission
      contactForm.reset();
      alert("Your contact detail sent successfully");
    })
    .catch(function (error) {
      console.error("Error sending data to Firebase Realtime Database:", error);
    });
});
