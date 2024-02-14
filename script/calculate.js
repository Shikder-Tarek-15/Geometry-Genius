//Triangle Function
function calculateTriangle(){
    const triangleBase = document.getElementById('triangle-base');
    const triangleBaseText = triangleBase.value;
    const base = parseFloat(triangleBaseText);


    const triangleHeight = document.getElementById('triangle-height');
    const height = parseFloat(triangleHeight.value);

    const area = 0.5* base * height;
    console.log(area);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}

//Rectangle Function
function calculateRectangle(){
    const rectangleWidth = document.getElementById('rectangle-width');
    const width = parseFloat(rectangleWidth.value);

    const rectangleLength = document.getElementById('rectangle-length');
    const length = parseFloat(rectangleLength.value);

    const rectangleArea = width*length;
    console.log(rectangleArea);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = rectangleArea;
}