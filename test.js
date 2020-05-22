// API used to fetch information and flag picture
const url = "https://sampleapis.com/the-states/api/the-states";

const submitButton = document.querySelector(".submit-button");
const resetButton = document.querySelector(".reset-button");
const inputValue = document.querySelector("input");

let userInput = "";

submitButton.addEventListener("click", () => {
    userInput = inputValue.value;
});

let container = document.createElement("div");
container.id = "container";

function getInfo() {
    fetch(url).then((res) => {
        res.json().then((data) => {
            data.forEach((ind) => {
                if(ind.name.toLowerCase() === userInput.toLowerCase()){

                    container.innerHTML = "";

                    // State Name
                    let stateName = document.createElement("h1");
                    stateName.id = "state-name";
                    stateName.innerText = ind.name;
                    container.appendChild(stateName);
                    
                    // Capital
                    let capitalName = document.createElement("p");
                    capitalName.id = "capital-name";
                    capitalName.innerText = "Capital: " + ind.capital;
                    container.appendChild(capitalName);

                    // Largest City
                    let largestCity = document.createElement("p");
                    largestCity.id = "largest-city";
                    largestCity.innerText = "Largest City: " + ind.largest_city;
                    container.appendChild(largestCity);

                    // Population 
                    let populationNumber = document.createElement("p");
                    populationNumber.id = "population-number";
                    populationNumber.innerText = "Population: " + ind.population;
                    container.appendChild(populationNumber);

                    // Flag 
                    let flagPic = document.createElement("img");
                    flagPic.id = "flag-pic";
                    flagPic.src = ind.flag;
                    flagPic.style = "width:400px; height:300px;"
                    container.appendChild(flagPic);

                    document.body.append(container);
                    document.getElementById('input').value = '';
                }
            });
        });
    });
}