'use strict';

function loadStartPage() {
  $('.container').html(
    `
    <fieldset>
      <div class="row">
      <div class="col-12">
        <p class="into">How much do you know about weather in the United States?</p>
      </div>
      </div>
      <div class="row">
      <div class="col-12">
        <button type="button" id="startbutton"> Start Quiz</button>
      </div>
      </div>
    </fieldset>
   `
  );

}



function resetScore() {
  STORE.score = 0;
  STORE.currentQuestion = 0;
}
function updateTicker() {
  $('.ticker').html(
    `
    <span> Question: ${STORE.currentQuestion + 1} / ${STORE.quiz.length} </span>
    <span> Score: ${STORE.score} / ${STORE.quiz.length} </span>
    `
  );
}
function startQuiz() {
  resetScore();
  updateTicker();
  $('#startbutton').on('click', function(event){
    event.preventDefault();
    renderQuestion();
  });
  
  }

function renderQuestion() {
   if (STORE.currentQuestion === STORE.quiz.length) {
     renderFinalScore();
   }
   else{
     let q = STORE.quiz[STORE.currentQuestion];
     $('.container').html(
       `
       <div>
       <form id="js-questions" class="question-form">
         <fieldset>
          <div class="question-area">
            <legend> ${q.question}</legend>
          </div>
          
          <div class="answers">
          </div>

          <div class="buttons">
           <button type = "submit" id="answer" tabindex="5">Submit</button>
          </div>
          
        </fieldset>
      </form>
      </div>
       `
     );
   }
   renderAnswer();
}

function renderAnswer() {

}


function submitAnswer() {

}

function renderCorrect() {

}

function renderIncorrect() {

}

function renderFinalScore() {

}

function handleQuizApp(){

  loadStartPage();
  startQuiz();
}

$(handleQuizApp);