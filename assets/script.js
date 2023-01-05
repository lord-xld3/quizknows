//#region Constants
const arrButtonToStart = document.getElementsByClassName("toStart") // Array of buttons that return to start page
const buttonStart = document.getElementById("start")
const buttonScores = document.getElementById("scores")
const buttonClear = document.getElementById("clear")
const buttonSubmit = document.getElementById("submit")
const arrScreen = document.getElementsByTagName("div") // Array of "screens" that can be shown to user
const questionH1 = document.getElementById("questionText")
const winH1 = document.getElementById("winText")
const arrQuestions = ["What can be prefixed to coerce a variable into a number?","What is the result of true + 4?","When arrays contain arrays, they are sometimes called _______."]
const arrCorrectAnswers = ["+","5","Multi-dimensional"]
const arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
var lastScreen = 0
//#endregion

//#region Interaction
buttonStart.addEventListener("click",startQuiz)
buttonScores.addEventListener("click",showScores)
for (i=0; i<arrButtonToStart.length; i++){ // Return to start page listeners
    arrButtonToStart[i].addEventListener("click", function returnToStart(){
        arrScreen[lastScreen].style="display: none;"
        arrScreen[0].style="display: flex;"
})}
//#endregion

//#region Init
arrScreen[0].style="display: flex;"
arrScreen[1].style="display: none;"
arrScreen[2].style="display: none;"
arrScreen[3].style="display: none;"
//#endregion

function startQuiz(){
    lastScreen = 2
    arrScreen[0].style="display: none;"
    arrScreen[2].style="display: flex;"
    let correctButton = questionH1.appendChild(document.createElement("button"))
    //start timer
    for (i=0; i<arrQuestions.length; i++){
        questionH1.textContent=arrQuestions[i] // Display question
        correctINT = Math.floor(Math.random()*4) // Correct answer in random position
        for (j=0; j<3; j++){ // Generate buttons
            if (j==correctINT) {
                correctButton.textContent=arrCorrectAnswers[i]
                correctButton.addEventListener("click",i++)
            }
        }
    }
    
}

function winScreen(){
    lastScreen = 3
    buttonSubmit.addEventListener("click",submitScore())
}

function showScores(){
    lastScreen = 1
    buttonClear.addEventListener("click",clearScores())
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