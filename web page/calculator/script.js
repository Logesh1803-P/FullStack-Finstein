const display=document.getElementById("display")
function appendToDisplay(char) {
  if (char === "AC") {
    // Clear the display
    display.value = "";
  } else if (char === "DEL") {
    // Delete the last character
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
  } else {
    // Append the character to the display
    display.value += char;
  }
}


// function  appendToEval(){
//     const getValue = document.getElementById("display").value
//     const evaluate = eval(getValue)
//     document.getElementById("display").value = evaluate
//     console.log(evaluate)
// }

function appendToEval(){
    expression = document.getElementById("display").value;
    // Add_patern = /+/g;
    // calculate = getValue.match(/[+]/g);
    // console.log(calculate);
    function calculateExpression(expression) {
        const operators = '+-*/';
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };
        const values = [];
        const ops = [];
      
        expression = expression.replace(/ /g, ''); // Remove spaces
      
        let currentNum = '';
    
        for (const char of expression) {
          if (!operators.includes(char)) {
            currentNum += char;
          } else {
            if (currentNum !== '') {
              values.push(parseFloat(currentNum));
              currentNum = '';
            }
            while (
              ops.length > 0 &&
              precedence[ops[ops.length - 1]] >= precedence[char]
            ) {
              const operator = ops.pop();
              const right = values.pop();
              const left = values.pop();
              values.push(applyOperator(left, right, operator));
            }
            ops.push(char);
          }
        }
    
    
      
        if (currentNum !== '') {
          values.push(parseFloat(currentNum));
        }
      
        while (ops.length > 0) {
          const operator = ops.pop();
          const right = values.pop();
          const left = values.pop();
          values.push(applyOperator(left, right, operator));
        }
      
        return values[0];
      }
      
    
      function applyOperator(left, right, operator) {
        switch (operator) {
          case '+':
            return left + right;
          case '-':
            return left - right;
          case '*':
            return left * right;
          case '/':
            if (right === 0) {
              throw new Error('Division by zero');
            }
            return left / right;
        }
      }
      
      const result = calculateExpression(expression);
      
      console.log(result); // Output: 44
      document.getElementById("display").value = result

}

