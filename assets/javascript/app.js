
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

    userAnswers: [99, 99, 99, 99, 99],

    answersBoolean: [0, 0, 0, 0, 0],

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
                var clickAnswer = ""
                // select chosen answer by id that is comprised of dataObj.questions index and 
                // dataObj.choices index
                $('#answer' + v + i).click(function () {
                    clickAnswer = "" + v + i
                    console.log('clickAnswer: ', clickAnswer)
                    // set answer-buttons' colors
                    for (let k = 0; k < dataObj.choices.length; k++) {
                        let grey = '#answer' + v + k
                        let green = '#answer' + v + i
                        $(grey).addClass('btn-outline-secondary').removeClass('btn-outline-success')
                        $(green).addClass('btn-outline-success').removeClass('btn-outline-secondary')
                    }
                    console.log("dataObj.userAnswers: ", dataObj.userAnswers)
                })
            }

            function submit() {
                // splice in the user answer over dummy data
                console.log('submit clickAnswer: ', clickAnswer)
                dataObj.userAnswers.splice(v, 1, clickAnswer)
                console.log("dataObj.userAnswers: ", dataObj.userAnswers)

                // Navigate to next question
                let nextq = v < dataObj.choices.length ? v + 1 : null
                $("#container" + nextq).removeClass('collapse')
                $("#container" + (parseInt(nextq, 10) - 1)).addClass('collapse')
                // Put the answer button into a container and append to answerDiv
                let $answerBtn = $(
                    "<div>", {
                        class: "btn-group mr-2",
                        "role": "group",
                        "aria-label": "Answer group"
                    }).appendTo(".answerDiv")

                // 'None button' when nothing is selected on submit
                let $noneBtn = $(
                    "<div>", {
                        class: "btn-group mr-2",
                        "role": "group",
                        "aria-label": "Answer group"
                    })
                let $innerNoneBtn = $(
                    "<button>", {
                        "type": "button",
                        class: "btn btn-outline-secondary answer answer-none",
                        text: "None"
                    }
                ).appendTo($noneBtn)

                clickAnswer !== "" ? $("#answer" + clickAnswer).appendTo($answerBtn) : $noneBtn.appendTo(".answerDiv")
                clickAnswer = ""
                calcScore()
            }

            // OnSubmit event listener
            $('#submit-btn-q-' + v).click(function () {
                submit()
            })

            // Forfeit event listener
            $('#forfeit').click(function () {
                $(".all-answers").html('')
                submit()
                // write forfeit code
            })

        }
    }


    function calcScore() {
        let total
        // check userAnswer against correct answer
        // if true assign 1, false = 0, none = null
        // dataObj.userAnswers
        for (let z = 0; z < dataObj.userAnswers.length; z++) {
            // take dataObj.answers string and find indexOf it in corresponding dataObj.choices
            // compare the dataObj.choices index to the dataObj.userAnswers second number
            // set answersBoolean to 1 or 0
            // display total score
            let realAnswer = dataObj.choices[z].indexOf(dataObj.answers[z])
            console.log("realAnswer: ", realAnswer)

            
            // let realAnswer = dataObj.answers[z]
            // for (let y = 0; y = dataObj.choices[z].length; y++) {

            // }

            // let userAnswer = dataObj.userAnswers[z]
            // console.log('userAnswer: ', userAnswer)
            // console.log( dataObj.choices[i][[dataObj.userAnswers[i].charAt(1)]] )
            // dataObj.choices[i][dataObj.userAnswers[i].charAt(1)] === dataObj.questions
        }
    }
    calcScore()


    // Show first question
    $("#container0").removeClass('collapse')
    // Set next question to the skip button
    $(".skip-btn").attr('nextq', 1)
    // Set click event listener on the skip button
    $(".skip-btn").click(function () {
        let nextq = $(".skip-btn").attr("nextq") < dataObj.questions.length ? $(".skip-btn").attr("nextq") : null
        $("#container" + nextq).removeClass('collapse')
        $("#container" + (parseInt(nextq, 10) - 1)).addClass('collapse')
        $(".skip-btn").attr('nextq', (parseInt(nextq, 10) + 1))
    })


});

