'use strict';

function loadStartPage() {
  $('.quiz-area').html(
    `
     <p class='intro'>How much do you know about weather in the United States?</p>      
     
     <div>
      <button type='button' id='startbutton' class='start'> Start Quiz</button>
     </div>
   `
  );
  
}


function nextQuestion() {
  // $('#startbutton').on('click', function(event){
    $('.quiz-area').on('click', '.start', event => {
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
      <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
      <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>
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
  // $('body').on('submit','#js-questions', function(event) {
  //   event.preventDefault();
  
  //   let currentQ = STORE.quiz[STORE.currentQuestion-1];
  //   let selectedOption = $('input[name=choices]:checked').val();
  //   console.log(selectedOption);
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
    
  // });
  $('.quiz-area').on('submit', event => {
    event.preventDefault();
    let userClick = $('input:checked').val();
    let currentQ = STORE.quiz[STORE.currentQuestion - 1];
    let correctAnswer = currentQ.correct;
    if (userClick === correctAnswer){
      STORE.score++;
      renderCorrect();
    }
    else {
      renderIncorrect(correctAnswer);
    }
  });
}

function renderCorrect() {
    $('.quiz-area').html(
      `
      <section class='tickers'>
      <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
      <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>
      <h2>Congratulations!!!!</h2>
      <p class='text'>Keep up the good work</p>
      <button class='start'>Next</button>
      `
    );
}

function renderIncorrect(correct) {
  $('.quiz-area').html(
    `
    <section class='tickers'>
      <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
      <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>    
    <h2>Wrong Answer</h2>
    <p class='text'>The correct answer is : <span id='corrected'>${correct}</span></p>
    <button class='start'>Next</button>
    `
  );

}

function renderFinalScore() {
  if(STORE.score >= 5){
    $('.quiz-area').html(
      `
      <section class='tickers'>
        <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
        <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>    
      <h2>Amazing</h2>
      <p class='text'>You did it</span></p>
      <button class='restart'>Restart Quiz</button>
      `
    );
  }
  else {
    $('.quiz-area').html(
      `
      <section class='tickers'>
        <span class='question-ticker text'>Question: ${STORE.currentQuestion}/${STORE.quiz.length}</span>
        <span class='score-ticker text'>Score: ${STORE.score}/${STORE.quiz.length}</span>    
      <h2>Not so good</h2>
      <p class='text'>try harder</span></p>
      <button class='restart'>Restart Quiz</button>
      `
    );
  }
  }

function restartQuiz() {
  $('quiz-area').on('click', '.restart', event => {
    event.preventDefault();
    STORE.currentQuestion = 0;
    STORE.score = 0;
    loadStartPage();
  });
}

function handleQuizApp(){

  loadStartPage();
  nextQuestion();
  checkAnswer();
  restartQuiz();
  
}

$(handleQuizApp);