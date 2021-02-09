/* what are we looking to accomplish?
    - include a progress bar?
*/

const quiz = {
    // start button
    startButton: $("#startButton"),
    // next question button
    nextButton: $("#next"),
    // result button
    resultsButton: $("#result"),
    // play again button
    playAgainButton: $("#playAgain"),
    // question index, for navigating through the array
    questionIndex: 0,
    // user's score
    userScore: 0,
    // finalScore
    finalScore: 0,
    // Question Array
    questions: [
        {
            topic: "themeSong",
            question: "What's your theme song?",
            answers: [
                {
                    answer: "“Smarter Than You” ~ The Undertones",
                    value: 2,
                    id: "blueJay1"
                }, // Blue Jay
                {
                    answer: "“Try” ~ P!nk",
                    value: 4,
                    id: "crow1"
                }, // Crow
                {
                    answer: "“Social Butterfly” ~ Kim Herold",
                    value: 5,
                    id: "sparrow1"
                }, // Sparrow
                {
                    answer: "“Beautiful Dreamer” ~ Bing Crosby",
                    value: 3,
                    id: "mourningDove1"
                }, // Mourning Dove
                {
                    answer: "“Girl on Fire” ~ Alicia Keys",
                    value: 1,
                    id: "cardinal1"
                } // Cardinal
            ]
        },
        {
            topic: "movieTitle",
            question: "Which movie title best describes you?",
            answers: [
                {
                    answer: "“Surprised by Love”",
                    value: 3,
                    id: "mourningDove2"
                }, // Mourning Dove
                {
                    answer: "“Bring it On”",
                    value: 5,
                    id: "sparrow2"
                }, // Sparrow
                {
                    answer: "“Megamind”",
                    value: 2,
                    id: "blueJay2"
                }, // Blue Jay
                {
                    answer: "“Maleficent”",
                    value: 1,
                    id: "cardinal2"
                }, // Cardinal
                {
                    answer: "“MacGyver: Trail to Doomsday”",
                    value: 4,
                    id: "crow2"
                } // Crow
            ]
        },
        {
            topic: "quote",
            question: "Which quote resonates with you?",
            answers: [
                {
                    answer: '“And though she be but little, she is fierce.” ~ William Shakespeare',
                    value: 5,
                    id: "sparrow3"
                }, // Sparrow
                {
                    answer: '“The woman who does not require validation from anyone is the most feared individual on the planet.” ~ Mohadesa Najumi',
                    value: 1,
                    id: "cardinal3"
                }, // Cardinal
                {
                    answer: '“Intelligence - Not because you think you know everything without questioning, but rather because you question everything you think you know.” ~ Unknown',
                    value: 4,
                    id: "crow3"
                }, // Crow
                {
                    answer: '“You don’t learn to walk by following the rules. You learn by doing, and by falling over.” ~ Richard Branson',
                    value: 2,
                    id: "blueJay3"
                }, // Blue Jay
                {
                    answer: '“There is no graceful way to carry hatred.” ~ Alice Walker',
                    value: 3,
                    id: "mourningDove3"
                } // Mourning Dove
            ]
        },
        {
            topic: "colourPalette",
            question: "What colour palette do you like most?",
            answers: [
                // time permitting, include images of colour palettes
                {
                    answer: "Reds, yellows, oranges",
                    value: 1,
                    id: "cardinal4"
                }, // Cardinal
                {
                    answer: "Oranges, black, blues",
                    value: 2,
                    id: "blueJay4"
                }, // Blue Jay
                {
                    answer: "Yellows, blues, greys",
                    value: 3,
                    id: "mourningDove4"
                }, // Mourning Dove
                {
                    answer: "Purples, browns, greens",
                    value: 4,
                    id: "crow4"
                }, // Crow
                {
                    answer: "Browns, blues, white",
                    value: 5,
                    id: "sparrow4"
                } // Sparrow
            ]
        },
        {
            topic: "fontStyle",
            question: "What font style do you like most?",
            answers: [
                {
                    answer: "Architect's Daughter",
                    value: 4,
                    id: "crow5"
                }, // Crow
                {
                    answer: "Dancing Script",
                    value: 3,
                    id: "mourningDove5"
                }, // Mourning Dove
                {
                    answer: "Cinzel",
                    value: 1,
                    id: "cardinal5"
                }, // Cardinal
                {
                    answer: "Questrial",
                    value: 5,
                    id: "sparrow5"
                },// Sparrow
                {
                    answer: "Permanent Marker",
                    value: 2,
                    id: "blueJay5"
                } // Blue Jay
            ]
        }
    ],
    // Results Array
    songbirds: [
        {
            name: "Northern Cardinal",
            // score range: 5 - 8
            scoreRange: [5, 6, 7, 8],
            image: "northernCardinal.jpg",
            description: "You're a Northern Cardinal! You are known for your fiery personality and your close-to \"lone wolf\" attitude. There are few that you welcome into your flock, but those that you do welcome you'll protect them 'til the end. You are incredibly fierce and can be very territorial. Nothing can stop you!"
        },
        {
            name: "Blue Jay",
            // score range: 9 - 12
            scoreRange: [9, 10, 11, 12],
            image: "blueJay.jpg",
            description: "You're a Blue Jay! You are more likely to be the bully of the flock, known for your loud, aggressive, and boisterous behaviour. You are highly intelligent and know how to spin and situation into your favour. You are also extremely loyal to those you care about, possessing a \"fly together, die together\" motto."
        },
        {
            name: "Mourning Dove",
            // score range: 13 - 17
            scoreRange: [13, 14, 15, 16, 17],
            image: "mourningDove.jpg",
            description: "You're a Mourning Dove! Although you can be easily startled, you are super friendly and easy-going. You have a moderately-sized flock because you are so fun to be around. You are extremely graceful and probably love spending time in the sun."
        },
        {
            name: "Crow",
            // score range: 18 - 21
            scoreRange: [18, 19, 20, 21],
            image: "crow.jpg",
            description: "You're a Crow! You may not have the prettiest singing voice, but that doesn't stop you from having some pretty stellar communication skills! Combine that with your endless curiosity and your out-of-the-box problem-solving skills, and you're unstoppable! You also have the ability to adapt to any situation that you find yourself in."
        },
        {
            name: "House Sparrow",
            // score range: 22 - 25
            scoreRange: [22, 23, 24, 25],
            image: "houseSparrow.jpg",
            description: "You're a House Sparrow! Though you are small, when you're surrounded by your flock you are mighty. You have an indomitable spirit and you are highly creative and adaptable. Although you would rather benefit from someone else's hard work than trailblaze your own path, you are the furthest thing from selfish and make sure that your flock is taken care of."
        }
    ]
}

