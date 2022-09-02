// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    //why is this not displaying?
    let missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `<h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${name} </li>
                   <li>Diameter: ${diameter} </li>
                   <li>Star: ${star} </li>
                   <li>Distance from Earth: ${distance} </li>
                   <li>Number of Moons: ${moons} </li>
               </ol>
               <img src="${imageUrl}">
               `;

};


function validateInput(testInput) {
    if (testInput === "") {
        return "Empty"
    };

    if (isNaN(testInput) === true) {
        return "Not a Number"
    };

    if (isNaN(testInput) === false) {
        return "Is a Number"
    };

};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    //let pilotNameInput = document.getElementsByName("pilotName")[0].value;
    //let copilotNameInput = document.getElementsByName("copilotName")[0].value;
    //let fuelLevelInput = document.getElementsByName("fuelLevel")[0].value;
    //let cargoLevelInput = document.getElementsByName("cargoMass")[0].value;

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        console.log("All fields are required");
    }

    else if (validateInput(pilot) !== "Not a Number" || validateInput(copilot) !== "Not a Number") {
        console.log("Requires text, not a number.");
    }

    else if (validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
        console.log("Requires a number, not text.");
    }

    else {
        let launchStatus = document.getElementById("launchStatus");
        list.style.visibility = "visible";
        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;

        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        if (fuelLevel < 10000 && cargoLevel <= 10000) {

            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        else if (fuelLevel >= 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        }

        else if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelStatus.innerHTML = "Fuel level too low for launch"
            cargoStatus.innerHTML = "Cargo mass too heavy for launch"
        }
        else //(fuelLevel >= 10000 && cargoLevel <= 10000) 
        {
            
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "rgb(65, 159, 106)";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }
    };
};


async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });
    return planetsReturned;
};

function pickPlanet(planets) {
    let randNum = Math.floor(Math.random() * planets.length);
    //console.log(randNum);

    return planets[randNum];
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
