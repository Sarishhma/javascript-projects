const apiKey = "b0e6919e43c6c9a216bd248ffe79abca"; // Replace with your real key
function search(){
    const city = document.getElementById("cityInput").value.trim();
        if(city ==""){
        alert("city is empty")
        return;
    }
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
.then((response) => {
    if(!response.ok){
        throw new Error("city not found")
    }
    return response.json();
} )

.then ((data) =>{
 console.log(data);
 showWeather(data);
})
 .catch ((error)=>{
 alert(error.message);
 });
}
 function showWeather(data){
    document.getElementById("cityName").textContent= data.name;
    document.getElementById("temperature").textContent= `Temperature:${data.main.temp}°C`;
    document.getElementById("description").textContent=  `Weather: ${data.weather[0].description}`;
    document.getElementById("weatherInfo").classList.add("show");
 const weatherMain = data.weather[0].main;
 const weathericon = document.getElementById("weatherIcon")
 let iconpath ="";
  if( weatherMain==="Clouds"){
    iconpath="./images/cloudy.png"
 }
  else if( weatherMain==="Rain"){
    iconpath="./images/rainy.png"
 }
  else if( weatherMain==="Snow"){
    iconpath="./images/snowy.png"
 }
  else if( weatherMain==="Thunderstorm"){
    iconpath="./images/stormy.png"
 }
  else if( weatherMain==="Clear"){
    iconpath="./images/sunny.png"
 }
   else if( weatherMain==="Wind"){
    iconpath="./images/windy.png"
 }
 if (iconpath!=""){
    weathericon.src=iconpath;
    weathericon.alt= weatherMain;
    weathericon.style.display = "block"; // Make it visible now
 }
 else {
    weathericon.style.display = "none"; // If no match, keep it hidden
  }
}