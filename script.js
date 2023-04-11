const quizForm = document.querySelector('#quiz-form');
const submitButton = document.querySelector('#submit');
const resultContainer = document.querySelector('#result');

submitButton.addEventListener('click', () => {
    let score = 0;
    const answers = quizForm.elements;
    for (let i = 0; i < answers.length; i++) {
        const answer = answers[i];
        if (answer.checked) {
            score += answer.value === 'a' ? 1 : -1;
        }
    }
    if (score == 0) {
        resultContainer.textContent = `Votre score est de ${score}. Vous êtes ambigu !`;
    } else if (score >= 0) {
        resultContainer.textContent = `Votre score est de ${score}. Vous êtes du côté ${score >= 0 ? 'lumineux' : 'obscur'} de la force !`;
    }

});