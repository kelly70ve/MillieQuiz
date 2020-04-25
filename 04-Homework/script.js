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

var time = 0;


$( document ).ready(function() {
  // Start 
  // Intro Text
  $("#question").text("Do you think you know Millie?");
  // Hide Answer Buttons & end
  $("#answer-buttons").hide();

  $("#end").hide();
  // On Click Start Questions & timer
  $("#start-btn").on("click", function() {
    // hide start button 
    $("#start-btn").hide();
    questionOne();
    // timer(); ****
    $("#answer-buttons").show();
  })

  function questionOne() {
    // Change Question Text
    $("#question").text(questions[0].question);
    // Change Answer Button Text
    for (var i = 0; i < 4; i++) {
      $("#answer" + i).text(questions[0].answers[i].text).addClass(questions[0].class[i]);
    }
    $("#answer-buttons").on("click", function() {
      // On Click Right  ****
      // On Click Wrong (subtract from time) ****
      // Change Question
      questionTwo();
    });
  };

  function questionTwo() {
    $("#question").text(questions[1].question);
    for (var i = 0; i < 4; i++) {
      $("#answer" + i).text(questions[1].answers[i].text).addClass(questions[1].class[i]);
    }
    $("#answer-buttons").on("click", function() {
      questionThree();
    });
  };
  
  function questionThree() {
    $("#question").text(questions[2].question);
    for (var i = 0; i < 4; i++) {
      $("#answer" + i).text(questions[2].answers[i].text).addClass(questions[2].class[i]);
    }
    $("#answer-buttons").on("click", function() {
      highScore();
    });
  };
});

// Enter Initials Save Score
function highScore() {
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

// High Score Page