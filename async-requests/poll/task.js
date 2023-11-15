const xhr = new XMLHttpRequest();
const pollTitle = document.getElementById('poll__title');
const pollAnswersContainer = document.getElementById('poll__answers');

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const dataJson = JSON.parse(xhr.responseText);
        const question = dataJson.data.title;
        const answers = dataJson.data.answers;

        pollTitle.textContent = question;
        pollAnswersContainer.innerHTML = '';

        answers.forEach(answer => {
            const button = document.createElement('button');
            button.className = 'poll__answer';
            button.textContent = answer;
            pollAnswersContainer.appendChild(button);

            button.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            });
        });
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
