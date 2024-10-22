let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const resultDiv = document.getElementById('result');
const form = document.getElementById('quizForm');

function showQuestion(index) {
    questions.forEach((question, i) => {
        question.classList.remove('active');
        if (i === index) {
            question.classList.add('active');
        }
    });
}

function nextQuestion() {
    const selectedAnswer = form.querySelector(`input[name="q${currentQuestion + 1}"]:checked`);

    if (!selectedAnswer) {
        alert("Merci de répondre à la question avant de continuer.");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        calculateResult();
    }
}

function calculateResult() {
    let scores = { A: 0, B: 0, C: 0, D: 0 };

    const answers = new FormData(form);
    answers.forEach((value) => {
        scores[value]++;
    });

    let resultText = '';
    const maxScore = Math.max(scores.A, scores.B, scores.C, scores.D);

    if (scores.A === maxScore) {
        resultText = "Le festin carnivore - Tu adores les barbecues et les repas conviviaux !";
    } else if (scores.B === maxScore) {
        resultText = "L’épicurien des saveurs marines - Tu préfères les fruits de mer et les plats légers.";
    } else if (scores.C === maxScore) {
        resultText = "L’amateur d’apéros dînatoires - Tu aimes les plats à partager dans une ambiance détendue.";
    } else if (scores.D === maxScore) {
        resultText = "Le gourmet gastronomique - Tu es amateur de repas raffinés et élaborés.";
    }

    resultDiv.textContent = resultText;
    resultDiv.style.display = 'block';
}
