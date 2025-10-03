const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
const submitBtn = form.querySelector("button");

// Disable button initially
submitBtn.disabled = true;
submitBtn.style.opacity = "0.6";
submitBtn.style.cursor = "not-allowed";

// Listen for input changes
form.addEventListener("input", checkFormValidity);

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent refresh

  if (!form.checkValidity()) return; // Extra safety

  // Show success message
  successMessage.textContent = "✅ Your message has been sent successfully!";
  successMessage.style.display = "block";

  // Clear form
  form.reset();
  checkFormValidity(); // Re-disable button after reset

  // Hide success after 4 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 4000);
});

// Check validity of form on every keystroke
function checkFormValidity() {
  if (form.checkValidity()) {
    submitBtn.disabled = false;
    submitBtn.style.opacity = "1";
    submitBtn.style.cursor = "pointer";
  } else {
    submitBtn.disabled = true;
    submitBtn.style.opacity = "0.6";
    submitBtn.style.cursor = "not-allowed";
  }
}
