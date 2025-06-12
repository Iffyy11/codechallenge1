function calculateChaiIngredients() {
    const numberOfCups = parseFloat(document.getElementById('chaiCups').value);
    const resultBox = document.getElementById('chaiResult');
    
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        resultBox.textContent = "Please enter a valid number of cups (greater than 0).";
        return;
    }
    
    const water = numberOfCups * 200;
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups * 1;
    const sugar = numberOfCups * 2;
    
    resultBox.textContent = 
        `To make ${numberOfCups} cups of Kenyan Chai, you will need:\n\n` +
        `Water: ${water} ml\n` +
        `Milk: ${milk} ml\n` +
        `Tea Leaves (Majani): ${teaLeaves} tablespoons\n` +
        `Sugar (Sukari): ${sugar} teaspoons\n\n` +
        `Enjoy your Chai Bora!`;
}