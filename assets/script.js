//#region Constants
const arrToStart = document.getElementsByClassName("toStart") // Array of buttons that return to start page
const arrScreen = document.getElementsByTagName("div") // Array of "screens" that can be shown to user
const arrQuestions = ["What can be prefixed to coerce a variable into a number?","What is the result of true + 4?","When arrays contain arrays, they are sometimes called _______."]
const arrCorrectAnswers = ["+","5","Multi-dimensional"]
const arrWrongAnswers = ["#",".toNumber()","0.","true4","4","NaN","Containers","Psuedo-Arrays","Array-tarded"]
const arrPrompts = [arrQuestions,arrCorrectAnswers]
//#endregion

//#region Interaction
for (i=0; i<arrToStart.length; i++){ // Return to start page listeners
    arrToStart[i].addEventListener("click", function clrScreen(lastScreen){
        arrScreen[lastScreen].style="display: none;"
})}
//#endregion

//#region Init
arrScreen[0].style="display: flex;"
//#endregion

function startQuiz(){

}