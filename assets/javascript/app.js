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

var userChoices = [];

$(document).ready(function() {

    for (var p = 0; p < questions.length; p++) {
        $(".question").append("<br>");
        $(".question").append("<p>" + questions[p] + "</p>");

        var choices1 = choices[p];
        console.log("choices1:" + choices1);
        
        for (var r = 0; r < choices1.length; r++) {
            $(".question").append('<input type="radio" name="choice'+ p +'" value="'+ r +'" id="choice'+ r +'">');
            $(".question").append('<label id="answer'+ r +'">' + choices1[r] + '</label>');
            $(".question").append('<br>');
            console.log("choices1:" + choices1);
        }
    }
    function choicesRandGen () {

        var uniqueRandoms = [];
        var numRandoms = 5;

        function makeUniqueRandom() {
            // refill the array if needed
            if (!uniqueRandoms.length) {
                for (var i = 1; i < numRandoms; i++) {
                    uniqueRandoms.push(i);
                }
            }
            var index = Math.floor(Math.random() * uniqueRandoms.length);
            var val = uniqueRandoms[index];
            console.log("val :" + val);

            // now remove that value from the array
            uniqueRandoms.splice(index, 1);

            return val;

        }

        for (var i = 0; i < 5; i++) {
            var rand = makeUniqueRandom();
            console.log("rand: " + rand);
        }
            
            console.log("uniqueRandoms: " + uniqueRandoms);


            choice1 = uniqueRandoms[0];
            choice2 = uniqueRandoms[1];
            choice3 = uniqueRandoms[2];
            choice4 = uniqueRandoms[3];
            choice5 = uniqueRandoms[4];

            console.log("choice1 :" + choice1);
            console.log("choice2 :" + choice2);
            console.log("choice3 :" + choice3);
            console.log("choice4 :" + choice4);
            console.log("choice5 :" + choice5);

    };
    choicesRandGen();



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