//variables

let calculator = document.querySelector(".calc");
let metricRadio = document.getElementById("metric");
let imperialRadio = document.getElementById("imperial");
let heightUnit = document.getElementById("heightUnit");
let weightUnit = document.getElementById("weightUnit");
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let resultDis=document.querySelector(".result")
let result;
let showResultBtn=document.querySelector(".showResultBtn")
let healthStatus;
let minWeight
let maxWeight

let isMetric = true;

//########################################################################

metricRadio.onclick = () => {
  isMetric = true;
  heightInput.value = "";
  weightInput.value = "";
  heightUnit.innerHTML = "cm";
  weightUnit.innerHTML = "kg";
  resultDis.innerHTML=" <h4>your BMI is ...</h4>"
};
imperialRadio.onclick = () => {
  isMetric = false;
  heightInput.value = "";
  weightInput.value = "";
  heightUnit.innerHTML = "in";
  weightUnit.innerHTML = "lb";
  resultDis.innerHTML=" <h4>your BMI is ...</h4>"
};

metricRadio.click();

function calc() {
  if (isMetric) {
    result = weightInput.value / ((heightInput.value / 100) ** 2);
    minWeight=18.5*((heightInput.value/100)**2)
    maxWeight=24.9*((heightInput.value/100)**2)
  } else {
    result =  weightInput.value / (heightInput.value ** 2) *703;
    minWeight=18.5*(heightInput.value**2)/703
    maxWeight=24.9*(heightInput.value**2)/703
  }
  if(result>=18.5 && result<=24.9){
    healthStatus="at healthy weight"
  }
  else if(result<18.5){
    healthStatus="under weight"
  }
  else{
    healthStatus="over weight"
  }
  
}
function showResult(hValue,wValue){
 calc()
 resultDis.innerHTML=`<h4>your BMI is <span>${Math.round(result*10)/10}</span>, your BMI suggests you're ${healthStatus}. your ideal weight is between  <span>${Math.round(minWeight*10)/10}${weightUnit.innerHTML}</span> - <span>${Math.round(maxWeight*10)/10}${weightUnit.innerHTML}</span></h4>`
}

showResultBtn.onclick=()=>{
  if(weightInput.value!=0 && heightInput.value!=0){
 showResult()
  }
  else{
    resultDis.innerHTML=" <h4>please enter valid value</h4>"
  }
  

}


// scroll animation 
let sec2=document.querySelector(".sec2")
let sec3=document.querySelector('.sec3')

window.onscroll=()=>{
  if(window.scrollY>=500){
    sec2.classList.add("sec2-scroll")
  }
  else{
    sec2.classList.remove("sec2-scroll")
  }
  if(window.scrollY>=1300){
    sec3.classList.add("sec3-scroll")
  }
  else{
    sec3.classList.remove("sec3-scroll")
  }
}