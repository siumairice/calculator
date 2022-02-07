let nextNum = false
let firstNum = ""
let secondNum = ""
var answer = ""
let operation = null
let result = document.getElementById('result');


document.getElementById("num-1").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "1"
        result.textContent = firstNum  
    }else{
        secondNum+= "1"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-2").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "2"
        result.textContent = firstNum  
    }else{
        secondNum+= "2"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-3").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "3"
        result.textContent = firstNum  
    }else{
        secondNum+= "3"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-4").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "4"
        result.textContent = firstNum  
    }else{
        secondNum+= "4"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-5").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "5"
        result.textContent = firstNum  
    }else{
        secondNum+= "5"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-6").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "6"
        result.textContent = firstNum  
    }else{
        secondNum+= "6"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-7").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "7"
        result.textContent = firstNum  
    }else{
        secondNum+= "7"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-8").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "8"
        result.textContent = firstNum  
    }else{
        secondNum+= "8"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-9").addEventListener("click", () => { 
    if(nextNum==false){
        firstNum += "9"
        result.textContent = firstNum  
    }else{
        secondNum+= "9"
        result.textContent = secondNum
    }
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("num-0").addEventListener("click", () => { 
        if(nextNum==false){
            firstNum += "0"
            result.textContent = firstNum  
        }else{
            secondNum+= "0"
            result.textContent = secondNum
        }
    

    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("decimal").addEventListener("click", () => {
    if(!firstNum.includes(".")){
        if(nextNum==false){
            firstNum += "."
            result.textContent = firstNum  
        }
    }else if(!secondNum.includes(".")){
            secondNum+= "."
            result.textContent = secondNum
    }
    
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
})

document.getElementById("add").addEventListener("click", () =>{
    nextNum = true
    if(operation!==null){
        operate(firstNum, secondNum)
        firstNum = answer
        secondNum = ""
    }
    operation = "add"
    console.log(operation)
    console.log(`first: ${firstNum}, second: ${secondNum}`)
    result.textContent = `${firstNum} +`
})

document.getElementById("subtract").addEventListener("click", () =>{
    nextNum = true
    answer = firstNum
    if(operation!==null){
        operate(firstNum, secondNum)
        firstNum = answer
        secondNum = ""
    }
    operation = "subtract"
    console.log(operation)
    result.textContent = `${answer} -`
})

document.getElementById("multiply").addEventListener("click", () =>{
    nextNum = true
    if(operation!==null){
        operate(firstNum, secondNum)
        firstNum = answer
        secondNum = ""
    }
    operation = "multiply"
    console.log(operation)
    result.textContent = `${firstNum} x`
})

document.getElementById("divide").addEventListener("click", () =>{
    nextNum = true
    if(operation!==null){
        operate(firstNum, secondNum)
        firstNum = answer
        secondNum = ""
    }
    operation = "divide"
    console.log(operation)
    result.textContent = `${firstNum} ÷`
})

document.getElementById("operate").addEventListener("click", () =>{
    nextNum = true
    operate(firstNum, secondNum)
})
document.getElementById("clear").addEventListener("click", () =>{
    nextNum = false
    firstNum = ""
    secondNum = ""
    answer = ""
    operation = null
    console.log(`first: ${firstNum}`)
    console.log(`second: ${secondNum}`)
    result.textContent = 0
})


function operate(firstNum, secondNum){
    console.log(operation)
    if(operation == "add"){
        answer = (+firstNum)+(+secondNum)
    }else if(operation == "subtract"){
        answer = firstNum - secondNum
    }else if(operation == "multiply"){
        answer = firstNum * secondNum
    }else if(operation == "divide"){
        if(secondNum=="0"){
                secondNum = 1
                answer = firstNum / secondNum
                console.log("you cannot divide by zero!")
                alert("you cannot divide by zero!")
        }else{
            answer = firstNum / secondNum 
        }
    }else{
        answer = firstNum
    }
    console.log(`answer: ${answer}`)
    result.textContent = answer
    firstNum = answer
    secondNum = ""
    console.log(`first: ${firstNum} second: ${secondNum}`)
} 

console.log(`first: ${firstNum} second: ${secondNum}`)