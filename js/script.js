
// NOTE: This portion of the script was written by ChatGPT. Prompt ('Is there a way for me to capture what was clicked on the quiz page? I think this might be done with js?')
// ===== Capture quiz answer clicks =====
const quizButtons = document.querySelectorAll('.quiz-btn');
let selectedAnswer = null;

quizButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove highlight from all buttons
        quizButtons.forEach(b => b.classList.remove('selected'));

        // Highlight the clicked button
        btn.classList.add('selected');

        // Store the selected answer
        selectedAnswer = btn.getAttribute('data-answer');
        console.log("Selected answer:", selectedAnswer);
    });
});

// ===== Capture decision button clicks =====
const decisionButtons = document.querySelectorAll('.decision-btn');

decisionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.getAttribute('data-action');
        console.log("Decision button clicked:", action);

        if(action === "not-sure") {
            // Optional: clear selection
            quizButtons.forEach(b => b.classList.remove('selected'));
            selectedAnswer = null;
            alert("No answer selected.");
        }

        if(action === "submit") {
            if(selectedAnswer) {
                alert("You submitted answer: " + selectedAnswer);
            } else {
                alert("Please select an answer before submitting!");
            }
        }
    });
});
