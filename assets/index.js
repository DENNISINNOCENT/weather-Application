//selection
const search = document.getElementById('search')
const inputCity =document.getElementById('search-city')

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

// function displayData(weather){
// console.log(weather)

// }


//Get request
function fecthData(){
    let url ='https://api.openweathermap.org/data/2.5/weather?q='+inputCity.value+'&APPID=e3dc067684488394b79ea9c31d805834'
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
      console.log(data)
    })
}

