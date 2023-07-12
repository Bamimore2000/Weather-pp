const apiKey = "f771692e25f9cde5c1594d6a529fd2e3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search");
const cityy = document.querySelector(".city-name")


async function weatherChecker(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".name").innerHTML = data.name;
  document.querySelector(".number").innerHTML = Math.round(data.main.temp);
  document.querySelector(".humid").innerHTML = data.main.humidity + "%";
  document.querySelector(".speed").innerHTML = data.wind.speed + "km/hr";
}

search.addEventListener("click", function(){
    weatherChecker(cityy.value);
    console.log("clicked")
})

window.addEventListener("load", ()=>{
        weatherChecker("Ibadan")
    })
    
