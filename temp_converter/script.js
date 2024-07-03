function convertTemp() {                  // fetching elements 
    const temp = document.getElementById('temp').value;
    const unit = document.getElementById('unit').value;
    const output = document.getElementById('output');


    const temperature = parseFloat(temp);//storing temperature into float type

    let convertedTemp; 
    let convertedUnit;

    if (unit === 'Cel') {               //Celsius converting into fahrenheit
        convertedTemp = (temperature * 9/5) + 32;
        convertedUnit = 'Fahrenheit';


    } else if (unit === 'Fah') {       //fahrenheit converting into celsius 
        convertedTemp = (temperature - 32) * 5/9;
        convertedUnit = 'Celsius';
    }
    output.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} ${convertedUnit}`;//displaying the output
}