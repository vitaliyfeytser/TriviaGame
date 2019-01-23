
// DECLARE VARIABLES AND SET CONTENT ARRAYS

var questions = [
    "Which famous comicbook superhero's name was borrowed from the philosopher Nietzsche?",
    "Which actor plays Aquaman in 'Aquaman' of 2018?",
    "Third question?",
    "Fourth question?",
    "Fifth question?"
    ];
    console.log("first question: " + questions[0])
    console.log("second question: " + questions[1])

var choices = [
    ["Superman", "Aquaman", "Spiderman", "Magneto", "Rocket"],
    ["Jason Momoa", "Brad Pitt", "Val Kilmer", "Bruce Willis", "Robert Downey Jr."],
    ["one", "two", "three", "four", "five"],
    ["six", "seven", "eight", "nine", "ten"],
    ["eleven", "twelve", "thirteen", "fourteen", "fifteen"],
    ];
    console.log("choices[0]: " + choices[0]);
    console.log("choices[1]: " + choices[1]);
    console.log("choices[1][0]: " + choices[1][0]);

var answers = [
    "Superman",
    "Jason Momoa",
    "one",
    "six",
    "eleven"
    ];
    console.log("first answer: " + answers[0])
    console.log("second answer: " + answers[1])

var userAnswers = [];
var correctAnswers = 0;
var incorrectAnswers = 0;



// CREATE HTML WITH CONTENT 

