document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const AccountNumber = document.getElementById('account-no').value;
    const Pin = document.getElementById('account-pass').value;
    const convertedPin = parseInt(Pin);
    if (AccountNumber.length === 11) {
        if (AccountNumber == '01540181793') {
            if (convertedPin === 1234) {
                window.location.href="./main.html"
            }
            else {
                console.log('Invalid Pin or Pin must be within 4 character');
            }

        }
        else {
            console.log('Invalid Account No');
        }
    }
    else {
        alert('Account no length must be 11 characters');
    }

})