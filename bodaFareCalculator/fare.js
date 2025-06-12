function calculateBodaFare() {
    const distanceInKm = parseFloat(document.getElementById('bodaKm').value);
    const resultBox = document.getElementById('bodaResult');
    
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        resultBox.textContent = "Please enter a valid distance (greater than 0).";
        return;
    }
    
    const baseFare = 50;
    const chargePerKm = 15;
    const distanceCharge = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceCharge;
    
    resultBox.textContent = 
        `Uko kwote? Io ni ${distanceInKm.toFixed(1)} km:\n\n` +
        `Ukikalia Pikipiki: KES ${baseFare}\n` +
        `Mpaka Uko: KES ${distanceCharge}\n` +
        `Total: KES ${totalFare}\n\n` +
        `Panda Pikipiki!`;
}