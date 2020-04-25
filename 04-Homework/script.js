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
var time = 0;


$( document ).ready(function() {
  // # Start 
  // Intro Text
  $("#question").text("Do you think you know Millie?");
  // Hide Answer Buttons & end
  $("#answer-buttons").hide();

  $("#end").hide();
  // On Click Start Questions & timer
  $("#start-btn").on("click", function() {
    // hide start button 
    $("#start-btn").hide();
    newQuestion();
    // timer(); ****
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
    $(".answer").on("click", function() { 
      if (this.dataset.correct !== "true") {
        alert("false!");
      } else {
        alert("true!")
      } 
      // Next 
      next();
      function next() {
        q++
        if (q <= questions.length) {
          newQuestion();
        } else {
          saveScore();
        }
      }
    });
  };

  // # Timer


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

