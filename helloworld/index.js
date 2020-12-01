

// function multiplyBy()
// {
//         num1 = document.getElementById("firstNum").value;
//         num2 = document.getElementById("secondNum").value;

//         mul=num1*num2;
//         output=document.getElementById("output").innerHTML=mul;
       
//         //  console.log(<h1>mul</h1>)
//         // document.getElementById("result").innerHTML = num1 * num2;
// }

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}
function additionBy() 
{ 
 
        num1 = document.getElementById("firstNumber").value;
        console.log(typeof(num1))
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = +num1 + +num2;
}
function subtractionBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 - num2;
}

//function that display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val 
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 
