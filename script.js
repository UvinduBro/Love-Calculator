document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const resultElement = document.getElementById('result');
    const quoteElement = document.getElementById('quote');
    const emojiElement = document.getElementById('emoji');

    let result;
    if ((name1 === 'Uvindu' && name2 === 'Sanduni') || (name1 === 'Sanduni' && name2 === 'Uvindu')) {
        result = 98; // Set compatibility to 98% for specific names
    } else {
        result = calculateLoveCompatibility(name1, name2);
    }

    const quote = getRandomQuote();
    resultElement.textContent = `Love Compatibility: ${result}%`;
    quoteElement.textContent = `"${quote}"`;
    emojiElement.textContent = getEmoji(result);
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

function getRandomQuote() {
    // Define an array of quotes
    const quotes = [
        "Love is not finding someone to live with; it's finding someone you can't live without.",
        "The best thing to hold onto in life is each other.",
        "Love is the greatest refreshment in life.",
        "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.",
        "Love is when the other person's happiness is more important than your own.",
        "Where there is love, there is life.",
        "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "Love doesn't make the world go 'round. Love is what makes the ride worthwhile"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function getEmoji(percentage) {
    // Define emoji based on the percentage of love compatibility
    if (percentage >= 90) {
        return "😍"; // Heart eyes emoji
    } else if (percentage >= 70) {
        return "😊"; // Smiling face emoji
    } else if (percentage >= 50) {
        return "😐"; // Neutral face emoji
    } else if (percentage >= 30) {
        return "😕"; // Confused face emoji
    } else {
        return "😢"; // Crying face emoji
    }
}