//selection
document.addEventListener('DOMContentedLoaded',()=>{
    fecthData()
})
const search = document.getElementById('search')
const inputCity =document.getElementById('search-city')
let locate =document.querySelector('.location')
let weatherDescription =document.querySelector('#weather')
let weatherTemperature=document.querySelector('#temperature')
let weatherHimidity=document.querySelector('#humidity')
let weatherIcon =document.querySelector('#icon')
const morebtn =document.querySelector('#more')
const hiddeninfo =document.querySelector('.hidden')



//eventlisteners
search.addEventListener("click",buttonClick)
inputCity.addEventListener('keypress',searchCity)  

//entlisteners functions
//using the search button
function buttonClick(event){
event.preventDefault()
fecthData()
}
//using the Enter button to get the input
function searchCity(event){

    if (event.keyCode == 13){
        fecthData()
        
    }

}


//Dispay fetched information

function displayData(data){
locate.innerHTML =`${data.name},${data.sys.country}` 
weatherDescription.innerHTML =`${data.weather[0].description}`
weatherIcon.src=`https//openweathermap.org/img/wn/"${data.weather[0].icon}"@2x.png`
weatherTemperature.innerHTML =`Temperature:&nbsp&nbsp ${data.main.temp}<span>°C</span>`
weatherHimidity.innerHTML= `Humidity:&nbsp&nbsp ${data.main.humidity}<span>%</span>`

}


//Get request
function fecthData(){
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&units=metric&APPID=e3dc067684488394b79ea9c31d805834'
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
      displayData(data)
      console.log(data)
    })
}

