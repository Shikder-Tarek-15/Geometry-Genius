//Triangle Function
function calculateTriangle(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    const area = 0.5* base * height;
    console.log(area);

    const result = showResult('triangle-area', area);
}

//Rectangle Function
function calculateRectangle(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    const rectangleArea = width*length;
    console.log(rectangleArea);

    const result = showResult('rectangle-area',rectangleArea);
}



//Get input value function
function getInputValue(id){
    const inputField = document.getElementById(id);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

//show result at card
function showResult(id,area){
    const areaSpan = document.getElementById(id);
    areaSpan.innerText = area;
    console.log("I am Here")
}