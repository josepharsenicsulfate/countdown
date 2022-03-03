let launchDateStr = "March 4, 2022 11:27:55"
let launchDate = new Date(launchDateStr).getTime()

const timer = document.getElementsByClassName('timer')
const title = document.getElementsByClassName('title')

function main(){
    update()
    setTimeout(main, 1000) // loop each second
}

main()

function update(){
    let currDate = new Date().getTime()

    let timeLeft = launchDate-currDate // milliseconds

    if(timeLeft < 1){
        title[0].firstElementChild.innerHTML = "Successful launch!"
        for(let i = 0; i < timer.length; i++){
            timer[i].firstElementChild.innerHTML = formatNum(0)
            timer[i].firstElementChild.classList.remove('pink')
            timer[i].firstElementChild.classList.toggle('blink')
        }
    }else{
        let daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
        let hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
        let secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000)

        timer[0].firstElementChild.innerHTML = formatNum(daysLeft)
        timer[1].firstElementChild.innerHTML = formatNum(hoursLeft)
        timer[2].firstElementChild.innerHTML = formatNum(minutesLeft)
        timer[3].firstElementChild.innerHTML = formatNum(secondsLeft)
    }
}

function formatNum(digit){
    if(digit < 10){
        digit = '0' + digit
    }
    return digit
}