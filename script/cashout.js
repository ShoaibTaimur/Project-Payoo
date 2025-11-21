document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault();
    handleToggle('transaction-history','none');
    const Amount = document.getElementById('cash-out-amount').value;
    const convertedAmount = parseFloat(Amount);

    const AccountNo = document.getElementById('cash-out-account-no').value;
    const tranContainer = document.getElementById('transaction-container');

    const Pin = document.getElementById('cash-out-pin').value;
    const convertedPin = parseInt(Pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const minus = convertedMainBalance - convertedAmount;
        document.getElementById('main-balance').innerText = minus;

        const p = document.createElement('p');
        p.innerText = `Cashed-Out ${convertedAmount} to ${AccountNo} account`;
        p.classList.add("shadow-lg", "bg-white", "rounded-xl", "p-2","mt-[8px]")
        tranContainer.appendChild(p);
    }
    else {
        alert('Invalid Pin');
    }
})