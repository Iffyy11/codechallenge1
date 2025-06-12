function estimateTransactionFee() {
    const amountToSend = parseFloat(document.getElementById('moneyAmount').value);
    const resultBox = document.getElementById('moneyResult');
    
    if (isNaN(amountToSend) || amountToSend <= 0) {
        resultBox.textContent = "Please enter a valid amount (greater than 0).";
        return;
    }
    
    const calculatedFee = amountToSend * 0.015;
    const transactionFee = Math.max(10, Math.min(70, calculatedFee));
    const totalAmount = amountToSend + transactionFee;
    
    resultBox.textContent = 
        `Sending KES ${amountToSend.toFixed(2)}:\n\n` +
        `Calculated Transaction Fee: KES ${transactionFee.toFixed(2)}\n` +
        `Total amount to be debited: KES ${totalAmount.toFixed(2)}\n\n` +
        `Send Money Securely!`;
}