
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

    // Set question text
    // $('.question').append({
    //     text: "JS Question"
    // })


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
        for (let i = 1; i <= dataObj.questions.length; i++) {
            var $answerBtns = []
            var $question = $(
                "<h3>", {
                    class: "question display-6",
                    text: dataObj.questions[i]
                }).append(
                    $answerBtns
                )
            for (let k = 1; k <= dataObj.choices.length; k++) {
                var $answerBtn = $(
                    "<div>", {
                        class: "btn-toolbar",
                        "role": "toolbar",
                        "aria-label": "Toolbar with button groups"
                    }).append(
                        "<div>", {
                            class: "btn-group mr-2",
                            role: "group",
                            "aria-label": "Answer group"
                        }).append(
                            "<button>", {
                                id: "answer" + k,
                                type: "button",
                                class: "btn btn-outline-secondary answer",
                                text: dataObj.choices[k]
                            }
                        )
                $answerBtns.push($answerBtn)

            }
            var $submitBtn = $(
                "<div>", {
                    class: "mr-3"
                }).append(
                    "<a>", {
                        class: "btn btn-success btn mr-2",
                        id: "submit-btn-q-1",
                        role: "button",
                        text: "Submit Answer"
                    }

                )
            var $timerHtml = $(
                "<p>", {
                    class: "lead",
                    text: "00:03"
                }
            )

        }
        // $(".questionDiv").html("")
        $(".questionDiv").apppend($question + $submitBtn + $timerHtml)
    }
    generateHtml()


    console.log("choices.length: ", dataObj.choices.length)

    function createEventListeners() {
        for (let i = 1; i <= dataObj.choices.length; i++) {
            var clickAnswer = []

            $('#answer' + i).click(function () {
                clickAnswer.splice(0, 1, i)
                console.log('clickAnswer: ', clickAnswer)
                for (let k = 1; k <= dataObj.choices.length; k++) {
                    $('#answer' + k).addClass('btn-outline-secondary').removeClass('btn-outline-success')
                    $('#answer' + i).addClass('btn-outline-success').removeClass('btn-outline-secondary')
                }
                console.log("dataObj.userAnswers: ", dataObj.userAnswers)
            })

            // OnSubmit event listener
            $('#submit-btn-q-' + i).click(function () {

                console.log('submit clickAnswer: ', clickAnswer)
                console.log('submit clickAnswer[0]: ', clickAnswer[0])
                console.log('submit clickAnswer[1]: ', clickAnswer[1])
                dataObj.userAnswers.splice(i - 1, 1, clickAnswer[0])
                dataObj.userAnswers.splice(2, 1, "third")
                console.log("dataObj.userAnswers: ", dataObj.userAnswers)
            })
            // Skip question button event listener
            $('#skip-btn-q-' + i).click(function () {
                // write skip code
            })

            // Forfeit event listener
            $('#forfeit').click(function () {
                // write forfeit code
            })
        }
    }
    createEventListeners()


});

