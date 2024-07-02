const input = document.getElementById("text-input");
const check = document.getElementById("check-btn");
const result = document.getElementById("result");

function validityofinput() {
  const inputValue = input.value.toString();
  const inputLength = inputValue.length;
//   inputValue.style.fontWeight ="900"; 
  if (inputLength === 0) {
    alert("Please enter value");
  }
   else {
    for (i = 0; i < inputLength / 2; i++) {
      if (inputValue[i] !== inputValue[inputLength - 1 - i]) {
        result.innerHTML = "<b>"+ inputValue+"</b>"+"it is not a palindrome";
      }
      else{
        result.innerHTML ="<b>"+ inputValue+"</b>"+ " it is a palindrome";

      }
    }
    
    // console.log(inputValue[i]);
  }
}
