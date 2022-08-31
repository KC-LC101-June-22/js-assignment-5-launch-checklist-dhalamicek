// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
    return "Empty";
    };

    if (isNan(testInput) === true) {
    return "Not a Number";

    } else {
    return "Is a Number";
    };
      };


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //let pilotStatus = form.getElementById("pilotStatus");
   //let copilotStatus = form.getElementByName("copilotStatus");
   //let fuelLevel = form.getElementByName("fuelLevel");
   //let cargoLevel = form.getElementByName("cargoMass");
   
   if (validateInput() === "Empty") {
    alert("All fields are required");
   };

   if (validateInput(pilot) === "Not a Number" || validateInput(copilot) === "Not a Number") {
    alert("Not a Number");
   } else {
    let pilotName = document.getElementById("pilotStatus")
    pilotName.innerHTML = "<li>`Pilot ${pilot} Ready`</li>"
    let copilotName = document.getElementById("copilotStatus")
    copilotName.innerHTML = "<li>`Copilot ${copilot} Ready`</li>"
   };

   if(validateInput(fuelLevel) === "Is a Number" || validateInput(cargoLevel) === "Is a Number") {
    alert("Is a Number");
   };

   if (fuelLevel < 10000) {
    let launchStop = document.getElementById("launchStatus")
    launchStop.innerHTML = "<h2 style=color: red;>Shuttle not ready for launch</h2>"
    let fuelLow = document.getElementById("fuelStatus");
    fuelLow.innerHTML ="<li>Fuel level too low for launch</li>"
   };

   if (fuelLevel > 10000) {
    let fuelGood = document.getElementById("fuelStatus");
    fuelGood.innerHTML ="<li>Fuel level ready for launch</li>"
   };

   if (cargoLevel > 10000) {
    let launchStop = document.getElementById("launchStatus")
    launchStop.innerHTML = "<h2 style=color: red;>Shuttle not ready for launch</h2>"
    let cargoHigh = document.getElementById("cargoStatus")
    cargoHigh.innerHTML ="<li>Cargo mass too high for launch</li>"
   };

   if (cargoLevel < 10000) {
    let cargoLow = document.getElementById("cargoStatus")
    cargoLow.innerHTML ="<li>Cargo mass low enough for launch</li>"
    };

    if (fuelLevel > 10000 && cargoLevel < 10000) {
    let launchGo = document.getElementById("launchStatus")
    launchGo.innerHTML = "<h2 style=color: green;>Shuttle is ready for launch</h2>"
   };
};







async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
