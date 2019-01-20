var questions = [
    "Which famous comicbook superhero's name was borrowed from the philosopher Nitze?",
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
    "Jason Momoa"
    ];
    console.log("first answer: " + answers[0])
    console.log("second answer: " + answers[1])

$(document).ready(function() {

    for (var p = 0; p < questions.length; p++) {
        $(".question").append("<br>");
        $(".question").append("<p>" + questions[p] + "</p>");

        var choices1 = choices[p];
        console.log("choices1:" + choices1);

        
        for (var r = 0; r < choices1.length; r++) {
            $(".question").append('<input type="radio" name="choice" value="'+ r +'" id="choice'+ r +'">');
            $(".question").append('<label id="answer'+ r +'">' + choices1[r] + '</label>');
            $(".question").append('<br>');
            console.log("choices1:" + choices1);
        }

    }
});

{/* <h3 id="questionHeader"></h3>

<input type="radio" name="choice" value="0" id="choice0">
<label id="answ0"></label>
<br>
<input type="radio" name="choice" value="1" id="choice1">
<label id="answ1"></label>
<br>
<input type="radio" name="choice" value="2" id="choice2">
<label id="answ2"></label>
<br>
<button id="next">Next</button> */}