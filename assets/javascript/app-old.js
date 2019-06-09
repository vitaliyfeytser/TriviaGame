
// DECLARE VARIABLES AND SET CONTENT ARRAYS

var questions = [
    "Which famous comicbook superhero's name was borrowed from the philosopher Nietzsche?",
    "Which actor plays Aquaman in 'Aquaman' of 2018?",
    "Who is the coolest Marvel superhero?",
    "Who is the greatest American President?",
    "Which country was NOT with the Allies in World War 2?"
];

var choices = [
    ["Superman", "Aquaman", "Spiderman", "Magneto", "Rocket"],
    ["Jason Momoa", "Brad Pitt", "Val Kilmer", "Bruce Willis", "Robert Downey Jr."],
    ["Captain Marvel", "Iron Man", "Thor", "Black Widow", "Loki"],
    ["George Washington", "Barack Obama", "Donald Trump", "Benjamin Franklin", "Abraham Lincoln"],
    ["Brazil", "South Africa", "Japan", "Russia", "Ukraine"],
];

var answers = [
    "Superman",
    "Jason Momoa",
    "Iron Man",
    "Donald Trump",
    "Japan"
];

var userAnswers = [];
console.log('userAnswers: ', userAnswers)
var correctAnswers = 0;
console.log('correctAnswers: ', correctAnswers)
var incorrectAnswers = 0;
console.log('incorrectAnswers: ', incorrectAnswers)

// CREATE HTML WITH THE ABOVE CONTENT 

$(document).ready(function () {

    // START PAGE WITH INSTRUCTIONS .... WRITE OUT INSTRUSTIONS FOR THE GAME
    function startTrivia() {
        $('#results').empty();
        $('#intro').append();

        $(".content").append('<div id="intro">');
        $("#intro").append('<div id="timer-label">Can you beat this time to get the trivia answers!</div>');
        $("#intro").append('<div id="timer">00:00</div>');
        $("#intro").append('<div id="timer-label">Tic-toc.</div>');

    }

    function loadContent() {
        // empty the target div for questions and choices
        // $('#intro').empty();
        // $('#quiz').append();
        // create question html and fill from questions array
        // $(".content").append('<div id="quiz">');

        for (var p = 0; p < questions.length; p++) {
            // $("#quiz").append("<fieldset>"); // open encapsulating div for question + choices
            $("<div>", {
                text: "questions[p]",
                // text: questions[p],
                value: "vit"
            })

            for (var t = 0; t < choices.length; t++) {
                // align choices index with questions index
                var choices2 = choices[p];

                // // randomize choices1 before print to html
                var choices1 = choices2;

                // function shuffleArray() {
                //     for (var i = choices1.length - 1; i > 0; i--) {
                //         var j = Math.floor(Math.random() * (i + 1));
                //         var temp = choices1[i];
                //         choices1[i] = choices1[j];
                //         choices1[j] = temp;
                //     }
                // }
                // shuffleArray();
            }

            // create choices html and fill from choices1 variable
            for (var r = 0; r < choices1.length; r++) {
                $("#quiz").append('<label id="answer' + p + '">' + '<input type="radio" name="choices' + p + '" class="question' + p + '" id="choice' + p + r + '">' + choices1[r] + '</label>');
                // $("#quiz").append('<label id="answer' + p + '">' + choices1[r] + '</label>');
            }
            // close encapsulating div for question + choices
            // $(".content").append("</fieldset>");
        }
        console.log($(".question0").val())
    }

    $('#see-results').click(function () {
        var checkedRadio0 = $("input[name='choices0']:checked").val();
        // var radioValue = $("input[name='gender']:checked").val();
        if (checkedRadio0 === answers[0]) {
            userAnswers[0] = 1;
        } else {
            userAnswers[0] = 0;
        }
        console.log("checkedRadio0: ", checkedRadio0)
    });
    console.log("Console log works.")
    console.log($(".question0").val())

    $('#see-results').click(function () {

        var checkedRadio1 = document.querySelector('input[name="choices1"]:checked').value;
        if (checkedRadio1 === answers[1]) {
            userAnswers[1] = 1;
        } else {
            userAnswers[1] = 0;
        }
        console.log("checkedRadio1: ", checkedRadio1)
    });

    $('.question2').click(function () {
        var checkedRadio2 = document.querySelector('input[name="choices2"]:checked').value;
        if (checkedRadio2 === answers[2]) {
            userAnswers[2] = 1;
            console.log("checkedRadio2: " + checkedRadio2 + "answers[2]: " + answers[2]);
        } else {
            userAnswers[2] = 0;
        }
    });

    $('.question3').click(function () {
        var checkedRadio3 = document.querySelector('input[name="choices3"]:checked').value;
        if (checkedRadio3 === answers[3]) {
            userAnswers[3] = 1;
            console.log("checkedRadio3: " + checkedRadio3 + "answers[3]: " + answers[3]);
        } else {
            userAnswers[3] = 0;
        }
    });

    $('.question4').click(function () {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio4 = document.querySelector('input[name="choices4"]:checked').value;
        if (checkedRadio4 === answers[4]) {
            userAnswers[4] = 1;
            console.log("checkedRadio4: " + checkedRadio4 + "answers[4]: " + answers[4]);
        } else {
            userAnswers[4] = 0;
        }
    });


    // DISPLAY RESULTS

    function results() {

        // SUM UP USER ANSWERS FROM userAnswers ARRAY
        var answersTotal = 0;
        for (var i = 0; i < userAnswers.length; i++) {
            answersTotal += userAnswers[i] << 0;
        }
        // UPDATE CORRECT AND INCORRECT ANSWERS COUNT
        correctAnswers = answersTotal;
        incorrectAnswers = answers.length - answersTotal;

        // GET PERCENTILE VALUE OF ANSWERS
        var percentCorrrect = parseInt((100 / questions.length) * correctAnswers);

        // PRINT RESULTS
        // $("#quiz").empty();
        $('#results').append();

        $(".content").append('<div id="results">');
        $("#results").append('<div id="percent">Your score is: ' + percentCorrrect + ' %</div>');
        $("#results").append('<div id="correct">Correct: ' + correctAnswers + '</div>');
        $("#results").append('<div id="incorrect">Incorrect: ' + incorrectAnswers + '</div>');
    }

    // setTimeout(startTrivia, 3000);

    startTrivia();
    $("#button-container").append('<button id="begin">Begin!</button>');
    $("#button-container").append('<button id="see-results">See Results</button>');
    $("#button-container").append('<button id="try-again">Try Again</button>');
    $("#see-results").hide();
    $("#try-again").hide();

    $("#begin").click(function () {
        $("#begin").hide();
        $("#see-results").show();
        loadContent();
    });

    // $("#see-results").click(function () {
    //     $("#see-results").hide();
    //     $("#try-again").show();
    //     results();
    // });

    $("#try-again").click(function () {
        $("#try-again").hide();
        $("#begin").show();
        startTrivia();
    });


    // $(".content").append('<button id="see-results">See Results</button>');   

});

