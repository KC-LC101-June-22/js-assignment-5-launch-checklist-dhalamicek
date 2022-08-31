// Write your JavaScript code here!
//here is where event listener is and bring in functions
const scriptHelper = require('./scriptHelper.js');
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let pilotStatus = form.getElementById("pilotStatus");
    let copilotStatus = form.getElementByName("copilotStatus");
    let fuelLevel = form.getElementByName("fuelLevel");
    let cargoLevel = form.getElementByName("cargoMass");

    scriptHelper()


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});
});
