const form = document.querySelector('#formReg');

const antalProduct = document.querySelector('#antal');
const produktPris = document.querySelector('#pris');
const printTotal = document.querySelector('#total');

function showPrice(event) {

    let pris = antalProduct.value * produktPris.value;
    printTotal.textContent = 'Total pris är: ' + pris;

    event.preventDefault();

}

form.addEventListener('submit', showPrice, false);