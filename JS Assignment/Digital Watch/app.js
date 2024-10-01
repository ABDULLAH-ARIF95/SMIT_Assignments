var hours = document.getElementById("hour")
var mins = document.getElementById("mins")
var seconds = document.getElementById("seconds")
var period = document.getElementById("period")

setInterval(() => {
    var time = new Date
    if(time.getHours()<=12){
        hours.innerText = time.getHours()
        mins.innerText = time.getMinutes()
        seconds.innerText = time.getSeconds()
        period.innerText = "AM"
        
    }
    else{
        hours.innerText = time.getHours()-12
        mins.innerText = time.getMinutes()
        seconds.innerText = time.getSeconds()
        period.innerText = "PM"
        
    }
    if(time.getMinutes()<10){
       mins.innerText = "0"+(time.getMinutes()).toString()
    }
    if(time.getHours()<10||time.getHours()>12 && time.getHours()<=21){
       hours.innerText = "0"+(time.getHours()-12).toString()
    }
    if(time.getSeconds()<10){
        seconds.innerText = "0"+(time.getSeconds()).toString()
     }
}, 1000);