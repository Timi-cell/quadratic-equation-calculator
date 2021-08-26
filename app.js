let values = document.getElementsByTagName("input");

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  let a, b, c, first, second, ans, answer1, answer2, result;
  result = document.getElementById("result");
  if (
    values[0].value !== "" &&
    values[1].value !== "" &&
    values[2].value !== "" &&
    values[3].value !== ""
  ) {
    ans = values[0].value;
    a = parseInt(values[1].value);
    b = parseInt(values[2].value);
    c = parseInt(values[3].value);
    first = b * b - 4 * (a * c);
    if (first < 0) {
      result.innerHTML = "The equation is invalid!";
      result.style.color = "red";
    } else {
      second = Math.sqrt(first);
      answer1 = (-b + second) / (2 * a);
      answer2 = (-b - second) / (2 * a);
      result.innerHTML = `${ans} is ${answer1} and ${answer2}`;
    }
  } else {
    alert("Please provide the complete equation question to get your answer.");
  }
});
