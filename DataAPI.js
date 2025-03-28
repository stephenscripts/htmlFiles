//let url = "https://reqres.in/api/users"
// let url = "http://freeapi.miniprojectideas.com/api/Annadata/GetAllCities"
// var data = dataCollection(url)

// async function dataCollection(url) {
//     var data = await fetch(url).then(res => res.json()).catch(error => console.log(error))
//     return data
// }

// Array of JSON objects
const city =[
  { name: "John", age: 30, isMarried: false },
  { name: "Jane", age: 25, isMarried: true },
  { name: "Alex", age: 35, isMarried: false },
  { name: "Mary", age: 28, isMarried: true },
  { name: "Paul", age: 40, isMarried: true },
  { name: "Anna", age: 22, isMarried: false },
  { name: "Steve", age: 50, isMarried: true },
  { name: "Laura", age: 27, isMarried: false },
  { name: "Mike", age: 33, isMarried: true },
  { name: "Emma", age: 29, isMarried: false },
];

const container = document.getElementById("List of countries")

data.forEach((city, index) => {
    // Create a new div for each JSON object
    const cityDiv = document.createElement("td")
    // Add the JSON string of the object to the div
    cityDiv.textContent = `City ${index + 1}: ${JSON.stringify(person, null, 2)}`;
    // Append the div to the container
    container.appendChild(cityDiv);
})