//selection
document.addEventListener('DOMContentedLoaded',()=>{
    fecthData()
})
const search = document.getElementById('search')
const inputCity =document.getElementById('search-city')
let locate =document.querySelector('.location')
let weatherDescription =document.querySelector('#weather')
let weatherTemperature=document.querySelector('#temperature')
let weatherHumidity=document.querySelector('#humidity')
let weatherIcon =document.querySelector('#icon')
const morebtn =document.querySelector('#more')
const hiddeninfo =document.querySelector('.hidden')
const weatherTimezone=document.getElementById('timezone')
const weatherPressure=document.getElementById('pressure')
const weatherWind=document.getElementById('wind')
const locationCoordinates=document.getElementById('coordinates')
const btnComment=document.getElementById('btnComment')
const commentSection=document.querySelector('.commentSection')
const form =document.querySelector('#formComment')
let namecommentor=document.querySelector('#name')
let  comment =document.getElementById('txtComment')
let date  = document.querySelector('.date')




//eventlisteners
search.addEventListener("click",buttonSubmit)
inputCity.addEventListener('keypress',searchCity) 
form.addEventListener('submit',getComment)
//hide/show details
morebtn.addEventListener('click',showInfo) 
btnComment.addEventListener('click',showComment)


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


//show and hide information after clicking 

function showComment(){
  commentSection.hidden = !commentSection.hidden
}
function showInfo(){
    hiddeninfo.hidden = !hiddeninfo.hidden
      
  }
  


//Dispay fetched information

function displayData(data){
locate.innerHTML =`${data.name},${data.sys.country}` 
weatherDescription.innerHTML =`${data.weather[0].description}`
// weatherIcon.src=`https//openweathermap.org/img/wn/"${data.weather[0].icon}"@2x.png`
weatherTemperature.innerHTML =`Temperature:&nbsp&nbsp ${data.main.temp}<span>°C</span>`
weatherHumidity.innerHTML= `Humidity:&nbsp ${data.main.humidity}<span>%</span>`
weatherTimezone.innerHTML=`Timezone:&nbsp&nbsp${data.timezone}`
weatherPressure.innerHTML=`Pressure:&nbsp&nbsp${data.main.pressure}`
weatherWind.innerHTML=`Wind Speed:&nbsp&nbsp${data.wind.speed}`
locationCoordinates.innerHTML=`Longitude&nbsp&nbsp${data.coord.lon},&nbsp&nbspLatitude&nbsp&nbsp${data.coord.lat}`
let now =new Date()
date.innerText =dateCreate(now)


}
//function for my dates
function dateCreate(d){
  let months =['January','February','March','April','May','June','July','August','September','October','November','December']
  let days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let day =days[d.getDay()]
  let date =d.getDate();
  let month =months[d.getMonth()];
  let year=d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}
//posting data to db.json
function getComment(event){
  event.preventDefault()
  let updateComment = {
  name:event.target.namecommentor.value,
  comment:event.target.comment.value
  
  }
// comments(updateComment)
  console.log('i have no data')
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
function comments(){
  fetch('http://localhost:3000/comments',{
    method:'POST',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(getComment)
  })
  .then(response=>response.json())
  .then(data=>getComment(updateComment))
  
  
}

