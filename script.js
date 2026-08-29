const flashcards = [
    {
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets"
    },
    {
        question: "What is JavaScript used for?",
        answer: "JavaScript is used to make websites interactive and dynamic."
    },
    {
        question: "What is an array?",
        answer: "An array is a collection of multiple values stored in a single variable."
    },
    {
        question: "What is a function?",
        answer: "A function is a reusable block of code designed to perform a specific task."
    }
];

let currentIndex = 0;
let score = 0;

const flashcard = document.getElementById("flashcard");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

const currentCard = document.getElementById("current-card");
const totalCards = document.getElementById("total-cards");
const scoreDisplay = document.getElementById("score");

const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const shuffleButton = document.getElementById("shuffle-btn");

const correctButton = document.getElementById("correct-btn");
const wrongButton = document.getElementById("wrong-btn");
const restartButton = document.getElementById("restart-btn");


/* Display Flashcard */

function displayCard() {

    question.textContent = flashcards[currentIndex].question;
    answer.textContent = flashcards[currentIndex].answer;

    currentCard.textContent = currentIndex + 1;
    totalCards.textContent = flashcards.length;

    // Always show the question when changing cards
    flashcard.classList.remove("flipped");
}


/* Flip Flashcard */

flashcard.addEventListener("click", function () {

    flashcard.classList.toggle("flipped");

});


/* Next Button */

nextButton.addEventListener("click", function () {

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayCard();

});


/* Previous Button */

prevButton.addEventListener("click", function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = flashcards.length - 1;
    }

    displayCard();

});


/* Knew It Button */

correctButton.addEventListener("click", function () {

    score++;

    scoreDisplay.textContent = score;

    moveToNextCard();

});


/* Didn't Know Button */

wrongButton.addEventListener("click", function () {

    moveToNextCard();

});


/* Move to Next Card */

function moveToNextCard() {

    currentIndex++;

    if (currentIndex >= flashcards.length) {
        currentIndex = 0;
    }

    displayCard();

}


/* Shuffle Cards */

shuffleButton.addEventListener("click", function () {

    for (let i = flashcards.length - 1; i > 0; i--) {

        const randomIndex = Math.floor(Math.random() * (i + 1));

        const temp = flashcards[i];

        flashcards[i] = flashcards[randomIndex];

        flashcards[randomIndex] = temp;
    }

    currentIndex = 0;

    displayCard();

});


/* Restart */

restartButton.addEventListener("click", function () {

    currentIndex = 0;
    score = 0;

    scoreDisplay.textContent = score;

    displayCard();

});


/* Initial Display */

displayCard();
