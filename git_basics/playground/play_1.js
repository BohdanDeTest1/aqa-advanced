// days amount before vacation
let finishDate = "2024-09-07"; //date of vacation start date
let milSecInDay = 86400000; //amount of milliseconds in 24h
let unixTimeCurrent = Date.now(); //timestamp of current date
let unixTimeExpected = new Date(finishDate).getTime(); //timestamp of vacation start date
let unixTimeDiff = unixTimeExpected - unixTimeCurrent; //difference between current & vacation start dates timestamps
let daysLeft = Math.round(unixTimeDiff/milSecInDay) //difference between current & vacation start dates in days
console.log(`${daysLeft} days left`) 
