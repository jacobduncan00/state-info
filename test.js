// API used to fetch information and flag picture
const url = "https://sampleapis.com/the-states/api/the-states";

const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const inputValue = document.querySelector("input");

let userInput = "";

submitButton.addEventListener("click", () => {
    userInput = inputValue.value;
});

function getInfo() {
    fetch(url).then((res) => {
        res.json().then((data) => {
            data.forEach((ind) => {
                if(ind.name.toLowerCase() === userInput.toLowerCase()){
                    // State Name
                    let stateName = document.createElement("h1");
                    stateName.id = "state-name";
                    stateName.innerText = ind.name;
                    document.body.appendChild(stateName);
                    
                    // Capital
                    let capitalName = document.createElement("p");
                    capitalName.id = "capital-name";
                    capitalName.innerText = "Capital: " + ind.capital;
                    document.body.appendChild(capitalName);

                    // Largest City
                    let largestCity = document.createElement("p");
                    largestCity.id = "largest-city";
                    largestCity.innerText = "Largest City: " + ind.largest_city;
                    document.body.appendChild(largestCity);

                    // Population 
                    let populationNumber = document.createElement("p");
                    populationNumber.id = "population-number";
                    populationNumber.innerText = "Population: " + ind.population;
                    document.body.appendChild(populationNumber);

                    // Flag 
                    let flagPic = document.createElement("img");
                    flagPic.id = "flag-pic";
                    flagPic.src = ind.flag;
                    flagPic.style = "width:600px; height:400px;"
                    document.body.appendChild(flagPic);
                }
            });
        });
    });
}

function resetInfo() {
    let stateName = document.getElementById("state-name");
    stateName.replaceWith("");

    let capitalName = document.getElementById("capital-name");
    capitalName.replaceWith("");

    let largestCity = document.getElementById("largest-city");
    largestCity.replaceWith("");

    let populationNumber = document.getElementById("population-number");
    populationNumber.replaceWith("");

    let flagPic = document.getElementById("flag-pic");
    flagPic.replaceWith("");

    document.getElementById('input').value = '';
}
