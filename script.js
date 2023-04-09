document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const resultElement = document.getElementById('result');
    const result = calculateLoveCompatibility(name1, name2);
    resultElement.textContent = `Love Compatibility: ${result}%`;
});

function calculateLoveCompatibility(name1, name2) {
    // Calculate love compatibility based on your own algorithm or survey
    // For example, you can sum the ASCII values of the characters in the names and calculate a percentage
    const totalAscii1 = name1.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const totalAscii2 = name2.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const totalAscii = totalAscii1 + totalAscii2;
    const percentage = totalAscii % 101; // Limit the result to be between 0 and 100
    return percentage;
}


/* function getRandomQuote() {
    // Define an array of quotes
    const quotes = [
        "Love is not finding someone to live with; it's finding someone you can't live without.",
        "The best thing to hold onto in life is each other.",
        "Love is the greatest refreshment in life.",
        "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        "Love is when the other person's happiness is more important than your own.",
        "Where there is love, there is life.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "Love doesn't make the world go 'round. Love is what makes the ride worthwhile."
    ];

    // Return a random quote from the array
    return quotes[Math.floor(Math.random() * quotes.length)];
}
*/