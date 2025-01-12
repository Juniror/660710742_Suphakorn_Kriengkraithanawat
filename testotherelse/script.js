const display = document.getElementById("display");


function updateDisplay(value) {
    display.textContent = value;
}

document.querySelectorAll(".number, .operater").forEach((button) => {
    button.addEventListener("click", () => {
        updateDisplay(display.textContent === "0" ? button.textContent : display.textContent + button.textContent);
    });
});


document.querySelector(".equal").addEventListener("click",() => {
    let cotent = display.textContent
    let num = cotent.split(/[\+\-\*\/]/).map(Number);
    let operators = cotent.match(/[\+\-\*\/]/g); 
    let result = num[0]
    for (let i = 0; i < operators.length; i++) {
        result = compute(result,num[i+1],operators[i])
    }
    updateDisplay(result)
})

function compute(num1,num2,op) {
    switch (op){
        case "+" :
        return num1 + num2;
    
        case "*" :
        return num1 * num2;
        
        case "-" :
        return num1 - num2;
      
        case "/" :
        return num1 / num2;
   
    }
}