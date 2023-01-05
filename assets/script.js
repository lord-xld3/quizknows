//#region Constants
const arrButtonToStart = document.getElementsByClassName("toStart") // Array of buttons that return to start page
const buttonStart = document.getElementById("start")
const buttonScores = document.getElementById("scores")
const buttonClear = document.getElementById("clear")
const buttonSubmit = document.getElementById("submit")
const arrScreen = document.getElementsByTagName("div") // Array of "screens" that can be shown to user
const questionH1 = document.getElementById("questionText")
const winH1 = document.getElementById("winText")
const timerDisplay = document.getElementById("timer")
const lostDisplay = document.getElementById("lostText")
const arrQuestions = ["What can be prefixed to coerce a variable into a number?","What is the result of true + 4?","When arrays contain arrays, they are sometimes called _______."]
const arrCorrectAnswers = ["+","5","Multi-dimensional"]
var arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
var lastScreen = 0
//#endregion

//#region Interaction
buttonStart.addEventListener("click",startQuiz)
buttonScores.addEventListener("click",showScores)
for (i=0; i<arrButtonToStart.length; i++){arrButtonToStart[i].addEventListener("click", returnToStart)}
//#endregion

//#region Init
arrScreen[0].style="display: flex;"
arrScreen[1].style="display: none;"
arrScreen[2].style="display: none;"
arrScreen[3].style="display: none;"
//#endregion

function returnToStart(){
    arrScreen[lastScreen].style="display: none;"
    arrScreen[0].style="display: flex;"
    clearInterval(interval)
}

function startQuiz(){
    lastScreen = 2; arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
    arrScreen[0].style="display: none;"
    arrScreen[2].style="display: flex;"
    startTime=60
    timerDisplay.textContent="Time:" +  startTime
    interval = setInterval(myTimer, 1000)
    showPrompt(0)
}

function myTimer(){
    if ((startTime--)<1){
        lostDisplay.textContent="Ran out of time!"
        returnToStart()
    }
    timerDisplay.textContent="Time:" +  startTime
}

function showPrompt(i){
    if (i<arrQuestions.length){
        questionH1.textContent=arrQuestions[i] // Display question
        correctINT = Math.floor(Math.random()*4) // Correct answer in random position
        for (j=0; j<4; j++){ // Generate buttons
            if (j==correctINT) {
                let buttonGen = document.createElement("button")
                buttonGen.textContent=arrCorrectAnswers[i]
                buttonGen.addEventListener("click",function nextPrompt(){i++; showPrompt(i)})
                questionH1.appendChild(buttonGen)
            }
            else {
                let buttonGen = document.createElement("button")
                buttonGen.textContent=arrWrongAnswers.splice(Math.floor(Math.random()*arrWrongAnswers.length), 1)
                buttonGen.addEventListener("click",function badAnswer(){startTime=startTime-4; myTimer()})
                questionH1.appendChild(buttonGen)
            }
        }
        return
    }
    winScreen()
}

function winScreen(){
    lostDisplay.textContent=""
    arrScreen[2].style="display: none;"
    arrScreen[3].style="display: flex;"
    lastScreen = 3
    buttonSubmit.addEventListener("click",submitScore)
    winH1.textContent="Score:" + startTime
}

function showScores(){
    lastScreen = 1
    buttonClear.addEventListener("click",clearScores)
    arrScreen[0].style="display: none;"
    arrScreen[1].style="display: flex;"
}

function clearScores(){
    //TODO
}

function submitScore(){
    arrScreen[3].style="display: none;"
    arrScreen[1].style="display: flex;"
}