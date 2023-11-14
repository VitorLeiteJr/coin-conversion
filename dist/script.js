let form = document.getElementById("form");

form.addEventListener("submit", (e)=>{  
   e.preventDefault();
  
  let value = document.getElementById("value");
  let rate = document.getElementById("rate");
  
  
let result=value.value*rate.value;
  
  result=result.toFixed(2);  
  document.getElementById("result").innerHTML = "value final: R$  "+result;
});