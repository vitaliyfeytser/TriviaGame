
// DECLARE VARIABLES AND SET CONTENT ARRAYS
var dataObj = {
    questions: [
        "Which famous comicbook superhero's name was borrowed from the philosopher Nietzsche?",
        "Which actor plays Aquaman in 'Aquaman' of 2018?",
        "Who is the coolest Marvel superhero?",
        "Who is the greatest American President?",
        "Which country was NOT with the Allies in World War 2?"
    ],

    choices: [
        ["Superman", "Aquaman", "Spiderman", "Magneto", "Rocket"],
        ["Jason Momoa", "Brad Pitt", "Val Kilmer", "Bruce Willis", "Robert Downey Jr."],
        ["Captain Marvel", "Iron Man", "Thor", "Black Widow", "Loki"],
        ["George Washington", "Barack Obama", "Donald Trump", "Benjamin Franklin", "Abraham Lincoln"],
        ["Brazil", "South Africa", "Japan", "Russia", "Ukraine"],
    ],

    answers: [
        "Superman",
        "Jason Momoa",
        "Iron Man",
        "Donald Trump",
        "Japan"
    ],

    userAnswers: [0, 0, 0, 0, 0],

    correctAnswers: 0,

    incorrectAnswers: 0,

}

// CREATE HTML WITH THE ABOVE CONTENT 

$(document).ready(function () {

    // START PAGE WITH INSTRUCTIONS .... WRITE OUT INSTRUSTIONS FOR THE GAME

    // setTimeout(function() { 
    //     $('.answer').toggleClass('btn-outline-secondary')}, 2000)
    // setTimeout(function(){ $('.answer').toggleClass('btn-outline-primary')}, 2000)
    // setTimeout(function(){ $('.answer').toggleClass('btn-outline-danger')}, 2000)
    // // setTimeout( $('.answer').toggleClass('btn-outline-primary'), 2000)
    // // setTimeout( $('.answer').toggleClass('btn-outline-danger'), 2000)

    // function myfunction() {
    //     longfunctionfirst(shortfunctionsecond);
    // }
    // function longfunctionfirst(callback) {
    //     setTimeout(function() {
    //         $('.answer').toggleClass('btn-outline-success')
    //         // alert('first function finished');
    //         if(typeof callback == 'function')
    //             callback();
    //     }, 2000);
    // };
    // function shortfunctionsecond() {
    //     setTimeout(function() {
    //         $('.answer').toggleClass('btn-outline-danger')
    //         // alert("second function finished")
    //      } , 2000);
    // };
    // myfunction()

    // WRITE A FUNCTION TO GENERATE THE HTML WITH ALL THE DATA AND REPLACE THE questionsDiv
    function generateHtml() {

        for (let i = 0; i < dataObj.questions.length; i++) {
            // let i = 1
            // Create the single question container div
            var $singleQuestionContainer = $(
                "<div>", {
                    class: "single-question container collapse",
                    id: "container" + i
                }
            )
            // Create the question div
            var $question = $(
                "<h3>", {
                    class: "question display-6",
                    text: dataObj.questions[i]
                }).appendTo($singleQuestionContainer)

            // Generate answer buttons container
            var $answerBtnContainer = $(
                "<div>", {
                    class: "btn-toolbar",
                    "role": "toolbar",
                    "aria-label": "Toolbar with button groups"
                }).appendTo($singleQuestionContainer)

            // Generate answer buttons for the question
            for (let k = 0; k < dataObj.choices.length; k++) {
                var $answerBtn = $(
                    "<div>", {
                        class: "btn-group mr-2",
                        "role": "group",
                        "aria-label": "Answer group"
                    }).appendTo($answerBtnContainer)

                let $innerBtn = $(
                    "<button>", {
                        "id": "answer" + i + k,
                        "type": "button",
                        class: "btn btn-outline-secondary answer",
                        text: dataObj.choices[i][k]
                    }
                ).appendTo($answerBtn)
            }


            // Generate the answer submit button
            var $submitBtn = $(
                "<div>", {
                    class: "mr-3"
                }).appendTo($singleQuestionContainer)

            $("<a>", {
                class: "btn btn-success btn mr-2",
                "id": "submit-btn-q-" + i,
                "role": "button",
                text: "Submit Answer"
            }
            ).appendTo($submitBtn)

            var $timerHtml = $(
                "<p>", {
                    class: "lead",
                    text: "00:03"
                }
            ).appendTo($singleQuestionContainer)


            $(".questionDiv").append($singleQuestionContainer)
        }
        setTimeout(createEventListeners(), 3000)
    }
    generateHtml()


    console.log("choices.length: ", dataObj.choices.length)

    function createEventListeners() {
        // on show of single question run these listener setters

        for (let v = 0; v < dataObj.questions.length; v++) {
            for (let i = 0; i < dataObj.choices.length; i++) {
                var clickAnswer

                $('#answer' + v + i).click(function () {
                    clickAnswer = "" + v + i
                    console.log('clickAnswer: ', clickAnswer)
                    for (let k = 0; k < dataObj.choices.length; k++) {
                        let green = '#answer' + v + k
                        let grey = '#answer' + v + i
                        $(green).addClass('btn-outline-secondary').removeClass('btn-outline-success')
                        $(grey).addClass('btn-outline-success').removeClass('btn-outline-secondary')
                    }
                    console.log("dataObj.userAnswers: ", dataObj.userAnswers)
                })

                // OnSubmit event listener
                $('#submit-btn-q-' + i).click(function () {
                    console.log('submit clickAnswer: ', clickAnswer)
                    dataObj.userAnswers.splice(i, 1, clickAnswer)
                    console.log("dataObj.userAnswers: ", dataObj.userAnswers)
                })

                // Skip question button event listener
                $('#skip-btn-q-' + 'i').click(function () {
                    // write skip code
                })

                // Forfeit event listener
                $('#forfeit').click(function () {
                    // write forfeit code
                })
            }
        }
    }

    // Show first question
    $("#container0").removeClass('collapse')
    // Set next question to the skip button
    $(".skip-btn").attr('nextq', 1)
    // Set click event listener on the skip button
    $(".skip-btn").click(function () {
        let nextq = $(".skip-btn").attr("nextq") < dataObj.questions.length ? $(".skip-btn").attr("nextq") : 0
        $("#container" + nextq).removeClass('collapse')
        $("#container" + (parseInt(nextq, 10) - 1)).addClass('collapse')
        $(".skip-btn").attr('nextq', (parseInt(nextq, 10) + 1))
    })


});

