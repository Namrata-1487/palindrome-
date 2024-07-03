const input = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("result");

function validityofinput() {
  // using split and revese function
  const actulaValue = input.value;
  const splitvalue = input.value.split("");
  const reverse = splitvalue.reverse().join("");
  // console.log(reverse);
  // console.log(splitvalue[1]);
  if (actulaValue.length === 0) {
    alert("Please input a value");
  } else {
    if (actulaValue === reverse) {
      result.innerHTML = "<b>" + input.value + "</b>" + " it is a palindrome";
    } else {
      result.innerHTML =
        "<b>" + input.value + "</b>" + " it is not a palindrome";
    }
  }

  // using length and array

  // const inputValue = input.value.toString();
  // const inputLength = inputValue.length;

  // console.log(inputValue);
  // console.log(inputLength);

  // if (inputLength === 0) {
  //   alert("Please input a value");
  // } else {
  //   for (i = 0; i < inputLength; i++) {
  //     // console.log(inputValue[i]);
  //     if (inputValue[i] != inputValue[inputLength -1- i]) {
  //       result.innerHTML =
  //         "<b>" + inputValue + "</b>" + " it is not a palindrome";
  //     }
  //     else {
  //       result.innerHTML = "<b>" + inputValue + "</b>" + " it is a palindrome";
  //     }
  //   }
}
