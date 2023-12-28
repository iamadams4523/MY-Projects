const day = document.querySelector('.day');
const hour = document.querySelector('.hours');
const min = document.querySelector('.min');
const secs = document.querySelector('.secs');

// Set the date and time for the countdown
const countdownDate = new Date('December 31, 2023 23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculate remaining time components
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  day.textContent = days;
  hour.textContent = hours;
  min.textContent = minutes;
  secs.textContent = seconds;

  // Check if countdown is over
  if (distance < 0) {
    clearInterval(countdown);
    day.textContent = 0;
    hour.textContent = 0;
    min.textContent = 0;
    secs.textContent = 0;
  }
}, 1000); // Update every second (1000 milliseconds)
