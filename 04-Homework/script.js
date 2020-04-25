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
  }
]


$( document ).ready(function() {
  // Start 
  // Intro Text
  $("#question").text("Do you think you know Millie?");
  // Hide Answer Buttons
  $("#answer-buttons").hide();
  // On Click Start Questions & timer
  $("#start-btn").on("click", function() {
    // hide start button 
    $("#start-btn").hide();
    questionOne();
    // timer();
    $("#answer-buttons").show();
  })
  debugger;
  function questionOne() {
    // Change Question Text
    $("#question").text(questions[0].question);
    // Change Answer Button Text
    $("#answer0").text(questions[0].answers[0].text).addClass(questions[0].class[0]);
    $("#answer1").text(questions[0].answers[1].text).addClass(questions[0].class[1]);
    $("#answer2").text(questions[0].answers[2].text).addClass(questions[0].class[2]);
    $("#answer3").text(questions[0].answers[3].text).addClass(questions[0].class[3]);
    // Change Answer Button Images
    // On Click Right 
    // On Click Wrong 
  }



});