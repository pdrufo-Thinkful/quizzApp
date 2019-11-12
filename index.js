'use strict';

function loadStartPage() {
  $('.quiz-area').html(
    `
     <p class="intro">How much do you know about weather in the United States?</p>      
     
     <div class="button">
      <button type="button" id="startbutton"> Start Quiz</button>
     </div>
   `
  );
  
}


function nextQuestion() {
  $('#startbutton').on('click', function(event){
    event.preventDefault();
    if (STORE.currentQuestion < STORE.quiz.length){
      STORE.currentQuestion++;
      $('.quiz-area').html(renderQuestion());
    }
    else {
      $('.quiz-area').html(renderFinalScore(STORE.score));
    }

  });
}

function renderQuestion() {
  let q = STORE.quiz[STORE.currentQuestion -1];
  $('.quiz-area').html(
    `
      <section class='tickers'>
      <span class='question-ticker text>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
      <span class='score-ticker text>Score: ${STORE.score}/${STORE.quiz.length}</span>
       <div>
       <form id="js-questions" class="question-form">
         <fieldset>
          <div class="question-area">
            <legend> ${q.question}</legend>
          </div>
          
          <div class="answers">
          </div>

          <div>
           <button type = "submit" id="choice" tabindex="5"> Submit </button>
          </div>
          
        </fieldset>
      </form>
      </div>
       `
  );
  
  renderChoices();
}

function renderChoices() {
  let q = STORE.quiz[STORE.currentQuestion -1];
  for(let i=0; i<q.choices.length; i++)
  {
    $('.answers').append(`
        <input type = "radio" name="choices" id="choice${i+1}" value= "${q.choices[i]}" tabindex ="${i+1}" required> 
        <label for="choice${i+1}"> ${q.choices[i]}</label> <br/>
        <span id="js-r${i+1}"></span>
    `);
  }
}


function checkAnswer() {
  $('body').on('submit','#js-questions', function(event) {
    event.preventDefault();
  
    let currentQ = STORE.quiz[STORE.currentQuestion-1];
    let selectedOption = $('input[name=choices]:checked').val();
    console.log(selectedOption);
    //  if (1 === 1) {
    //    renderCorrect();
    //  } 
    //  if (selectedOption === currentQ.correct){
    //       STORE.score++;
    //       renderCorrect();
    //      }
    //      else{
    //        renderIncorrect();
    //      }
    
  });
}

// function renderCorrect() {
//     $('.quiz-area').html(
//       `
//       <h2>Congratulations!!!!</h2>
//       <p class='text'>Keep up the good work</p>
//       <button class='start'>Next</button>
//       `
//     );
// }

// function renderIncorrect(correct) {
//   $('.quiz-area').html(
//     `
//     <h2>Wrong Answer</h2>
//     <p class='text'>The correct answer is : <span id='corrected'>${correct}</span></p>
//     <button class='start'>Next</button>
//     `
//   );

// }

function renderFinalScore() {

}

function handleQuizApp(){

  loadStartPage();
  nextQuestion();
  checkAnswer();
  
}

$(handleQuizApp);