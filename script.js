// Write your JavaScript code here!
//here is where event listener is and bring in functions
const scriptHelper = require('./scriptHelper.js');
let button = document.getElementById("formSubmit");
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
    
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    //let pilotStatus = form.getElementById("pilotStatus");
    //let copilotStatus = form.getElementByName("copilotStatus");
    //let fuelLevel = form.getElementByName("fuelLevel");
   // let cargoLevel = form.getElementByName("cargoMass");
//since inputs are all classified as text, do I need to change type of fuelLevel and cargoMass into numbers?
   scriptHelper(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput)
   //is that how I get the inputs in the function as parameters? what is the list parameter referring to???
//if preventDefault is to go in this file, where do I put it and how since it depends on the functions?

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
