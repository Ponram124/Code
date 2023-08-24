document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const registerNumber = document.getElementById("registerNumber").value;

    // Here you can perform further validation or processing of the form data.
    // For this example, we'll just log the values to the console.
    console.log("Name:", userName);
    console.log("Registration Number:", registerNumber);

    // You can also submit the form to a server using AJAX or other methods.
  });
});


const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

let minutes = 5;
let seconds = 0;

function updateCounter() {
  seconds--;
  if (seconds < 0) {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(counterInterval);
      alert("Time's up!");
    }
  }

  minutesDisplay.textContent = minutes.toString().padStart(2, "0");
  secondsDisplay.textContent = seconds.toString().padStart(2, "0");
}

updateCounter(); // Initial call to display starting time

const counterInterval = setInterval(updateCounter, 1000); // Update every seconds