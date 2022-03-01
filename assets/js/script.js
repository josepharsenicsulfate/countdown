let time = new Date();

let launchDate = { years: 2022, months: 5, days: 10, hours: 8, minutes: 30, seconds: 0 }

let currDate = { 
    years: time.getFullYear(), 
    months: time.getMonth()+1, 
    days: time.getDate(), 
    hours: time.getHours(), 
    minutes: time.getMinutes(),
    seconds: time.getSeconds() 
}

// console.log(countdown(launchDate,currDate).months)
console.log(howManyDays(10,2022))

function main(){

    setTimeout(main, 1000)
}

main()

function countdown(launchDate, currDate){
    let countdown = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }

    countdown.years = launchDate.years - currDate.years
    countdown.months = (launchDate.months - currDate.months)+(countdown.years*12)
    
    return countdown
}

function howManyDays(refMonth, refYear){
    let days
    if(refMonth == 2){
        if(leapYear(refYear)){
            days = 29
        }else{
            days = 28
        }
    }else if(refMonth == 1 ||
            refMonth == 3 ||
            refMonth == 5 ||
            refMonth == 7 ||
            refMonth == 8 ||
            refMonth == 10 ||
            refMonth == 11){
                days = 31
    }else{
        days = 30
    }
    return days
}

function leapYear(refYear){
    if(refYear%100 == 0 && refYear%400 == 0){
        return true
    }else if(refYear%100 == 0){
        return false
    }else if(refYear%4 == 0){
        return true
    }else{
        return false
    }
}

const parent = document.getElementById('countdown')


// let countdown = { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 }