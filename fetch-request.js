// const request = new XMLHttpRequest();

// request.open("GET", "https://restcountries.com/v3.1/all", true);

// request.onload = function (e) {
//   var response = JSON.parse(request.responseText);
//   response.forEach(element => {
//     console.log(element.flag);
//   });
// }

// request.send(null);


// const resultValue = fetch("https://restcountries.com/v3.1/all")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));

// throw new Error("Some Error to break the code");

// console.log("Line 21");
// console.log(response);

// const fetchResult = fetch("https://restcountries.com/v3.1/all");
// console.log(fetchResult);

// const weatherRsponse = fetch("https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=991f626650507e6605c2ca33f8edc191")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch((err) => console.log(err));



// console.log("Line 1");
// try {
//   console.log("Inside Try Line 1");
//   // Operation which prone to error
//   throw new Error("Error In Between");
// } catch (err) {
//   console.log(err);
// }
// console.log("Line 2");
// console.log("Line 3");

// Async Await ----> to wrap an asynchronous operation whose result may be uncertain
// Returns a promise
const SampleFunc = async () => {
  try {
    const response = await fetch("https://rtcountries.com/v3.1/all");
    const data = await response.json();
    console.log("Response Data",data);
    
  } catch (err) {
    console.log(err);
  }
} 

SampleFunc();

console.log("Outside Func");

