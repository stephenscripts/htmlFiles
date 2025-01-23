//let url = "https://reqres.in/api/users"
let url = "http://freeapi.miniprojectideas.com/api/Annadata/GetAllCities"
var data = dataCollection(url)

async function dataCollection(url) {
    var data = await fetch(url).then(res => res.json()).catch(error => console.log(error))
    return data
}

const container = document.getElementById("List of countries")

data.forEach((city, index) => {
    // Create a new div for each JSON object
    const cityDiv = document.createElement("td")
    // Add the JSON string of the object to the div
    cityDiv.textContent = `City ${index + 1}: ${JSON.stringify(person, null, 2)}`;
    // Append the div to the container
    container.appendChild(cityDiv);
})