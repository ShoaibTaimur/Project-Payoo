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
    const bank = document.getElementById("add-money-allbank").value;

    if (convertedPin === 1234) {
        if (convertedAmount < 0) {
            Swal.fire({
                title: "Failed",
                text: "Invalid Transaction",
                icon: "warning"
            });
            return;
        }
        const sum = convertedMainBalance + convertedAmount;
        document.getElementById('main-balance').innerText = sum;

        const p = document.createElement('p');
        p.innerText = `Added ${convertedAmount} from ${AccountNo} account [${bank}]`;
        p.classList.add("shadow-lg", "bg-white", "rounded-xl", "p-2", "mt-[8px]")
        tranContainer.appendChild(p);
        Swal.fire({
            title: "Good job!",
            text: "Added Money",
            icon: "success"
        });


    }
    else {
        alert('Invalid Pin');
    }
})