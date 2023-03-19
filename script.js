// Get the HTML elements
const textInput = document.getElementById("inp_text");
const buttons = document.querySelectorAll(".btns");


// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.innerText;
    handleButtonClick(buttonText);
  });
});


// Define the function to handle button clicks
function handleButtonClick(buttonText) {
    if (buttonText === "C") {
      // Clear the input field
      textInput.value = "";
    } else if (buttonText === "=") {
      // Evaluate the expression
      const expression = textInput.value;
      const result = eval(expression);
      textInput.value = result;
    } else {
      // Append the clicked button's text to the input field
      textInput.value += buttonText;
    }
}

document.getElementById ('inp_text').value = "0"
