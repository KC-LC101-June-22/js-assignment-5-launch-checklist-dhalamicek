// Write your JavaScript code here!
//here is where event listener is and bring in functions
const scriptHelper.js
let button = document.getElementById("formSubmit") // do I need this?  Why is the submit button not working?
window.addEventListener("load", function() {
    let form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
    
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    let list = document.getElementById("faultyItems"); //do I need to update list in formSubmission to somehow make the function DRY?
   event.preventDefault();
    //let pilotStatus = form.getElementById("pilotStatus");
    //let copilotStatus = form.getElementByName("copilotStatus");
    //let fuelLevel = form.getElementByName("fuelLevel");
   // let cargoLevel = form.getElementByName("cargoMass");
//since inputs are all classified as text, do I need to change type of fuelLevel and cargoMass into numbers?
   formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
   //is that how I get the inputs in the function as parameters? what is the list parameter referring to -faultyitems??? 
   //why is this undefined?

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
        myFetch();
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(listedPlanets);
   })
   
});
});
