//selection
const search = document.getElementById('search')
const inputCity =document.getElementById('search-city')
let locate =document.querySelector('.location')
let weatherDescription =document.querySelector('#weather')
let weatherTemperature=document.querySelector('#temperature')


//eventlisteners
search.addEventListener("click",buttonClick)
inputCity.addEventListener('keypress',searchCity)  
//entlisteners functions
function buttonClick(event){
event.preventDefault()
fecthData()
}
function searchCity(event){
    // event.preventDefault()
    if (event.keyCode == 13){
        fecthData()
        
    }

}

function displayData(data){
locate.innerHTML =`${data.name},${data.sys.country}` 
weatherDescription.innerHTML =`${data.weather[0].description},${data.weather[0].icon}`
weatherTemperature.innerHTML =`${data.main.temp}`
}


//Get request
function fecthData(){
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&APPID=e3dc067684488394b79ea9c31d805834'
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
      displayData(data)
      console.log(data)
    })
}

