// 1. Chai Ingredient Calculator
function calculateChai() {
    const cups = parseFloat(document.getElementById('chaiCups').value);
    const resultBox = document.getElementById('chaiResult');

    // Check input
    if (isNaN(cups) || cups <= 0) {
        resultBox.textContent = " Please enter a valid number of cups (greater than 0)";
        return;
    }

    // Calculate amounts needed
    const water = cups * 200;
    const milk = cups * 50;
    const teaLeaves = cups * 1;
    const sugar = cups * 2;

    // Show results
    resultBox.textContent = 
        `To make ${cups} ${cups === 1 ? 'cup' : 'cups'} of Kenyan Chai:\n\n` +
        `Water: ${water} ml\n` +
        `Milk: ${milk} ml\n` +
        `Tea Leaves: ${teaLeaves} tbsp\n` +
        `Sugar: ${sugar} tsp\n\n` +
        `Enjoy your chai!`;
}

// 2. Boda Boda Fare Calculator
function calculateBodaFare() {
    const distance = parseFloat(document.getElementById('bodaKm').value);
    const resultBox = document.getElementById('bodaResult');

    // Check input
    if (isNaN(distance) || distance <= 0) {
        resultBox.textContent = " Please enter a valid distance (greater than 0 km)";
        return;
    }

    // Calculate fare
    const baseFare = 50;
    const perKm = 15;
    const distanceCharge = distance * perKm;
    const totalFare = baseFare + distanceCharge;

    // Show results
    resultBox.textContent = 
        `Boda Boda Fare for ${distance.toFixed(1)} km:\n\n` +
        `Base Fare: KES ${baseFare}\n` +
        `Distance Charge (${distance.toFixed(1)} km × KES ${perKm}): KES ${distanceCharge}\n` +
        `Total Fare: KES ${totalFare}\n\n` +
        `Panda kwa usalama! (Ride safely!)`;
}

// 3. Fee Calculator
function calculateMpesaFee() {
    const amount = parseFloat(document.getElementById('moneyAmount').value);
    const resultBox = document.getElementById('moneyResult');

    // Check input
    if (isNaN(amount) || amount <= 0) {
        resultBox.textContent = " Please enter a valid amount (greater than KES 0)";
        return;
    }

    // Calculate fee with limits
    const feePercent = 0.015;
    const calculatedFee = amount * feePercent;
    const actualFee = Math.max(10, Math.min(70, calculatedFee));
    const total = amount + actualFee;

    // Show results
    resultBox.textContent = 
        `Transaction Details for KES ${amount.toFixed(2)}:\n\n` +
        `Calculated Fee (1.5%): KES ${calculatedFee.toFixed(2)}\n` +
        `Actual Fee (min KES 10, max KES 70): KES ${actualFee.toFixed(2)}\n` +
        `Total Amount: KES ${total.toFixed(2)}\n\n` +
        `Habari ya M-Pesa!`;
}
