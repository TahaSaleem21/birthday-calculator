document.addEventListener("DOMContentLoaded", function () {
  const birthdayInput = document.getElementById("birthdayInput");
  const calculateBtn = document.getElementById("calculateBtn");
  const countdownElement = document.getElementById("countdown");

  calculateBtn.addEventListener("click", calculateCountdown);

  function calculateCountdown() {
    const birthday = new Date(birthdayInput.value);
    const now = new Date();

    if (isNaN(birthday.getTime())) {
      alert("Please enter a valid date.");
      return;
    }

    // Add 1 day to the birthday to include the current day
    birthday.setDate(birthday.getDate() + 1);

    birthday.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    if (birthday.getTime() === now.getTime()) {
      countdownElement.textContent = `Today is your birthday! Happy Birthday! 🎉🎂`;
    } else if (birthday.getTime() < now.getTime()) {
      const differenceInMilliseconds = now.getTime() - birthday.getTime();
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const months = Math.floor(
        differenceInMilliseconds / (millisecondsInDay * 30)
      );
      const days = Math.floor(
        (differenceInMilliseconds % (millisecondsInDay * 30)) /
          millisecondsInDay
      );

      if (months > 0 && days > 0) {
        countdownElement.textContent = `Your birthday was ${months} months and ${days} days ago.`;
      } else if (months > 0) {
        countdownElement.textContent = `Your birthday was ${months} months ago.`;
      } else {
        countdownElement.textContent = `Your birthday was ${days} days ago.`;
      }
    } else {
      const differenceInMilliseconds = birthday.getTime() - now.getTime();
      const millisecondsInDay = 1000 * 60 * 60 * 24;
      const days = Math.ceil(differenceInMilliseconds / millisecondsInDay);

      countdownElement.textContent = `Your birthday is in ${days} days.`;
    }
  }
});
