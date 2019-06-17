
// DECLARE VARIABLES AND SET CONTENT ARRAYS
var dataObj = {
    questions: [
        "Which famous comicbook superhero's name was borrowed from the philosopher Nietzsche?",
        "Which actor plays Aquaman in 'Aquaman' of 2018?",
        "Who is the coolest Marvel superhero?",
        "Who is the greatest American President?",
        "Which country was NOT with the Allies in World War 2?",
        "Who is coolest Feytser?"
    ],

    choices: [
        ["Superman", "Aquaman", "Spiderman", "Magneto", "Rocket"],
        ["Jason Momoa", "Brad Pitt", "Val Kilmer", "Bruce Willis", "Robert Downey Jr."],
        ["Captain Marvel", "Iron Man", "Thor", "Black Widow", "Loki"],
        ["George Washington", "Barack Obama", "Donald Trump", "Benjamin Franklin", "Abraham Lincoln"],
        ["Brazil", "South Africa", "Japan", "Russia", "Ukraine"],
        ["Val", "Vitaliy", "Valeriy", "Toliy", "Pidrahooy"]
    ],

    answers: [
        "Superman",
        "Jason Momoa",
        "Iron Man",
        "Donald Trump",
        "Japan",
        "Vitaliy"
    ],

    timers: [
        10,
        10,
        10,
        10,
        10
    ],

    userAnswers: [],

    userAnswersBoolean: [0, 0, 0, 0, 0],

    userScore: 0,

}

// CREATE HTML WITH THE ABOVE CONTENT 

$(document).ready(function () {

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

            var $timerWrapper = $(
                "<p>", {
                    class: "timerWrapper score-line",
                }
            ).appendTo($singleQuestionContainer)

            var $timerTxt = $(
                "<p>", {
                    class: "lead timerText",
                    text: "Seonds to guess:",

                }
            ).appendTo($timerWrapper)

            var $timerHtml = $(
                "<p>", {
                    class: "lead seconds timer" + i,
                    text: "10",

                }
            ).appendTo($timerWrapper)


            $(".questionDiv").append($singleQuestionContainer)
        }
        $("#scoreDiv").addClass("collapse")
        setTimeout(createEventListeners(), 3000)
    }
    generateHtml()

    // // Write a showFinalScore function here
    function showFinalScore() {
        $("#scoreDiv").removeClass("collapse")

        for (let i = 0; i < dataObj.questions.length; i++) {
            $("#qcontainer" + i).addClass('collapse')
        }

        $("#skipBtn").addClass("collapse")
        $("#forfeit").addClass("collapse")
        $("#tryAgain").removeClass("collapse")
    }

    // on show of single question run these listener setters
    function createEventListeners() {

        // index of the next question to navigate to
        let currentQIndex = 0


        function submit(v) {
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
            $("#qcontainer" + (parseInt(nextq, 10) - 1)).addClass('collapse') // parseInt is needed to work with zero values

            // Put the answer button into a container and append to answerDiv
            let $answerBtn = $(
                "<div>", {
                    class: "btn-group mr-2",
                    "role": "group",
                    "aria-label": "Answer group"
                }).appendTo(".answerDiv")

            // Add 'None button' when nothing is selected on submit
            // let $noneBtn = $(
            //     "<div>", {
            //         class: "btn-group mr-2",
            //         "role": "group",
            //         "aria-label": "Answer group"
            //     }).appendTo(".answerDiv")

            let $innerNoneBtn = $(
                "<button>", {
                    "id": "none" + v,
                    "type": "button",
                    class: "btn btn-outline-secondary answer answer-none",
                    text: "None"
                }
            )
            // .appendTo($noneBtn)
            clickAnswer !== "" ? $("#answer" + clickAnswer).addClass("score" + clickAnswer).appendTo($answerBtn) : $innerNoneBtn.addClass("score" + clickAnswer).appendTo($answerBtn)

            // Change button color in the Score div
            clickAnswer !== false && clickAnswer !== 'undefined' && clickAnswer !== "" && dataObj.choices[clickAnswer[0]][clickAnswer[1]] === dataObj.answers[clickAnswer[0]] ? null : $(".score" + clickAnswer).addClass("btn-outline-danger")

            // Reset clickAnswer
            clickAnswer = ""
            currentQIndex < dataObj.questions.length ? currentQIndex++ : null
            clearInterval(timerDecrease)
            clearTimeout(timerCountdown)
            currentQIndex < dataObj.questions.length ? countdown(currentQIndex, skip) : showFinalScore()
        }


        for (let v = 0; v < dataObj.questions.length; v++) {

            // set onclick events for answer-buttons
            for (let i = 0; i < dataObj.choices.length; i++) {
                var clickAnswer = ""
                // select chosen answer by id that is comprised of dataObj.questions index and 
                // dataObj.choices index
                $('#answer' + v + i).click(function () {
                    clickAnswer = "" + v + i
                    console.log('clickAnswer: ', clickAnswer)
                    // set answer-buttons' colors on click
                    for (let k = 0; k < dataObj.choices.length; k++) {
                        let grey = '#answer' + v + k
                        let green = '#answer' + v + i
                        $(grey).addClass('btn-outline-secondary').removeClass('btn-outline-success')
                        $(green).addClass('btn-outline-success').removeClass('btn-outline-secondary')
                    }
                    console.log("dataObj.userAnswers: ", dataObj.userAnswers)
                })
            }

            // OnSubmit event listener
            $('#submit-btn-q-' + v).click(function () {
                submit(currentQIndex)
                dataObj.userAnswers.length === dataObj.questions.length ? showFinalScore() : null
            })

            // Forfeit event listener
            $('#forfeit').click(function () {
                currentQIndex = dataObj.questions.length
                submit(currentQIndex)
                dataObj.userAnswers.length === dataObj.questions.length ? showFinalScore() : null
            })
            // Reload on tryAgain click
            $("#tryAgain").click(function () {
                location.reload();
            });

        }
        // Skip function
        function skip(qIndex) {
            submit(qIndex)
            dataObj.userAnswers.length === dataObj.questions.length ? showFinalScore() : null
        }

        $(".skip-btn").click(function () {
            // check the nextq attribute whether there's more questions
            let nextq = currentQIndex < dataObj.questions.length ? currentQIndex : null
            // pass the next question index to the skip function
            skip(nextq)
            // currentQIndex++
        })

        var timerDecrease
        var timerCountdown
        // Timer countdown
        function countdown(qIndex, callback) {

            let timer = $(".timer" + qIndex).text()
            console.log("timer: ", timer)

            function timerDown() {
                timerDecrease = setInterval(function () {
                    if (timer > 0) {
                        timer = parseInt(timer, 10) - 1
                        console.log("timer: ", timer)
                        $(".timer" + qIndex).text(timer)
                    }
                }, 1000)
            }
            timerDown()

            function timerCount() {
                timerCountdown = setTimeout(() => { callback(qIndex) }, (timer * 1000))
            }
            timerCount()
        }

        $("#begin").click(function () {
            $(".intro").addClass('collapse')
            $("#begin").addClass('collapse')
            $(".questionDiv").removeClass('collapse')
            $("#qcontainer0").removeClass('collapse')
            $(".skip-btn").removeClass('collapse')
            $("#forfeit").removeClass('collapse')

            countdown(currentQIndex, skip)
        })
    }

});

