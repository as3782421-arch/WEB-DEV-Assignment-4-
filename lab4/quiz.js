// ===============================
//   JavaScript Console Quiz Game
//   Runs completely in console
// ===============================

// Step 1: Array of questions
const quizQuestions = [
    {
        question: "1) What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "2) Who is known as the father of computers?",
        answer: "charles babbage"
    },
    {
        question: "3) What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "4) What is 2 + 2?",
        answer: "4"
    },
    {
        question: "5) JavaScript is mainly used for ___?",
        answer: "web development"
    }
];

// Step 2: Function to run the quiz
function runQuiz() {
    let score = 0; // Step 3: Score initialization

    alert("Welcome to the JavaScript Quiz! Check the console if needed.");

    // Step 4: Loop through questions
    for (let i = 0; i < quizQuestions.length; i++) {
        const userInput = prompt(quizQuestions[i].question);

        if (!userInput) {
            alert("No answer given. Moving to next question.");
            continue;
        }

        // Step 6: Normalize input
        const cleanedInput = userInput.toLowerCase().trim();
        const correctAnswer = quizQuestions[i].answer.toLowerCase().trim();

        // Step 7: Check answer
        if (cleanedInput === correctAnswer) {
            score++;
            alert("Correct! 👍");
        } else {
            alert(`Wrong ❌\nCorrect Answer: ${quizQuestions[i].answer}`);
        }
    }

    // Step 9: Final Score
    alert(`Quiz Finished!\nYour Score: ${score} / ${quizQuestions.length}`);
}

// Step 10: Run automatically when page loads
runQuiz();