"use strict";

//rock paper scissors game
//define constants to different ids for display
const compChoiceDisplay = document.getElementById('compchoice');
const myChoiceDisplay = document.getElementById('mychoice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
var myChoice;
var compChoice;
var result;

//for each of the possible choices, which runs when one of the buttons are clicked, gets the id of the event that is clicked
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    myChoice = e.target.id;
    //if id is rock display image of rock
    if (myChoice == "Rock")
        myChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_rock.png\" alt=\"rock\" class=\"img-fluid\">";
    //if id is paper display image of paper
    else if (myChoice == "Paper")
        myChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_paper.png\" alt=\"paper\" class=\"img-fluid\">";
    //if id is scissors display image of scissors
    else
        myChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_scissors.png\" alt=\"scissors\" class=\"img-fluid\">";
    generateComputerChoice();
    getResult();
}))

//function to generate computer's choice
function generateComputerChoice() {
    //randomise the choice
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    //if it is 1 then display rock img
    if (randomNumber === 1) {
        compChoice = 'Rock';
        compChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_rock.png\" alt=\"rock\" class=\"img-fluid\">";
    }
    //if it is 2 then display scissors img
    if (randomNumber === 2) {
        compChoice = 'Scissors';
        compChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_scissors.png\" alt=\"scissors\" class=\"img-fluid\">";
    }
    //if it is 3 then display paper img
    if (randomNumber === 3) {
        compChoice = 'Paper';
        compChoiceDisplay.innerHTML = "<img src=\"../Graphics/sp_paper.png\" alt=\"paper\" class=\"img-fluid\">";
    }
}

//function to get result of game
function getResult() {
    if (myChoice == "Rock") {
        if (compChoice == "Paper") {
            result = "You Lose!";
        }
        else if (compChoice == "Rock") {
            result = "It's a tie!";
        }
        else { //compChoice is scissors
            result = "You Win!";
        }
    }
    else if (myChoice == "Paper") {
        if (compChoice == "Rock") {
            result = "You Win!";
        }
        else if (compChoice == "Paper") {
            result = "It's a tie!";
        }
        else { //compChoice is scissors
            result = "You Lose!";
        }
    }
    else { //Scissors
        if (compChoice == "Paper") {
            result = "You Win!";
        }
        else if (compChoice == "Scissors") {
            result = "It's a tie!";
        }
        else { //compChoice is rock
            result = "You Lose!";
        }
    }
    //display result
    resultDisplay.innerHTML = result;
}
