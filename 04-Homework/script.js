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


$( document ).ready(function() {
  // # Start 
  // Intro Text
  $("#question").text("Do you think you know Millie?");
  // Hide Answer Buttons & end
  $("#answer-buttons").hide();
  $("#end").hide();
  // Set Timer to 60sec
  $("#time").text(" " + time);
  // On Click Start Questions & timer
  $("#start-btn").on("click", function() {
    // hide start button 
    $("#start-btn").hide();
    newQuestion();
    timer();
    $("#answer-buttons").show();
  });


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
        $("#user-correct").text("Wrong!").addClass("false")
      } else {
        $("#user-correct").text("True!").addClass("true")
      } 
      // Next 
      answerTimer();
      next();
    });
  };
  
  function next() {
    if (q < questions.length - 1) {
      q = q + 1;
      newQuestion();
    } else {
      saveScore();
    }
  }
  // # Timer
  function timer() {
    var countdown = setInterval( function () {
      if (time > 0){
        time = time - 1;
        $("#time").text(" " + time)
      } else {
        clearInterval(countdown);
        saveScore();
      }
    },1000);
  }

  // # Answer Timer
  function answerTimer() {
    var display = setInterval( function () {
      if (answerDisplay > 0){
        answerDisplay = answerDisplay - 1;
        $("#user-correct").show();
      } else {
        clearInterval(display);
        $("#user-correct").hide();
        answerDisplay = 3;
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
    // create object saves initials and score
    // local storage
  }



  // # High Score Page



});