$(document).ready(function loadContent() {
    // empty the target div for questions and choices
    $('.question').empty();
    // create question html and fill from questions array
    for (var p = 0; p < questions.length; p++) {
        $(".question").append("<br>");
        $(".question").append("<fieldset>"); // open encapsulating div for question + choices
        $(".question").append("<p>" + questions[p] + "</p>");
        
        for (var t = 0; t < choices.length; t++) {
            // align choices index with questions index
            var choices2 = choices[p];
            console.log("choices2 :" + choices2);

            // randomize choices1 before print to html
            var choices1 = choices2;
            console.log("choices1 : " + choices1);
                        
            function shuffleArray() {
                for (var i = choices1.length - 1; i > 0; i--) {
                    var j = Math.floor(Math.random() * (i + 1));
                    var temp = choices1[i];
                    choices1[i] = choices1[j];
                    choices1[j] = temp;
                    console.log("temp : " + temp);
                }
            }
            shuffleArray();

            console.log("choices[t]:" + choices[t]);
        }
        console.log("choices1 = choices[t]:" + choices1 + " = " + choices[t]);

        // create choices html and fill from choices1 variable
        for (var r = 0; r < choices1.length; r++) {

            $(".question").append('<input type="radio" name="choices'+ p +'" class="question'+ p +'" value="'+ choices[p][r] +'" id="choice'+ p + r +'">');
            $(".question").append('<label id="answer'+ p +'">' + choices1[r] + '</label>');
            $(".question").append('<br>');
            console.log("choices1:" + choices1);
            
        }
        // close encapsulating div for question + choices
        $(".question").append("</fieldset>");

        
        
    }
    
    $(".question").append('<button id="see-results">See Results</button>');


    // DISPLAY RESULTS

    $("#see-results").click(function() {
        // alert("you clicked me.");

        // SUM UP USER ANSWERS FROM userAnswers ARRAY
        var answersTotal = 0;
        for (var i = 0; i < userAnswers.length; i++) {
            answersTotal += userAnswers[i] << 0;
        }
        correctAnswers = answersTotal;
        // UPDATE INCORRECT ANSWERS COUNT
        incorrectAnswers = answers.length - answersTotal;

        // GET PERCENTILE VALUE OF ANSWERS
        var percentCorrrect = parseInt(( 100 / questions.length ) * correctAnswers);   
        console.log("percentCorrrect: " + percentCorrrect);

        // PRINT RESULTS
        $('.question').empty();
        $(".question").append('<div id="percent">Your score is: ' + percentCorrrect + ' %</div>');
        $(".question").append('<div id="correct">Correct: ' + correctAnswers + '</div>');
        $(".question").append('<div id="incorrect">Incorrect: ' + incorrectAnswers + '</div>');
        $(".question").append('<button id="try-again" onclick="loadContent()">Try Again</button>');
        

        // $('.results').empty();
        // $(".results").append('<div id="percent">Your score is: ' + percentCorrrect + ' %</div>');
        // $(".results").append('<div id="correct">Correct: ' + correctAnswers + '</div>');
        // $(".results").append('<div id="incorrect">Incorrect: ' + incorrectAnswers + '</div>');
    });


    // USER ANSWERS

    // // ATTEMPT TO GENERALIZE THE FUNCTIONS BELOW

    // $('.question0').click(function() {
    //     // alert("you clicked a radio button");
    //     console.log("clicked radio button");
        
    //     function radioRead() {
    //         var checkedRadio = document.querySelector('input[class="question'+ p +'"]:checked').value;
    //         if (checkedRadio === answers[p]) {
    //             userAnswers[p] = 1;
    //             console.log("checkedRadio: " + checkedRadio + "answers[p]: " + answers[p]);
    //         } else {
    //             userAnswers[p] = 0;
    //         }
    //     }
    //     radioRead();
        
        
    //     console.log("p: " + p);
    //     console.log("userAnswers: " + userAnswers);
    //     console.log("correctAnswers: " + correctAnswers);
    //     console.log("incorrectAnswers: " + incorrectAnswers);
    //     // alert("you clicked a radio button value: " + checkedRadio0);
    // });

    // // ------------------------------------------------------------- //


    $('.question0').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");
        
        var checkedRadio0 = document.querySelector('input[name="choices0"]:checked').value;
        if (checkedRadio0 === answers[0]) {
            userAnswers[0] = 1;
            console.log("checkedRadio0: " + checkedRadio0 + "answers[0]: " + answers[0]);
        } else {
            userAnswers[0] = 0;
        }
        
        console.log("userAnswers: " + userAnswers);
        console.log("correctAnswers: " + correctAnswers);
        console.log("incorrectAnswers: " + incorrectAnswers);
        // alert("you clicked a radio button value: " + checkedRadio0);
    });
    
    $('.question1').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio1 = document.querySelector('input[name="choices1"]:checked').value;
        if (checkedRadio1 === answers[1]) {
            userAnswers[1] = 1;
            console.log("checkedRadio1: " + checkedRadio1 + "answers[1]: " + answers[1]);
        } else {
            userAnswers[1] = 0;
        }

        console.log("userAnswers: " + userAnswers);
        console.log("correctAnswers: " + correctAnswers);
        console.log("incorrectAnswers: " + incorrectAnswers);
        // alert("you clicked a radio button value: " + checkedRadio1);
    });
    
    $('.question2').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio2 = document.querySelector('input[name="choices2"]:checked').value;
        if (checkedRadio2 === answers[2]) {
            userAnswers[2] = 1;
            console.log("checkedRadio2: " + checkedRadio2 + "answers[2]: " + answers[2]);
        } else {
            userAnswers[2] = 0;
        }
        
        console.log("userAnswers: " + userAnswers);
        console.log("correctAnswers: " + correctAnswers);
        console.log("incorrectAnswers: " + incorrectAnswers);
        // alert("you clicked a radio button value: " + checkedRadio2);
    });
    
    $('.question3').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio3 = document.querySelector('input[name="choices3"]:checked').value;
        if (checkedRadio3 === answers[3]) {
            userAnswers[3] = 1;
            console.log("checkedRadio3: " + checkedRadio3 + "answers[3]: " + answers[3]);
        } else {
            userAnswers[3] = 0;
        }
        
        console.log("userAnswers: " + userAnswers);
        console.log("correctAnswers: " + correctAnswers);
        console.log("incorrectAnswers: " + incorrectAnswers);
        // alert("you clicked a radio button value: " + checkedRadio3);
    });
    
    $('.question4').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio4 = document.querySelector('input[name="choices4"]:checked').value;
        if (checkedRadio4 === answers[4]) {
            userAnswers[4] = 1;
            console.log("checkedRadio4: " + checkedRadio4 + "answers[4]: " + answers[4]);
        } else {
            userAnswers[4] = 0;
        }
        
        console.log("userAnswers: " + userAnswers);
        console.log("correctAnswers: " + correctAnswers);
        console.log("incorrectAnswers: " + incorrectAnswers);
        // alert("you clicked a radio button value: " + checkedRadio4);
    });    

    console.log("11111 bottom userAnswers: " + userAnswers);
    console.log("11111 bottom correctAnswers: " + correctAnswers);
    console.log("11111 bottom incorrectAnswers: " + incorrectAnswers);
});

