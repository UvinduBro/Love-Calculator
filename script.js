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
