const submitButton = document.querySelector(".submit-button");
const nextButton = document.querySelector(".next-button");
const resultButton = document.querySelector(".result-button");
let totalCorrect = 0;
let currIndex = 0;

submitButton.addEventListener("click", () => {
    const userAnswer = document.querySelector(".question-option");
    if (!userAnswer.value) {
        console.log("Please enter an answer before submitting.");
        return;
    }
    checkAnswer(parseInt(userAnswer.value), currIndex);
    if (currIndex >= questionSet.length - 1) {
        submitButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        resultButton.classList.remove("hidden");
    }
})

nextButton.addEventListener("click", () => {
    currIndex++;
    displayQuestion(currIndex);
})

resultButton.addEventListener("click", () => {
    const displayContainer = document.querySelector(".feedback-text-container");
    if (displayContainer.classList.contains("hidden")) {
        displayContainer.classList.remove("hidden");
    }
    displayContainer.innerHTML = `<p class="feedback-summary">You have completed the quiz! <br> You got ${totalCorrect} out of ${questionSet.length} correct! <br><br> Resulting in a <b>${Math.round((totalCorrect / questionSet.length) * 100)}%</b></p>`;
    resultButton.classList.add("hidden");
})

function checkAnswer(userAnswer, index) {
    const correctAnswer = questionSet[index].answer;
    const displayContainer = document.querySelector(".feedback-text-container");
    if (userAnswer === correctAnswer) {
        if (displayContainer.classList.contains("hidden")) {
            displayContainer.classList.remove("hidden");
            displayContainer.innerHTML = `<h1 class="feedback-correct">Congratulations! Correct</h1>`;
        }
        totalCorrect++;
    } else {
        if (displayContainer.classList.contains("hidden")) {
            displayContainer.classList.remove("hidden");
            displayContainer.innerHTML = `<h1 class="feedback-incorrect">Sorry... Incorrect</h1>`;
        }
    }
    submitButton.classList.add("hidden");
    if (nextButton.classList.contains("hidden")) {
        nextButton.classList.remove("hidden");
    }
}

function displayQuestion(currIndex) {
    const userAnswer = document.querySelector(".question-option");
    userAnswer.value = "";
    if (submitButton.classList.contains("hidden")) {
        submitButton.classList.remove("hidden");
        const nextButton = document.querySelector(".next-button");
        nextButton.classList.add("hidden");
    }
    const displayContainer = document.querySelector(".feedback-text-container");
    displayContainer.classList.add("hidden");
    const header = document.querySelector(".quiz-header");
    header.textContent = `Question #${currIndex + 1}`;
    const numOfQuestions = document.querySelector(".quiz-total-questions");
    numOfQuestions.textContent = `${currIndex + 1}/${questionSet.length} cards`;
    const question = document.querySelector(".quiz-question");
    question.textContent = questionSet[currIndex].question;
}

const questionSet = [
    {
        question : "47 + 38 = ?",
        answer: 85
    },
    {
        question: "92 - 47 = ?",
        answer: 45
    },
    {
        question: "13 * 7 = ?",
        answer: 91
    },
    {
        question: "144 / 12 = ?",
        answer: 12
    },
    {
        question: "56 + 79 = ?",
        answer: 135
    },
    {
        question: "200 - 83 = ?",
        answer: 117
    },
    {
        question: "15 * 6 = ?",
        answer: 90
    },
    {
        question: "108 / 9 = ?",
        answer: 12
    },
    {
        question: "64 + 128 = ?",
        answer: 192
    },
    {
        question: "305 - 168 = ?",
        answer: 137
    },
    {
        question: "14 * 9 = ?",
        answer: 126
    },
    {
        question: "225 / 15 = ?",
        answer: 15
    },
    {
        question: "89 + 57 = ?",
        answer: 146
    },
    {
        question: "17 * 4 = ?",
        answer: 68
    },
    {
        question: "250 - 91 = ?",
        answer: 159
    }
];