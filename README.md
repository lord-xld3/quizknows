# quizknows
 A quiz for JavaScript

We begin by solving the problem before coding anything
![Solution](guessinggame.png)

Now that we understand the flow, let's solve some of the smaller problems

# Immutable - things that will never change

INT loopCount

INT timerPenalty

ARR prompts(ARR prompt(STR question)(STR correctAnswer)) // each prompt contains a question and a correctAnswer

ARR wrongAnswers // can be randomly inserted into any prompt

# Mutable - things that can change

FLOAT timer

INT prompts(i) // iterate thru each prompt

INT prompt(j) // 0=question 1=answer

ARR answerList // buttons/answers to display on screen, in random order

OBJ wrongButton // text = wrongAnswers(random splice)

OBJ correctButton // text = prompts(i).prompt(1) -- grab correct answer

# Interactables

SCREEN 0:

Button(high scores) Button (start quiz)

SCREEN 1:

Button(back to SCREEN 0) Button(clear scores)

SCREEN 2:

Button(back to SCREEN 0 // quit) Buttons(answers)

SCREEN 3:

TextField(initials) Button(submit score) => SCREEN 1

# Conditionals - let's think about how it should behave more in depth

OutOfTime?=>SCREEN 0 + display "Ran out of time!"

ELSE =>SCREEN 0 + display "Press Start to begin."

WrongAnswer?=>timer-(y)

ELSE =>prompts(i++)=>generateAnswersList





