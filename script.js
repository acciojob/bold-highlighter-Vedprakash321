// Function to highlight bold words in the paragraph
function highlight() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

// Function to revert the color of bold words back to black
function return_normal() {
    const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}

// Get the link element by its ID and add event listeners
// const link = document.getElementById('highlight-link');
link.addEventListener('mouseover', highlight);
link.addEventListener('mouseout', return_normal);

