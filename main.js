const tipBtnInput = document.getElementById ('btn-check-input');
const tipInput = document.getElementById ('input-tip');

/* Making the input button checked when the user clicks on the input field. */
tipInput.addEventListener ('click', function () {
    tipBtnInput.checked = true;
});

var tip = 0;

const btn5 = document.getElementById ('btn-check-5');
const btn10 = document.getElementById ('btn-check-10');
const btn15 = document.getElementById ('btn-check-15');
const btn25 = document.getElementById ('btn-check-25');
const btn50 = document.getElementById ('btn-check-50');
const inputTip = document.getElementById ('input-tip');

/* Making the tip variable equal to the value of the button that is clicked. */
btn5.addEventListener ('click', function () {
    tip = 5;
    console.log (tip);
});
btn10.addEventListener ('click', function () {
    tip = 10;
    console.log (tip);
});
btn15.addEventListener ('click', function () {
    tip = 15;
    console.log (tip);
});
btn25.addEventListener ('click', function () {
    tip = 25;
    console.log (tip);
});
btn50.addEventListener ('click', function () {
    tip = 50;
    console.log (tip);
});
inputTip.addEventListener ('input', function () {
    tip = parseInt(inputTip.value);
    console.log (tip);
});


const bill = document.getElementById ('input-bill').value;
const people = document.getElementById ('input-people').value;
