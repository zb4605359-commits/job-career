// JOB SEARCH
const search = document.getElementById("search");
if (search) {
  search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase();
    document.querySelectorAll(".job-card").forEach(job => {
      job.style.display = job.dataset.title.includes(value) ? "block" : "none";
    });
  });
}

// CONTACT FORM VALIDATION
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const alertBox = document.getElementById("alertBox");

    if (!name || !email.includes("@") || !subject) {
      alertBox.innerHTML = `<div class="alert alert-danger">Please fill all fields correctly</div>`;
    } else {
      alertBox.innerHTML = `<div class="alert alert-success">Message Sent Successfully</div>`;
      form.reset();
    }
  });
}
