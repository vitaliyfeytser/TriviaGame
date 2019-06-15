
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

    // userAnswers: [99, 99, 99, 99, 99],
    userAnswers: [],

    userAnswersBoolean: [0, 0, 0, 0, 0],

    userScore: 0,

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
                    id: "qcontainer" + i
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
        $("#scoreDiv").hide()
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

                // Check user answer against dataObj.answers and set dataObj.userAnswersBoolean to 1 or 0
                clickAnswer !== false && clickAnswer !== 'undefined' && clickAnswer !== "" && dataObj.choices[clickAnswer[0]][clickAnswer[1]] === dataObj.answers[clickAnswer[0]] ? dataObj.userAnswersBoolean.splice(clickAnswer[0], 1, 1) : dataObj.userAnswersBoolean.splice(clickAnswer[0], 1, 0)
                // console.log("dataObj.choices[clickAnswer[0]][clickAnswer[1]]: ", dataObj.choices[clickAnswer[0]][clickAnswer[1]])
                console.log("dataObj.userAnswersBoolean: ", dataObj.userAnswersBoolean)


                // Calculate and set dataObj.userScore
                dataObj.userScore = (dataObj.userAnswersBoolean.reduce((a, b) => a + b, 0)) / dataObj.questions.length * 100 + " %"
                console.log("dataObj.userScore: ", dataObj.userScore)
                $(".scorePercent").text(dataObj.userScore)

                // Navigate to next question
                let nextq = v < dataObj.choices.length ? v + 1 : null
                $("#qcontainer" + nextq).removeClass('collapse')
                $("#qcontainer" + (parseInt(nextq, 10) - 1)).addClass('collapse')

                // Put the answer button into a container and append to answerDiv
                let $answerBtn = $(
                    "<div>", {
                        class: "btn-group mr-2",
                        "role": "group",
                        "aria-label": "Answer group"
                    }).appendTo(".answerDiv")

                // Add 'None button' when nothing is selected on submit
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
                clickAnswer !== "" ? $("#answer" + clickAnswer).addClass("score" + clickAnswer).appendTo($answerBtn) : $noneBtn.addClass("score" + clickAnswer).appendTo(".answerDiv")

                // Change button color in the Score div
                clickAnswer !== false && clickAnswer !== 'undefined' && clickAnswer !== "" && dataObj.choices[clickAnswer[0]][clickAnswer[1]] === dataObj.answers[clickAnswer[0]] ? null : $(".score" + clickAnswer).addClass("btn-outline-danger")

                // Reset clickAnswer
                clickAnswer = ""

            }



            // // Write a showFinalScore function here
            function showFinalScore() {
                $("#scoreDiv").show()

                for (let i = 0; i < dataObj.questions.length; i++) {
                    $("#qcontainer" + i).addClass('collapse')
                }
            }

            // OnSubmit event listener
            $('#submit-btn-q-' + v).click(function () {
                submit()
                $('#submit-btn-q-' + dataObj.questions.length - 1) ? showFinalScore() : null
            })

            // Forfeit event listener
            $('#forfeit').click(function () {
                submit()
            })

        }


        // Set next question to the skip button
        $(".skip-btn").attr('nextq', 0)
        // Set click event listener on the skip button
        $(".skip-btn").click(function () {

            // showFinalScore()
            $(".skip-btn").attr("nextq") < dataObj.questions.length ? console.log("NOTHING") : showFinalScore()
            let nextq = $(".skip-btn").attr("nextq") < dataObj.questions.length ? $(".skip-btn").attr("nextq") : null
            $("#qcontainer" + nextq).removeClass('collapse')
            $("#qcontainer" + (parseInt(nextq, 10) - 1)).addClass('collapse')
            submit()
            $(".skip-btn").attr('nextq', (parseInt(nextq, 10) + 1))

            // $("#scoreDiv").show()
        })
    }

    // Show first question
    $("#qcontainer0").removeClass('collapse')

});

