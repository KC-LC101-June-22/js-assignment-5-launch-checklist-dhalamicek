// Write your helper functions here!
require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    let missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `
    
                  <h2>Mission Destination</h2>
               <ol>
                   <li>Name: ${destination.name} </li>;
                   <li>Diameter: ${destination.diameter} </li>
                   <li>Star: ${destination.star} </li>
                   <li>Distance from Earth: ${destination.distance} </li>
                   <li>Number of Moons: ${destination.moons} </li>
               </ol>
               <img src="${destination.image} ">
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

    let pilotNameInput = document.getElementsByName("pilotName")[0].value;
    let copilotNameInput = document.getElementsByName("copilotName")[0].value;
    let fuelLevelInput = document.getElementsByName("fuelLevel")[0].value;
    let cargoLevelInput = document.getElementsByName("cargoMass")[0].value;

    if (validateInput(pilotNameInput) === "Empty" || validateInput(copilotNameInput) === "Empty" || validateInput(fuelLevelInput) === "Empty" || validateInput(cargoLevelInput) === "Empty") {
        alert("All fields are required");
    }

    else if (validateInput(pilotNameInput) !== "Not a Number" || validateInput(copilotNameInput) !== "Not a Number") {
        alert("Requires text, not a number.");
    }

    else if (validateInput(fuelLevelInput) !== "Is a Number" || validateInput(cargoLevelInput) !== "Is a Number") {
        alert("Requires a number, not text.");
    }

    else {
        list.style.visibility = "visible";

        let launchStatus = document.getElementById("launchStatus");

        let pilotStatus = document.getElementById("pilotStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} Ready`;

        let copilotStatus = document.getElementById("copilotStatus");
        copilotStatus.innerHTML = `Copilot ${copilot} Ready`;

        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        if (fuelLevel < 10000 && cargoLevel < 10000) {

            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
        }

        else if (fuelLevel > 10000 && cargoLevel < 10000) {

            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            fuelLevel.innerHTML = "Fuel level ready for launch";
            cargoLevel.innerHTML = "Cargo mass low enough for launch";
        }

        else if (fuelLevel > 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelLevel.innerHTML = "Fuel level ready for launch";
            cargoLevel.innerHTML = "Cargo mass too high for launch";
        }

        else if (fuelLevel < 10000 && cargoLevel > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            fuelLevel.innerHTML = "Fuel level too low for launch"
            cargoLevel.innerHTML = "Cargo mass too high for launch"
        };

    };
};




async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        response.json().then(function (json) {
            console.log(json);
        });
    });
};

function pickPlanet(planets) {
    for (i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * 6);
        console.log(randNum)

    }; return planets[randNum]
};


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
