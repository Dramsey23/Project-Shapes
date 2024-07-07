const formWrapper = document.getElementById("form-wrapper")
const shapeWrapper = document.getElementById("shape-wrapper")
const circleButton = document.getElementById("circle-button")
const squareButton = document.getElementById("square-button")

formWrapper.addEventListener("change",(event)=>{
    shapeWrapper.innerHTML = renderShape(event.target.value.toLowerCase())

})

const renderShape = (userInput)=>{
    return `
    <div class="${userInput}" id="${userInput}"></div>
    <div class="${userInput}2" id="${userInput}2"></div>
    `
}

circleButton.addEventListener("click",(event)=>{
    shapeWrapper.innerHTML =renderShape(event.target.textContent)
    console.log(event)
})

squareButton.addEventListener("click",(event)=>{
    shapeWrapper.innerHTML =renderShape(event.target.textContent)
    console.log(event)
})