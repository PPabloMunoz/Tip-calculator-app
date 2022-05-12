const tipBtnInput = document.getElementById ('btn-check-input');
const tipInput = document.getElementById ('input-tip');

/* Making the input button checked when the user clicks on the input field. */
tipInput.addEventListener ('click', function () {
    tipBtnInput.checked = true;
});

var bill = 0;
var tip = 5;
var people = 1;

const btn5 = document.getElementById ('btn-check-5');
const btn10 = document.getElementById ('btn-check-10');
const btn15 = document.getElementById ('btn-check-15');
const btn25 = document.getElementById ('btn-check-25');
const btn50 = document.getElementById ('btn-check-50');
const inputTip = document.getElementById ('input-tip');

/* Making the tip variable equal to the value of the button that is clicked. */
btn5.addEventListener ('click', function () {
    tip = 5;
    updateData();
});
btn10.addEventListener ('click', function () {
    tip = 10;
    updateData();
});
btn15.addEventListener ('click', function () {
    tip = 15;
    updateData();
});
btn25.addEventListener ('click', function () {
    tip = 25;
    updateData();
});
btn50.addEventListener ('click', function () {
    tip = 50;
    updateData();
});
inputTip.addEventListener ('input', function () {
    tip = parseFloat(inputTip.value);
    updateData();
});


const billInput = document.getElementById ('input-bill');
const peopleInput = document.getElementById ('input-people');


billInput.addEventListener ('input', function () {
    bill = parseFloat(billInput.value);
    
    updateData();
});

peopleInput.addEventListener ('input', function () {
    people = parseFloat(peopleInput.value);
    
    updateData();
});

var priceTipAmount;
var priceTotalAmount;

const tipAmount = document.getElementById ("amount-price-tip");
const totalAmount = document.getElementById ("amount-price-total");



function updateData() {
    priceTipAmount = (bill * (tip / 100)) / people;
    priceTotalAmount = (bill / people) + priceTipAmount;
    parseFloat(priceTipAmount);
    parseFloat(priceTotalAmount);
    if (peopleInput.value == 0) {
        tipAmount.innerHTML = (`Error`);
        totalAmount.innerHTML = (`Error`);
    } else {
        tipAmount.innerHTML = (`$${priceTipAmount}`);
        totalAmount.innerHTML = (`$${priceTotalAmount}`);
    }
}


const btnReset = document.getElementById ('btn-reset');

btnReset.addEventListener ('click', function () {
    billInput.value = 0;
    bill = 0;
    peopleInput.value = 1;
    people = 1;
    updateData()
});
