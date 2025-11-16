document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();
  let status = document.getElementById("status");

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !subject || !message) {
    status.innerHTML = "⚠ Please fill in all fields.";
    status.style.color = "#ffdddd";
    return;
  }

  if (!email.match(emailPattern)) {
    status.innerHTML = "❌ Invalid email format!";
    status.style.color = "#ffdddd";
    return;
  }

  status.innerHTML = "✔ Message sent successfully!";
  status.style.color = "#a6ffcb";

  // clear form
  document.getElementById("contactForm").reset();
});
