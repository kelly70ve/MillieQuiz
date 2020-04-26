var questions = [ 
  {
    question: "What is Millie's favorite food?",
    answers: [ 
      {text: "Hot Dogs", correct: false},
      {text: "Flowers", correct: false},
      {text: "Dog Food", correct: false},
      {text: "Cookies", correct: true},
    ],
    class: ["dogs", "flowers", "food", "cookies"],
  },
  {
    question: "Where is Millie's favorite place to be?",
    answers: [ 
      {text: "Park", correct: true},
      {text: "Beach", correct: false},
      {text: "Home", correct: false},
      {text: "Snow", correct: false},
    ],
    class: ["park", "beach", "home", "snow"],
  },
  {
    question: "Where is Millie's favorite hiking spot?",
    answers: [ 
      {text: "Annie's Canyon", correct: false},
      {text: "Cowel's Mountain", correct: false},
      {text: "Mission Trails", correct: false},
      {text: "Fiesta Island", correct: true},
    ],
    class: ["annies", "cowels", "trails", "island"],
  }
]

var q = 0;
var time = 60;
var answerDisplay = 3;
var highScore = [];


$( document ).ready(function() {
  // # Start 
  init();
  reset();
  function reset() {
    // Hide Answer Buttons, Initials, High Score
    $("#answer-buttons").hide();
    $("#end").hide();
    $("#scores").hide();
    // Set Timer to 60sec
    time = 60;
    $("#time").text(" " + time);
    // Intro Text
    $("#question").text("Do you think you know Millie?");
    // On Click Start Questions & timer
    $("#start-btn").show();
    $("#start-btn").on("click", function() {
      // hide start button 
      $("#start-btn").hide();
      q = 0;
      newQuestion();
      timer();
      $("#answer-buttons").show();
    });
  }

  // # New Question 
  function newQuestion() {
    // Change Question
    $("#question").text(questions[q].question);
    
    // Change Answers
    for (var i = 0; i < 4; i++) {
      $("#answer" + i).text(questions[q].answers[i].text).addClass(questions[q].class[i]).attr("data-correct", questions[q].answers[i].correct);
    }

    // Right or Wrong 
    $(".answer").off().on("click", function() { 
      if (this.dataset.correct !== "true") {
        $("#user-correct").text('🐶 Millie Says "WRONG!"');
        time = time - 20;
        $("#time").text(" " + time)
      } else {
        $("#user-correct").text('🐶 Millie Says "CORRECT!"');
      } 
      answerTimer();
      next();
    });
  };
  
  // # Next
  function next() {
    q = q + 1;
    if (q < questions.length) {
      newQuestion();
    } else {
      saveScore();
    }
  }
  // # Timer
  function timer() {
    var countdown = setInterval( function () {
      if (time <= 0 || q === questions.length){
        clearInterval(countdown);
        saveScore();
      } else {
        time = time - 1;
        $("#time").text(" " + time)
      }
    },1000);
  }

  // # Answer Timer
  function answerTimer() {
    answerDisplay = 3;
    $("#user-correct").show();
    var display = setInterval( function () {
      if (answerDisplay > 0){
        answerDisplay = answerDisplay - 1;
      } else {
        clearInterval(display);
        $("#user-correct").hide();
      }
    },1000);
  }


  // # Enter Initials Save Score
  function saveScore() {
    // Hide Buttons
    $("#answer-buttons").hide();
    // Change Text
    $("#question").text("All Done! Your Score: " + time);
    // show end
    $("#end").show();
    // Save initials and score 
    $("#sumbit-btn").off().on("click", function () {
      event.preventDefault();
      var user = {
        initials: $("#initials").val().toUpperCase().trim(),
        score: time,
      }
      highScore.push(user);
      localStorage.setItem("highScore", JSON.stringify(highScore));
      showHighScores();
    })
  }

  // # High Scores

  function showHighScores() {
    $("#end").hide();
    $("#scores").show();
    $("#question").text("High Scores");
    init();
  }

  function init() {
    var storedHighScore = JSON.parse(localStorage.getItem("highScore"));

    if (storedHighScore !== null){
      highScore = storedHighScore;
    }
    renderScores();
  }

  function renderScores() {
    $("#scores-list").empty();

    for (var i = 0; i < highScore.length; i++) {
      var userScore = highScore[i].initials;
      $("#scores-list").append($("<li>").text(userScore));
    }


  }

  $("#try-again").off().on("click", function () {
    reset();
  })


});

