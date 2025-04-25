document.addEventListener("DOMContentLoaded", function() {
    const checkButton = document.getElementById("checkButton");
    const wordInput = document.getElementById("wordInput");
    const resultDisplay = document.getElementById("result"); // Corrected ID

    let dictionary1 = [];
    let dictionary2 = [];

    fetch('dictionaries/Dictionary1.txt')
        .then(response => response.text())
        .then(data => {
            dictionary1 = data.split('\n').map(word => word.trim().toLowerCase());
        });

    fetch('dictionaries/Dictionary2.txt')
        .then(response => response.text())
        .then(data => {
            dictionary2 = data.split('\n').map(word => word.trim().toLowerCase());
        });

    checkButton.addEventListener("click", function() {
        const word = wordInput.value.trim().toLowerCase();
        let resultMessage = "";

        if (dictionary1.includes(word)) {
            resultMessage = `${word} is a valid Scrabble word in Dictionary 1.`;
        } else if (dictionary2.includes(word)) {
            resultMessage = `${word} is a valid Scrabble word in Dictionary 2.`;
        } else {
            resultMessage = `${word} is an illegal word.`;
        }

        resultDisplay.textContent = resultMessage;
    });
});