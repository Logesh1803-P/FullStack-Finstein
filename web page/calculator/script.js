const display=document.getElementById("display")
function appendToDisplay(char)
{
   
    if(char == "AC")
        display.value =" ";
    // else if(char=="=")
    // display.value="logesh";
    else
      display.value += char;

}

function  appendToEval(){
    const getValue = document.getElementById("display").value
    const evaluate = eval(getValue)
    document.getElementById("display").value = evaluate

}