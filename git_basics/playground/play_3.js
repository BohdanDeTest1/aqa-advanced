
let finishDate = "2024-09-07"; //date of vacation start date
var i = 1;
function myLoop() {   
  let unixTimeCurrent = Date.now(); //timestamp of current date
  let unixTimeExpected = new Date(finishDate).getTime(); //timestamp of vacation start date
  let unixTimeDiff = unixTimeExpected - unixTimeCurrent; //difference between current & vacation start dates timestamps
  let seconds = Math.round(unixTimeDiff/1000); // converting of the millisec to sec
  let days = Math.floor(seconds/(24*3600)); //converting sec to days 
    seconds -= days*24*3600; //moving out full days from second
  let hours = Math.floor(seconds/3600); //converting left sec to hours
    seconds -= hours*3600; //moving out full hours from second
  let minutes = Math.floor(seconds/60); //converting left sec to minutes
    seconds -= minutes*60; //moving out full minutes from second
  setTimeout(function() { 
    process.stdout.write(`${days > 9 ? days : '0' + days} d ${hours > 9 ? hours : '0' + hours} h ${minutes > 9 ? minutes : '0' + minutes} m ${seconds > 9 ? seconds : '0' + seconds} s time left: ${new Date()}\r`+`\r`);   
      i++;                    
      if (i < unixTimeDiff) {      
        myLoop();            
      }                      
    }, 1000) //loop timeout
   
  }
myLoop() //loop start

