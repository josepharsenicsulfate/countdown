let toDateStr = "March 5, 2022 12:00:00"
let toDate = new Date(toDateStr).getTime()

const timer = document.getElementsByClassName('timer')

setInterval(function(){
    update()
}, 1000)


function update(){
    let fromDate = new Date().getTime()

    let timeLeft = toDate-fromDate // milliseconds
    
    let daysLeft = ((((timeLeft / 1000) / 60) /60 )/ 24)
    
    timer[0].firstElementChild.innerHTML = Math.floor(daysLeft)
    timer[1].firstElementChild.innerHTML = Math.floor(hoursLeft)
    timer[2].firstElementChild.innerHTML = Math.floor(minutesLeft)
    timer[3].firstElementChild.innerHTML = Math.floor(secondsLeft)
}