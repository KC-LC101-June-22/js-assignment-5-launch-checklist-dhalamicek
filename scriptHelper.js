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
        return "Empty"};

    if (isNaN(testInput) === true) {
    return "Not a Number"};

    if (isNaN(testInput) === false) {
    return "Is a Number"};
    
    };


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //*how do I incorporate list - why do I need to? what is it?
   let pilotNameInput = document.getElementsByName("pilotName")[0].value;
   let copilotNameInput = document.getElementsByName("copilotName")[0].value;
   let fuelLevelInput = document.getElementsByName("fuelLevel")[0].value;
   let cargoLevelInput = document.getElementsByName("cargoMass")[0].value;

   //when an alert comes up below, how do i have it clear the form inputs and run through this validation again?

   if (validateInput(pilotNameInput) === "Empty" || validateInput(copilotNameInput) === "Empty" || validateInput(fuelLevelInput) === "Empty" || validateInput(cargoLevelInput) === "Empty") {
    alert("All fields are required");
    preventDefault()
   };

   if (validateInput(pilotNameInput) !== "Not a Number" || validateInput(copilotNameInput) !== "Not a Number") {
   alert("Requires text, not a number."); //this is alerting even when input is correct
   preventDefault()
};

   if(validateInput(fuelLevelInput) !== "Is a Number" || validateInput(cargoLevelInput) !== "Is a Number") {
    alert("Requires a number, not text."); //if all data is valid, this still comes up
    preventDefault()
};

  if (validateInput(pilotNameInput) === "Not a Number" && validateInput(copilotNameInput) === "Not a Number" && validateInput(fuelLevelInput) === "Is a Number" && validateInput(cargoLevelInput) === "Is a Number") {
    //do i put an event listener and create a form of the inputs to let the function to keep moving down thru the code and if so...how? 
    let launch = document.getElementById("launchStatus");   
    let pilotStatus = document.getElementById("pilotStatus");
    pilotStatus.innerHTML = "<li>`Pilot ${pilot} Ready`</li>"
    let copilotStatus = document.getElementById("copilotStatus");
    copilotStatus.innerHTML = "<li>`Copilot ${copilot} Ready`</li>"
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    while (fuelLevel < 10000 && cargoLevel < 10000) {
    
    launch.innerHTML = "<h2 style=color: red;>Shuttle not ready for launch</h2>"
    fuelStatus.innerHTML = "<li>Fuel level too low for launch</li>"
    cargoStatus.innerHTML = "<li>Cargo mass low enough for launch</li>"

    };
    
    while (fuelLevel > 10000  && cargoLevel < 10000) {

    launch.innerHTML = "<h2 style=color: green;>Shuttle is ready for launch</h2>"
    fuelLevel.innerHTML ="<li>Fuel level ready for launch</li>"
    cargoLevel.innerHTML = "<li>Cargo mass low enough for launch</li>"

   };
   
   while (fuelLevel > 10000 && cargoLevel > 10000) {
    launch.innerHTML = "<h2 style=color: red;>Shuttle not ready for launch</h2>"
    fuelLevel.innerHTML ="<li>Fuel level ready for launch</li>"
    cargoLevel.innerHTML ="<li>Cargo mass too high for launch</li>"

   };
   
   while (fuelLevel < 10000 && cargoLevel > 10000) {
    launch.innerHTML = "<h2 style=color: red;>Shuttle not ready for launch</h2>"
    fuelLevel.innerHTML = "<li>Fuel level too low for launch</li>"
    cargoLevel.innerHTML ="<li>Cargo mass low enough for launch</li>"
    };
    };
};

/*if (fuelLevel > 10000 && cargoLevel < 10000) {
        let launchGo = document.getElementById("launchStatus")
        launchGo.innerHTML = "<h2 style=color: green;>Shuttle is ready for launch</h2>"
        let pilotName = document.getElementById("pilotStatus")
        pilotName.innerHTML = "<li>`Pilot ${pilot} Ready`</li>"
        let copilotName = document.getElementById("copilotStatus")
        copilotName.innerHTML = "<li>`Copilot ${copilot} Ready`</li>"
        
   };//the above is not DRY. How do I do that?*/


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json() });

    return planetsReturned;
}

function pickPlanet(planets) {
    for (i=0; i<6; i++) {
        let randNum = Math.floor(Math.random()*6);
        return planets[randNum];
};
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
