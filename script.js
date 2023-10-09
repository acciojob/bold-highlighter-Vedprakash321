function highlight() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'green';
    });
}

function return_normal() {
    const boldWords = document.querySelectorAll('strong');
    boldWords.forEach(word => {
        word.style.color = 'black';
    });
}

const link = document.getElementById('highlight-link');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);
