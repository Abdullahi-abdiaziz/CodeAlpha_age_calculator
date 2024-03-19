const result = document.getElementById("result");
const inputBox = document.getElementById("input-box");

function calculateAge() {
  const birthdateInput = document.getElementById("birthdate").value;
  const birthdate = new Date(birthdateInput);

  if (isNaN(birthdate.getTime())) {
    showError("Please enter a valid birthdate.");
    return;
  }

  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthdate;

  if (currentDate < birthdate) {
    showError("Please enter a valid birthdate.");
    return;
  }

  const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (ageInMilliseconds % (365.25 * 24 * 60 * 60 * 1000)) /
      (30.44 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (ageInMilliseconds % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );

  const yearsLived = Math.floor(
    ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000)
  );
  const monthsLived = Math.floor(
    ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000)
  );
  const weeksLived = Math.floor(ageInMilliseconds / (7 * 24 * 60 * 60 * 1000));
  const daysLived = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
  const hoursLived = Math.floor(ageInMilliseconds / (60 * 60 * 1000));
  const minutesLived = Math.floor(ageInMilliseconds / (60 * 1000));
  const secondsLived = Math.floor(ageInMilliseconds / 1000);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfBirth = daysOfWeek[birthdate.getDay()];

  const monthOfBirth = birthdate.toLocaleString("default", { month: "short" });
  const yearOfBirth = birthdate.getFullYear();
  const dateOfBirth = birthdate.getDate();

  clearError();

  result.innerHTML =
    "<h3 class='h3-age'>Your age is: <br /></h3>" +
    `<span>${years}</span>` +
    ` ${years > 1 ? "years" : "year"} ` +
    `<span>${months}</span>` +
    ` ${months > 1 ? "months" : "month"} and ` +
    `<span>${days}</span>` +
    ` ${days > 1 ? "days" : "day"}. <br />` +
    "<h3 class='h3-birth'>Your birthday is: <br /></h3>" +
    dayOfBirth +
    " " +
    monthOfBirth +
    " " +
    dateOfBirth +
    ", " +
    yearOfBirth +
    " <br />" +
    "<h3 class='h3-lived'>You have lived for: <br /></h3>" +
    `in Years: <span>${yearsLived} ${
      yearsLived > 1 ? "Years" : "Year"
    }</span> <br /> 
     in Months: <span>${monthsLived} ${
      monthsLived > 1 ? "Months" : "Month"
    }</span> <br />
     in Weeks: <span>${weeksLived} ${
      weeksLived > 1 ? "Weeks" : "Week"
    }</span> <br />
     in Days: <span>${daysLived} ${daysLived > 1 ? "Days" : "Day"}</span> <br />
     in Hours: <span>${hoursLived} ${
      hoursLived > 1 ? "Hours" : "Hour"
    }</span> <br />
     in Minutes: <span>${minutesLived} ${
      minutesLived > 1 ? "Minutes" : "Minute"
    }</span> <br />
     in Seconds: <span>${secondsLived} ${
      secondsLived > 1 ? "Seconds" : "second"
    }</span> <br />`;
}

function showError(message) {
  result.innerHTML = message;
  result.classList.add("error");
  inputBox.classList.add("error");
}

function clearError() {
  result.classList.remove("error");
  inputBox.classList.remove("error");
}
