cont 









a

//Get request
function fecthData(){
    let url ='https://api.openweathermap.org/data/2.5/weather?q=Machakos,Kenya&APPID=e3dc067684488394b79ea9c31d805834'
    fetch(url)
    .then(response =>response.json())
    .then(data=>{
        console.log(data)
    })
}
fecthData()