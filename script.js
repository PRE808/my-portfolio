// script.js


document.querySelectorAll(".toggle-details").forEach(button => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling; // the <div class="details">
    details.classList.toggle("hidden");

    // change button text
    if (details.classList.contains("hidden")) {
      button.textContent = "Show Details";
    } else {
      button.textContent = "Hide Details";
    }
  });
});


const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  
  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  // basic email pattern check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  
  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "green";

  
  form.reset();
});
