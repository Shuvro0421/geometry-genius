function calculateTriangleArea() {
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5 * base * height;

    if (isNaN(base) || isNaN(height)) {
        alert('Insert number');
        return;
    }

    setElementInnerText('triangle-area', area);

    addToCalculationEntry('Triangle', area);

}

function calculateRectangleArea() {
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;

    if (isNaN(width) || isNaN(length)) {
        alert('Insert number');
        return;
    }

    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}



// reusable function --reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;

    if (isNaN(base) || isNaN(height)) {
        alert('Insert number');
        return;
    }

    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);




}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const area = Math.PI * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);

    if (isNaN(majorRadius) || isNaN(minorRadius)) {
        alert('Insert number');
        return;
    }

    setElementInnerText('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse', areaTwoDecimal);
}

// reusable get input value field in number
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}


// reusable set span or paragraph 
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;

}

// add to calculation entry
// 1.get the element where you want to add the dynamic html 
// 2.create an element you want to add
// 3.if needed add some class
// 4.set innerHTML it could be dynamic template string
// 5.append the created element as a child of the parent
function addToCalculationEntry(areaType, area) {

    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-sm btn-success">convert</button>`;
    calculationEntry.appendChild(p);

}


