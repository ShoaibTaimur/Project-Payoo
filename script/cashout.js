document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const Amount = document.getElementById('cash-out-amount').value;
    const convertedAmount = parseFloat(Amount);

    const Pin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(Pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const minus = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = minus;
    }
    else {
        alert('Invalid Pin');
    }
})