let score = 101;
let e = "оцінка"
let scoreEstimation
switch (true){
    case (score < 60): 
        scoreEstimation = "незадовільна"
        console.log(`${e} ${scoreEstimation}`)
        break;
    case (score >= 60 && score <= 70): 
        scoreEstimation = "задовільна"
        console.log(`${e} ${scoreEstimation}`)
        break;
    case (score > 70 && score <= 80): 
        scoreEstimation = "добра"
        console.log(`${e} ${scoreEstimation}`)
        break;
    case (score > 80 && score <= 90): 
        scoreEstimation = "дуже добра"
        console.log(`${e} ${scoreEstimation}`)
        break;
    case (score > 90 && score <= 100): 
        scoreEstimation = "відмінна"
        console.log(`${e} ${scoreEstimation}`)
        break;
    default:
        scoreEstimation = "невірна кількість балів"
        console.log(`${scoreEstimation} - недопустима кількість балів \r\nкількість балів перевищена на ${score - 100} балів`)
}