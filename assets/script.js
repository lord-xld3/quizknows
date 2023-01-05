//#region Constants
const arrButtonToStart = document.getElementsByClassName("toStart") // Array of buttons that return to start page
const buttonStart = document.getElementById("start")
const buttonScores = document.getElementById("scores")
const buttonClear = document.getElementById("clear")
const buttonSubmit = document.getElementById("submit")
const arrScreen = document.getElementsByTagName("div") // Array of "screens" that can be shown to user
const questionH1 = document.getElementById("questionText")
const winH1 = document.getElementById("winText")
const textarea = document.getElementById("textarea")
const highText = document.getElementById("highScores")
const timerDisplay = document.getElementById("timer")
const lostDisplay = document.getElementById("lostText")
const scoreHeader = document.getElementById("scoreContainer")
const arrQuestions = ["What can be prefixed to coerce a variable into a number?","What is the result of true + 4?","When arrays contain arrays, they are sometimes called _______."]
const arrCorrectAnswers = ["+","5","Multi-dimensional"]
var arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
var lastScreen = 0
//#endregion

//#region Interaction
buttonStart.addEventListener("click",startQuiz)
buttonScores.addEventListener("click",showScores)
buttonSubmit.addEventListener("click",submitScore)
buttonClear.addEventListener("click",function clearScores(){
    localStorage.removeItem("data")
    showScores()
})
// Return from scores
arrButtonToStart[0].addEventListener("click", returnToStart)
// Quit during quiz
arrButtonToStart[1].addEventListener("click", function quitBtn(){clearInterval(interval); returnToStart()})
// Return from win
arrButtonToStart[2].addEventListener("click", returnToStart)

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
}

function startQuiz(){
    lastScreen = 2; arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
    arrScreen[0].style="display: none;"
    arrScreen[2].style="display: flex;"
    startTime=60
    interval = setInterval(myTimer, 1000)
    timerDisplay.textContent="Time:" +  startTime
    showPrompt(0)
}

function myTimer(){
    if ((startTime--)<1){
        lostDisplay.textContent="Ran out of time!"
        clearInterval(interval)
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
    // Win!
    lostDisplay.textContent=""
    arrScreen[2].style="display: none;"
    arrScreen[3].style="display: flex;"
    lastScreen = 3
    winH1.textContent="Score:" + startTime
}

function showScores(){
    lastScreen = 1
    while (scoreHeader.childElementCount>1){
        scoreHeader.removeChild(scoreHeader.lastChild)
    }
    let dataObj = localStorage.getItem("data")
    if (dataObj){
        dataObj = JSON.parse(dataObj)
        for (i=0; i<dataObj.user.length || i<dataObj.score.length; i++){
            spanContainer = document.createElement("span")
            scoreHeader.appendChild(spanContainer)
            allSpans = document.getElementsByTagName("span")
            spanData = document.createElement("li")
            spanData.textContent=dataObj.user[i]
            allSpans[i+2].appendChild(spanData)
            spanData = document.createElement("li")
            spanData.textContent=dataObj.score[i]
            allSpans[i+2].appendChild(spanData)
        }
    }
    highText.textContent=""
    arrScreen[0].style="display: none;"
    arrScreen[1].style="display: flex;"
}


function submitScore(){
    let dataObj = localStorage.getItem("data")
    if (dataObj){
        submitData = JSON.parse(dataObj)
    }else{
        submitData = {user:[],score: []}
    }
    submitData.user.push(textarea.value)
    submitData.score.push(startTime)
    json = JSON.stringify(submitData)
    localStorage.setItem("data", json)
    arrScreen[3].style="display: none;"
    showScores()
}