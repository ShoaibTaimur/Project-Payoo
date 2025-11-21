document.getElementById('cash-out').style.display = 'none';
document.getElementById('add-money').style.display = 'none';
// document.getElementById('transaction-history').style.display = 'none';
document.getElementById('add-money-box').addEventListener('click', function (event) {
    document.getElementById('cash-out').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
    handleToggle('transaction-history','none');

})
document.getElementById('cash-out-box').addEventListener('click', function (event) {
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('add-money').style.display = 'none';
    handleToggle('transaction-history','none');

})

document.getElementById('logout-btn').addEventListener('click',function()
{
    window.location.href="./index.html";
})

function handleToggle(id,status)
{
    document.getElementById(id).style.display=status;
}