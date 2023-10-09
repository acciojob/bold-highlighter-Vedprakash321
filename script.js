function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function returnNormal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}