quiz.nextQuestion = function() {
    $(quiz.nextButton).unbind("click").on("click", function() {
        quiz.questionIndex = quiz.questionIndex + 1;

        // update the user's score with the value of the answer they chose
        quiz.finalScore += quiz.userScore;

        // show the next question
        quiz.questionDisplay(quiz.questionIndex);
        // hide Next Question button
        quiz.nextButton.hide();
    });
}

quiz.showNext = function(index) {
    $("#quiz label").on("click", function() {
        quiz.nextButton.show();

        let chosenAnswer = this.control.id;

        quiz.questions[index].answers.forEach(answer => {
            if (chosenAnswer === answer.id) {
                quiz.userScore = answer.value;
            }
        });

        // go to the next question
        quiz.nextQuestion();
    });
}

quiz.resultsDisplay = function() {
    quiz.songbirds.forEach(songbird => {
        if (songbird.scoreRange.includes(quiz.finalScore)) {
            let resultHtml = `
                <h2>${songbird.name}</h2>
                <img src="./assets/${songbird.image}" alt="A ${songbird.name}">
                <p>${songbird.description}</p>
            `;

            $("#results").append(resultHtml);
        }
    });
}

quiz.playAgain = function() {
    $(quiz.playAgainButton).on("click", function() {
        // restart quiz from home
        location.reload();

        // reset userScore, finalScore and questionIndex
        quiz.userScore = 0;
        quiz.finalScore = 0;
        quiz.questionIndex = 0;

        $("header").addClass("homePage");
        $(".mainSection").hide();
    });
}

quiz.showResults = function() {
    $(quiz.resultsButton).on("click", function() {
        // update the user's score with the value of the answer they chose
        quiz.finalScore += quiz.userScore;

        quiz.resultsDisplay();

        $("#quiz").hide();
        // hide Calculate Result button
        quiz.resultsButton.hide();
        quiz.playAgainButton.show();

        quiz.playAgain();
    });
}

quiz.showResultsButton = function(index) {
    $("#quiz label").on("click", function() {
        quiz.resultsButton.show();

        let chosenAnswer = this.control.id;

        quiz.questions[index].answers.forEach(answer => {
            if (chosenAnswer === answer.id) {
                quiz.userScore = answer.value;
            }
        });

        quiz.showResults();
    });
}

quiz.questionDisplay = function(index) {
    let questionHtml = `
        <fieldset>
            <legend>${quiz.questions[index].question}</legend>
                <input 
                    type="radio"
                    name=${quiz.questions[index].topic}
                    id=${quiz.questions[index].answers[0].id}
                >
                <label for=${quiz.questions[index].answers[0].id}>${quiz.questions[index].answers[0].answer}</label>
            
                <input
                    type="radio"
                    name=${quiz.questions[index].topic}
                    id=${quiz.questions[index].answers[1].id}
                >
                <label for=${quiz.questions[index].answers[1].id}>${quiz.questions[index].answers[1].answer}</label>
            
                <input
                    type="radio"
                    name=${quiz.questions[index].topic}
                    id=${quiz.questions[index].answers[2].id}
                >
                <label for=${quiz.questions[index].answers[2].id}>${quiz.questions[index].answers[2].answer}</label>
            
                <input
                    type="radio"
                    name=${quiz.questions[index].topic}
                    id=${quiz.questions[index].answers[3].id}
                >
                <label for=${quiz.questions[index].answers[3].id}>${quiz.questions[index].answers[3].answer}</label>
            
                <input
                    type="radio"
                    name=${quiz.questions[index].topic}
                    id=${quiz.questions[index].answers[4].id}
                >
                <label for=${quiz.questions[index].answers[4].id}>${quiz.questions[index].answers[4].answer}</label>
        </fieldset>
    `;

    $("#quiz").html(questionHtml);


    // when the last question is reached, change the text on the Next Question button and when the button is clicked, show the user's results
    if (index < 4) {
        // show the Next Question button
        quiz.showNext(index);
    } else {
        quiz.showResultsButton(index);
    }
}

quiz.showQuestion = function() {
    quiz.startButton.on("click", function() {
        quiz.startButton.hide();
        $(".startText").hide();

        $("header").removeClass("homePage");
        $(".mainSection").show();

        // show the first question
        quiz.questionDisplay(0);
    });
}

quiz.init = function() {
    // hide Next and Play Again buttons
    quiz.nextButton.hide();
    quiz.resultsButton.hide();
    quiz.playAgainButton.hide();

    $(".mainSection").hide();

    // start quiz
    quiz.showQuestion();
}

// doc ready
$(function() {
    quiz.init();
});