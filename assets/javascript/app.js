$("#startButton").on("click", function() {
  play.start();
})

$(document).on("click", "#submit", function(){
  play.done();
})

// questions 
var questions = [{
  question: "Which country did the gingerbread house comes from?", 
  answers: ["Germany   ", "USA   ", "Netherlands   ", "Austria"],
  correctAnswer: "Germany"
  }, {
  question: "What is the most famous Christmas Ballet?", 
  answers: ["Giselle   ", "The Sleeping Beauty   ", "The Nutcracker   ", "Cinderella"],
  correctAnswer: "The Nutcracker"
  }, {
  question: "Who wrote How the Grinch Stole Christmas?", 
  answers: ["Jack London   ", "Ernest Hemingway   ", "Mark Twain   ", "Dr. Suess"], 
  correctAnswer: "Dr. Suess"
  }, {
  question: "What is the most popular Christmas dish?",
  answers: ["Fully loaded Sweet Potatoe   ", "Roasted Pork Loin   ", "Chocolate Eggnog   ", "Macaroni and Cheese"],
  correctAnswer: "Chocolate Eggnog"
  }, {
  question: "Top rated holiday movie?", 
  answers: ["Bad Santa   ", "Elf   ", "A Christmas Story   ", "Home Alone"],
  correctAnswer: "Elf"
  }, {
  question: "Traditionally, kids leave out snacks for Santa Claus. What are these snacks?", 
  answers: ["Cookies and milk   ", "jam sandwich cookies   ", "fudge   ", "meringues"],
  correctAnswer: "Cookies and milk"
  }, {
  question: "Which was the last state in the United States that declaired Christmas as legal holiday?",
  answers: ["Illinois   ", "Alaska"  , "Oklahoma   ", "Maryland"],
  correctAnswer: "Oklahoma"
  }, {
  question: "When does Russian Orthodox Church celebrate Christmas?",
  answers: ["January 7th   ", "January 6th   ", "January 14th   ", "December 24th"],
  correctAnswer: "January 7th"
  }, {
  question: "Who was the star of the Christmas movie Jingle All the Way?",
  answers: ["Leonardo DiCaprio   ", "Arnold Schwarznegger   ", "Anthony Hopkins   ", "Al Pacino"],
  correctAnswer: "Arnold Schwarznegger"
  }, 
  ];

  var play = {
    correct: 0,
    incorrect: 0,
    counter: 45,
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
      $("#subWrapper").prepend("<h2>Time Remaining: <span id='counter'>45</span> Seconds</h2>");
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
        $("#subWrapper").append("<h3>Questions You Forgot to Answer: "+(questions.length-(this.correct+this.incorrect))+"</h3>");
          }
    };