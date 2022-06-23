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
const weatherTimezone=document.getElementById('timezone')
const weatherPressure=document.getElementById('pressure')
const weatherWind=document.getElementById('wind')
const locationCoordinates=document.getElementById('coordinates')



//eventlisteners
search.addEventListener("click",buttonSubmit)
inputCity.addEventListener('keypress',searchCity) 
morebtn.addEventListener('click',showInfo) 

//entlisteners functions
//using the search button
function buttonSubmit(event){
event.preventDefault()
fecthData()
}
//using the Enter button to get the input
function searchCity(event){

    if (event.keyCode == 13){
        fecthData()
        
    }

}
//show and hide information after clicking morebtn
function showInfo(){
    hiddeninfo.hidden = !hiddeninfo.hidden
      
  }


//Dispay fetched information

function displayData(data){
locate.innerHTML =`${data.name},${data.sys.country}` 
weatherDescription.innerHTML =`${data.weather[0].description}`
// weatherIcon.src=`https//openweathermap.org/img/wn/"${data.weather[0].icon}"@2x.png`
weatherTemperature.innerHTML =`Temperature:&nbsp&nbsp ${data.main.temp}<span>°C</span>`
weatherHimidity.innerHTML= `Humidity:&nbsp ${data.main.humidity}<span>%</span>`
weatherTimezone.innerHTML=`Timezone:&nbsp&nbsp&${data.timezone}`
weatherPressure.innerHTML=``

}
//reload the page after every 30seconds
setTimeout(() =>{
    location.reload();
  }, 60000);


//Get request
function fecthData(){
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&units=metric&APPID=e3dc067684488394b79ea9c31d805834'
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
      displayData(data)
      console.log(data)
    // .catch(error=>{
    //   console.log(error)
    // })
    })
}

