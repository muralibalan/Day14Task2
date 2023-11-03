let displayValue = '';


function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
  }
 

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}


function backSpace() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
  }


function calculateResult() {
   try {
     displayValue = eval(displayValue);
     document.getElementById('display').value = displayValue;
    } catch (error) {
      document.getElementById('display').value = 'Error';
      alert("Only numbers and operators (+, -, *, /, %) are allowed.");
    }
  }

 