document.getElementById('submit').addEventListener('click', function() {
    const answer = document.getElementById('answer').value.toLowerCase();
    const result = document.getElementById('result');

    if (answer === 'echo') {
        result.textContent = 'Correct! The answer is "echo".';
    } else {
        result.textContent = 'Wrong answer. Try again!';
    }
});