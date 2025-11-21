document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const Amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(Amount);

    const Pin = document.getElementById('pin').value;
    const convertedPin = parseInt(Pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;
    }
    else {
        alert('Invalid Pin');
    }
})