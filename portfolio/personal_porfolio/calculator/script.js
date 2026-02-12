const display = document.getElementById("display");


function appendValue(val){
  display.value += val;
}

function clearDisplay(){
  display.value = "";
}

function backspace(){
  display.value = display.value.slice(0,-1);
}

/* REAL PERCENTAGE LOGIC
   500 × 10%  →  500 * 10 / 100 = 50
*/
function applyPercent(){
  try{
    let exp = display.value;

    // last operator find
    let match = exp.match(/(\d+\.?\d*)([\+\-\*\/])(\d+\.?\d*)$/);

    if(match){
      let base = parseFloat(match[1]);
      let operator = match[2];
      let percent = parseFloat(match[3]);

      let value = (base * percent) / 100;
      display.value = exp.replace(/(\d+\.?\d*)$/, value);
    }else{
      // single number percent
      display.value = exp / 100;
    }
  }catch{
    display.value = "Error";
  }
}

function calculate(){
  try{
    display.value = eval(display.value);
  }catch{
    display.value = "Error";
  }
}