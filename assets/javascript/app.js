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
    "Jason Momoa",
    "one",
    "six",
    "eleven"
    ];
    console.log("first answer: " + answers[0])
    console.log("second answer: " + answers[1])





var uniqueChoicesIndex = [];
var uniqueChoices = [];

$(document).ready(function() {

//     // generate choices randomly to keep the game more fun on replay
//     function choicesRandGen () {
       
//         var uniqueRandoms = [];
//         var numRandoms = 6;

//         function makeUniqueRandom() {
//             // refill the array if needed
//             if (!uniqueRandoms.length) {
//                 for (var i = 1; i < numRandoms; i++) {
//                     uniqueRandoms.push(i);
//                     console.log("i :" + i);
//                 }
//             }

//             // choose random value from uniqueRandoms array
//             var index = Math.floor(Math.random() * uniqueRandoms.length);
//             console.log("choose random index : " + index);

//             var val = uniqueRandoms[index];
//             console.log("val of uniqueRandoms[index] :" + val);
            
//             // now remove that value from the array
//             uniqueRandoms.splice(index, 1);
//             console.log("spliced out index :" + index);
//             console.log("uniqueRandoms after splice: " + uniqueRandoms);
            
//             console.log("return val: " + val);
//             return val;
            
//         }
                
//         for (var r = 0; r < 5; r++) {
//             var rand = makeUniqueRandom();
//             uniqueChoicesIndex.push(rand);

//             console.log("rand: " + rand);
//         }

//         console.log("uniqueRandoms: " + uniqueRandoms);
//         console.log("uniqueChoicesIndex : " + uniqueChoicesIndex);


//     };
//     choicesRandGen();





    // create question html and fill from questions array
    for (var p = 0; p < questions.length; p++) {
        $(".question").append("<br>");
        $(".question").append("<fieldset>");
        $(".question").append("<p>" + questions[p] + "</p>");

        // console.log("uniqueChoicesIndex : " + uniqueChoicesIndex);
        
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



        // var choicesToPrint = choices1[uniqueChoicesIndex];
        // console.log("choicesToPrint : " + choicesToPrint);

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


    // function reportResults() {
    //     // var radios = document.getElementsByName('name="choice'+ p +'"');
    //     var radios = document.getElementsByName('name="question0"');

    //     for (var i = 0, length = radios.length; i < length; i++) {

    //         if (radios[i].checked) {
    //         // do whatever you want with the checked radio
    //           alert(radios[i].value);
    //             // if (radios[i].value === answers[p]) {
    //             //     correctAnswers =+ 1;
    //             // } else {
    //             //     incorrectAnswers =+ 1;
    //             // }
            
    //         // $(".results").append('<label id="correctAnswers">' + correctAnswers + '</label>');
    //         // $(".results").append('<label id="incorrectAnswers">' + incorrectAnswers + '</label>');
        
        
    //         // only one radio can be logically checked, don't check the rest
    //         break;
    //         }
    //     }
    // };
    // reportResults();

   
    // $('[type="radio"]').on('click', alert("You clicked a choice"));
        // OR //
        // $('.some-class').click(slideonlyone('sms_box'));


    // $("#see-results").click(reportResults());
    $("#see-results").click(function() {
        alert("you clicked me.");
    });


    var correctAnswers = "";
    var incorrectAnswers = "";

    
    $('.question0').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio0 = document.querySelector('input[name="choices0"]:checked').value;
        if (checkedRadio0 === answers[0]) {
            correctAnswers =+ 1;
            console.log("checkedRadio0: " + checkedRadio0 + "answers[0]: " + answers[0]);
        } else {
            incorrectAnswers =+ 1;
        }
        
        console.log("correctAnswers: " + correctAnswers);
        alert("you clicked a radio button value: " + checkedRadio0);
    });
    
    $('.question1').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio1 = document.querySelector('input[name="choices1"]:checked').value;
        if (checkedRadio1 === answers[1]) {
            correctAnswers =+ 1;
            console.log("checkedRadio1: " + checkedRadio1 + "answers[1]: " + answers[1]);
        } else {
            incorrectAnswers =+ 1;
        }
        
        console.log("correctAnswers: " + correctAnswers);
        alert("you clicked a radio button value: " + checkedRadio1);
    });
    
    $('.question2').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio2 = document.querySelector('input[name="choices2"]:checked').value;
        if (checkedRadio2 === answers[2]) {
            correctAnswers =+ 1;
            console.log("checkedRadio2: " + checkedRadio2 + "answers[2]: " + answers[2]);
        } else {
            incorrectAnswers =+ 1;
        }
        
        console.log("correctAnswers: " + correctAnswers);
        alert("you clicked a radio button value: " + checkedRadio2);
    });
    
    $('.question3').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio3 = document.querySelector('input[name="choices3"]:checked').value;
        if (checkedRadio3 === answers[3]) {
            correctAnswers =+ 1;
            console.log("checkedRadio3: " + checkedRadio3 + "answers[3]: " + answers[3]);
        } else {
            incorrectAnswers =+ 1;
        }
        
        console.log("correctAnswers: " + correctAnswers);
        alert("you clicked a radio button value: " + checkedRadio3);
    });
    
    $('.question4').click(function() {
        // alert("you clicked a radio button");
        console.log("clicked radio button");

        var checkedRadio4 = document.querySelector('input[name="choices4"]:checked').value;
        if (checkedRadio4 === answers[4]) {
            correctAnswers =+ 1;
            console.log("checkedRadio4: " + checkedRadio4 + "answers[4]: " + answers[4]);
        } else {
            incorrectAnswers =+ 0;
        }
        
        console.log("correctAnswers: " + correctAnswers);
        alert("you clicked a radio button value: " + checkedRadio4);
    });

    // console.log("bottom correctAnswers: " + correctAnswers);
    // console.log("bottom incorrectAnswers: " + incorrectAnswers);

    
    // $("#choice01").click(function() {
    //     console.log("clicked radio button");

    //     var checkedRadio = document.querySelector('input[name="choices"]:checked').value;
    //     alert("you clicked a radio button value: " + checkedRadio);
    // });

    // $("#choice02").click(function() {
    //     console.log("clicked radio button");

    //     var checkedRadio = document.querySelector('input[name="choices"]:checked').value;
    //     alert("you clicked a radio button value: " + checkedRadio);
    // });

    // $("#choice03").click(function() {
    //     console.log("clicked radio button");

    //     var checkedRadio = document.querySelector('input[name="choices"]:checked').value;
    //     alert("you clicked a radio button value: " + checkedRadio);
    // });

    // $("#choice04").click(function() {
    //     console.log("clicked radio button");

    //     var checkedRadio = document.querySelector('input[name="choices"]:checked').value;
    //     alert("you clicked a radio button value: " + checkedRadio);
    // });

    

});

console.log("bottom correctAnswers: " + correctAnswers);
console.log("bottom incorrectAnswers: " + incorrectAnswers);





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