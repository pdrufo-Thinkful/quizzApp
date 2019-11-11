'use strict';

function loadStartPage() {
    $('.container').html(
        // `<form id="start">
        //     <fieldset>
        //     <p class="into">How much do you know about weather in the United States? Click start when you're ready to test your knowledge</p>
        //     <input type="submit" class="start-quiz" value="Start Quiz"</input>
        //     </fieldset>
        // </form>`
        `<h2>How much do you know about weather in the United States</h2>
         <p>Click Start when you're ready</p>
         <button type="button" class="start-button">Start</button>
        `
    );

}

function renderQuestion() {

}

function nextQuestion() {

}

function submitAnswer() {

}

function renderCorrect() {

}

function renderIncorrect() {

}

function renderFinalScore() {

}

function (handleQuizApp){

    loadStartPage();
}

$(handleQuizzApp);