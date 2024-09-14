var display_value = document.getElementById('display');
var currentvalue = "0";// initail value
var count=null;
function clearValue() {
    display_value.value = "0";
    currentvalue = "0";
}  //Function used to clear the value

function updateDisplay() {
    display_value.value = currentvalue;
} //Function used to update the value in display

document.addEventListener('keydown', (event) => {
    let key = event.key;

    if (key === 'Escape') {
        clearValue();
        return; // Exit early after clearing
    }

    if (/^[0-9]$/.test(key)) {
        if (currentvalue === "0") {
            currentvalue = key;
        } else {
            currentvalue += key;
        }
        updateDisplay();
    }

    if (key === 'Backspace') {
        if (currentvalue.length > 1) {
            currentvalue = currentvalue.slice(0, -1);
        } else {
            currentvalue = "0";
        }
        updateDisplay();
    }
});
function Operator(key){
    if(currentvalue ==="0"){
        alert("Wrong Syntax");
    }
    else{
        currentvalue+=key;
        updateDisplay();
    }
}
 function resultvalue(){
    if(count%2==0){
        currentvalue = eval(currentvalue);
    }
    else{
        alert("Please close the bracket");
    }
      
        currentvalue = currentvalue.toString();
        updateDisplay();
}

function adderValue(key){
    if(key === ')'||'('){
         count++;
    }
    if(currentvalue === '0'){
        currentvalue=key;
    }
    else{
    currentvalue+=key;}
   updateDisplay();
   
}