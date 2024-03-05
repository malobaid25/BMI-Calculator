const buttonEle=document.getElementById("btn");
const inputEle=document.getElementById("bmi-result");
const weightEle=document.getElementById("weight-condition");

function calculateBMI(){
    const weightValue=document.getElementById("weight").value;
    const heightValue=document.getElementById("height").value/100;
    
const bmiValue=weightValue/(heightValue*heightValue);
inputEle.value=bmiValue;



if(inputEle<18.5)
{
    weightEle.innerText="Under Weight";
}else if (bmiValue>=18.5 && bmiValue <=24.9)
{
weightEle.innerText="Normal Weight";
}else if (bmiValue>=25 && bmiValue<=30)
{
    weightEle.innerText="Over weight";
}else if (bmiValue>=30.5)
{
    weightEle.innerText="obese";
}
}

buttonEle.addEventListener("click",calculateBMI);

