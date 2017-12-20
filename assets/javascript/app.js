$("#startButton").on("click", function() {
  play.start();
})

$(document).on("click", "#submit", function(){
  play.done();
})

// questions array
var questions = [{
  question: "In which 20th-century decade was Barbie's boyfriend Ken first made?", 
  answers: ["1920s", "1960s", "1930s", "1940s"],
  correctAnswer: "1960s"
  }, {
  question: "In which decade was Madonna born?", 
  answers: ["1920s", "1960s", "1950s", "1940s"],
  correctAnswer: "1950s"
  }, {
  question: "Who plays against the USA in golf's Walker Cup?", 
  answers: ["Germany", "Spain", "Mexico", "Great Britain"], 
  correctAnswer: "Great Britain"
  }, {
  question: "What does the F stand for in FBI?",
  answers: ["French", "Federal", "Fantastic", "Fine"],
  correctAnswer: "Federal"
  }, {
  question: "Which actor is the dad of Jamie Lee Curtis?", 
  answers: ["Tony Curtis", "Frank Curtis", "Michael Lee Curtis", "Mark Curtis"],
  correctAnswer: "Tony Curtis"
  }, {
  question: "In football, where do the Chargers come from?", 
  answers: ["San Diego", "San Fransico", "Dallas", "New York"],
  correctAnswer: "San Diego"
  }, {
  question: "The cause of what color fever was discovered in 1900?",
  answers: ["Red", "Green", "Yellow", "Blue"],
  correctAnswer: "Yellow"
  }, {
  question: "Where do the Super Bowl winning Cowboys come from?",
  answers: ["Austin", "Dallas", "San Diego", "New York"],
  correctAnswer: "Dallas"
  }, {
  question: "The US declared war on which country after the bombing of Pearl Harbor?",
  answers: ["North Korea", "Germany", "Japan", "China"],
  correctAnswer: "Japan"
  }, {
  question: "Which state is called the volunteer State?", 
  answers: ["Texas", "North Carolina", "Tennessee", "Alabama"],
  correctAnswer: "Tennessee"
  }
  ];

  var play = {
    correct: 0,
    incorrect: 0,
    counter: 25,
    countdown: function() {
      play.counter--;
      $("#counter").html(play.counter);
      if(play.counter<=0){
        console.log("Time is up");
        play.done();
      }
    },
    start: function() {
      timer = setInterval(play.countdown, 1000);
      $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>25</span> Seconds</h2>");
        $("#startButton").remove();
    for (var i=0; i < questions.length; i++) {
      $("#subWrapper").append("<h2>"+questions[i].question+"</h2>");
        for (var j=0; j < questions[i].answers.length; j++) {
          $("#subWrapper").append("<input type='radio' name='question-"+i+"' value='+questions[i].answers[j]+'>"+questions[i].answers[j]);
      }
     }
     $("#subWrapper").append("<br><br><button class='btn btn-warning' id='submit'>SUBMIT</button>");
    }, 
    done: function() {
      $.each($("input[name='question-0']:checked"), function(){
        if($(this).val() == questions[0].correctAnswer) {
          play.correct++;
          } else {
            play.incorrect++;
          }
      });
      $.each($("input[name='question-1']:checked"), function(){
        if($(this).val() == questions[1].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-2']:checked"), function(){
        if($(this).val() == questions[2].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-3']:checked"), function(){
        if($(this).val() == questions[3].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-4']:checked"), function(){
        if($(this).val() == questions[4].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-5']:checked"), function(){
        if($(this).val() == questions[5].correctAnswer) {
          play.correct++;
          } else {
            play.incorrect++;
          }
      });
      $.each($("input[name='question-6']:checked"), function(){
        if($(this).val() == questions[6].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-7']:checked"), function(){
        if($(this).val() == questions[7].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }
      });
      $.each($("input[name='question-8']:checked"), function(){
        if($(this).val() == questions[8].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++;
        }
      });
      $.each($("input[name='question-9']:checked"), function(){
        if($(this).val() == questions[9].correctAnswer) {
        play.correct++;
        } else {
          play.incorrect++; 
        }       
      });
      this.result();
    },
      result: function(){
        clearInterval(timer);
        $("#subWrapper h2").remove();
        $("#subWrapper").html("<h2>Finished!!!!!!</h2>");
        $("#subWrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
        $("#subWrapper").append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $("#subWrapper").append("<h3>Questions You Forgot: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
          }
    };