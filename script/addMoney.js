document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const Amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(Amount);

    const AccountNo = document.getElementById('account-no').value;
    const tranContainer = document.getElementById('transaction-container');

    const Pin = document.getElementById('pin').value;
    const convertedPin = parseInt(Pin);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === 1234) {
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;

        const p = document.createElement('p');
        p.innerText = `Added ${convertedAmount} from ${AccountNo} account`;
        p.classList.add("shadow-lg", "bg-white", "rounded-xl", "p-2","mt-[8px]")
        tranContainer.appendChild(p);


    }
    else {
        alert('Invalid Pin');
    }
})