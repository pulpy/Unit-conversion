let nNumber = document.getElementById("idInputEl").value;
let feet = document.getElementById("resultFeetIp").innerText;
let inputFtEl = document.getElementById("inputFt").innerText;

// set up variables
let dp = 3; // decimal places
let resultMeters = nNumber * 0.3048;
let resultFeet = nNumber * 3.28084;
let resultGallons = nNumber * 0.264172;
let resultLiters = nNumber * 3.78541;
let resultPounds = nNumber * 2.20462;
let resultKilos = nNumber * 0.453592;

inputFtEl = nNumber;

document.getElementById("inputFt").innerHTML = nNumber;

function updateNum() {
  // view input number
  nNumber = document.getElementById("idInputEl").value;

  // change lower input numbers
  document.getElementById("inputFt").innerHTML = nNumber;
  document.getElementById("inputNMeters").innerHTML = nNumber;
  document.getElementById("inputNl").innerHTML = nNumber;
  document.getElementById("inputNk").innerHTML = nNumber;
  document.getElementById("inputNg").innerHTML = nNumber;
  document.getElementById("inputNp").innerHTML = nNumber;

  // calculate conversions
  resultMeters = nNumber * 0.3048;
  resultFeet = nNumber * 3.28084;
  resultGallons = nNumber * 0.264172;
  resultLiters = nNumber * 3.78541;
  resultPounds = nNumber * 2.20462;
  resultKilos = nNumber * 0.453592;

  // check conversions via console logging
  // console.log("resultFeet = " + resultFeet.toFixed(dp));
  // console.log('resultMeters = ' + resultMeters.toFixed(dp));
  // console.log('resultGallons = ' + resultGallons.toFixed(dp));
  // console.log('resultLiters = ' + resultLiters.toFixed(dp));
  // console.log('resultPounds = ' + resultPounds.toFixed(dp));
  // console.log('resultKilos = ' + resultKilos.toFixed(dp));

  // conversions change numbers
  resultFeetIp.innerText = resultFeet.toFixed(dp);
  resultMetersIp.innerText = resultMeters.toFixed(dp);
  resultGallonsIp.innerText = resultGallons.toFixed(dp);
  resultLitersIp.innerText = resultLiters.toFixed(dp);
  resultPoundsIp.innerText = resultPounds.toFixed(dp);
  resultKilosIp.innerText = resultKilos.toFixed(dp);
}
//converion info calculations
/* 1 meter = 3.28084 foot
1 foot = 0.3048 meters
1 gallon = 3.78541 liters
1 liter = 0.264172 gallons
1 pound = 0.453592 kilos
1 Kilo = 2.20462 pounds

*/
