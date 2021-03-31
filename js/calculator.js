
  //Start calculator

  const numButtons = document.querySelectorAll(".numButton");
      const operatorButtons = document.querySelectorAll(".opButton");
      const equalButton = document.querySelector("#equals");
      const clearButton = document.querySelector("#clear"); //Queries each button

      let resultDisplay = document.querySelector("#calcResultsContainer");
        resultDisplay.textContent = "";
      let userOperator = ""
      let num1 = 0;
      let num2 = 0; 
      let result = 0; //Initializes values

      var i = 0, length = numButtons.length;
      for (i; i < length; i++) {
          numButtons[i].addEventListener("click", function() {
          storeNumber();
      }); 
      } //Adds number functionality, shows numeric values

      var i = 0, length = operatorButtons.length;
      for (i; i < length; i++) {
          operatorButtons[i].addEventListener("click", function() {
          storeOperator();
      }); 
      } //Adds operator functionality, stores operator value

      equalButton.addEventListener("click", function() {
        num2 = resultDisplay.textContent;
        performOperation(num1, num2, userOperator);
      }); //Evaluates the chosen numbers, performs operations

      clearButton.addEventListener("click", function() {
        resetDisplay();
      }) //Resets the display and sets vars to 0 or ""

      function storeNumber () {
        resultDisplay.textContent += event.target.value;
      }

      function storeOperator () {
        if (event.target.className.match('opButton')) {
          num1 = resultDisplay.textContent;
          userOperator = event.target.value;
          resultDisplay.textContent = "";
          return userOperator;
        }
      }

      function add () {
        result = Number(num1) + Number(num2);
        return result;
      }

      function subtract (num1, num2) {
        result = Number(num1) - Number(num2);
        return result;
      }

      function multiply (num1, num2) {
        result = Number(num1) * Number(num2);
        return result;
      }

      function divide (num1, num2) {
        result = Number(num1) / Number(num2);
        return result;
      }

      function performOperation () {
      switch (userOperator) {
        case userOperator = '+':
          console.log(add(num1, num2));
          resultDisplay.textContent = result;
          break;
        case userOperator = '-':
          console.log(subtract(num1, num2));
          resultDisplay.textContent = result;
          break;
        case userOperator = '*':
          console.log(multiply(num1, num2));
          resultDisplay.textContent = result;
          break;
        case userOperator = '/':
          if (num2 == '0') {
            resultDisplay.textContent = "Did you pay attention in school?";
            break;
          } else {
            console.log(divide(num1, num2));
            resultDisplay.textContent = result;
          }
          break;
        default:
            console.log("Not a valid operation")
            break;
      }
      
    }

      function resetDisplay () {
      resultDisplay.textContent = "";
      num1 = 0;
      num2 = 0; 
      result = 0;
      userOperator = ""
      }