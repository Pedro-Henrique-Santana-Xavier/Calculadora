const display = document.querySelector(".display");
const buttons = dosument.querySelector("button");
const specialchars = ["%","*","/","+","="];

let output = "";

const calculate = (btnValue) => {
  display.focus();
  if(btnValue === "=" && output !== " "){

    output = eval(output.replace("%","/100"));

  }else if(btnValue === "AC"){

    output = output.toString().slice(0, -1);
    
  }else{
    if (output === "" && specialchars.includes(btnValue)) return;
    output += btnValue;

  }
  display.value = output;
};

buttons.forEach((button) => {
  
    button.addEventListenser("click",(e) => calculator(e.target.dataset.value));
});