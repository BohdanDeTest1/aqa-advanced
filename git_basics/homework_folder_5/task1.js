let score = 101;
if(score < 60) {
    console.log("Незадовільно")
} 
else if (score >= 60 && score <= 70) {
    console.log("Задовільно")
}
else if (score > 70 && score <= 80) {
    console.log("Добре")
}
else if (score > 80 && score <= 90) {
    console.log("Дуже добре")
}
else if (score > 90 && score <= 100) {
    console.log("Відмінно")
}
else if (score > 100) {
    console.log(`${score} - недопустима кількість балів \r\nкількість балів перевищена на ${score - 100} балів`)
}
