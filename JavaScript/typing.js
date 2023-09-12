"use-strict";

// define textdisplay to the id text in index.html
const textDisplay = document.getElementById("text");
// array to store phrases that will be cycled through
const phrases = [" Wee Herng", " 17 years old", " a student of SP", " a programmer"];
// array to store current phrase that is being displayed
var currentPhrase = [];
// initalize variables
var i = 0;
var j = 0;
var isDelete = false;

//function to loop the phrase display
function loop() {
    //display with .join so there is no comma between letters
    textDisplay.innerHTML = currentPhrase.join('');
    //if i is lower than the number of phrases in the array, continue
    if (i < phrases.length) {
        // if true, push current letter into currentPhrase array to be displayed
        if (!isDelete && j < phrases[i].length) {
            currentPhrase.push(phrases[i][j]);
            //j++ to change to next letter
            j++;
        }
        //if true, start to delete the letter with .pop
        if (isDelete && j <= phrases[i].length) {
            currentPhrase.pop(phrases[i][j]);
            //j-- to change to next letter
            j--;
        }
        // if j is at the last letter of that phrase, change isDelete to true
        if (j == phrases[i].length) {
            isDelete = true;
        }
        //if true change the phrase to the next one 
        if (isDelete && j == 0) {
            currentPhrase = [];
            isDelete = false;
            i++;
            // if all phrases has been cycled through, restart the cycle
            if (i == phrases.length) {
                i = 0;
            }
        }
    }
    //timeout the function to 200 ms
    setTimeout(loop, 200);
}

//call the function
loop();