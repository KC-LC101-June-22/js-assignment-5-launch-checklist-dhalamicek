// Write your JavaScript code here!
//here is where event listener is and bring in functions

let button = document.getElementById("formSubmit");

window.addEventListener("load", function () {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotNameInput = document.querySelector("input[name=pilotName]").value;
        let copilotNameInput = document.querySelector("input[name=copilotName]").value;
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
        let cargoMassInput = document.querySelector("input[name=cargoMass]").value;

        let list = document.getElementById("faultyItems");
        event.preventDefault();


        formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);


        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        window.addEventListener("load", function () {
            let listedPlanetsResponse = myFetch();
            listedPlanetsResponse.then(function (result) {
                listedPlanets = result;
                console.log(listedPlanets);
            }).then(function () {
                console.log(listedPlanets);
                // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
                

            }); 
            let destination = pickPlanet(listedPlanets);
            let nameDestination = destination.name;
            let diameterDestination = destination.diameter;
            let starDestination = destination.star;
            let distanceDestination = destination.distance;
            let moonsDestination = destination.moons;
            let imageDestination = distination.image;
            
            addDestinationInfo(document, nameDestination, diameterDestination, starDestination, distanceDestination, moonsDestination, imageDestination);
        });

//why is the addDestinationInfo not displaying???


    });
});
;

