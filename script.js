const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-usd');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let convertedValue = 0;

function handleSubmit(e){
    e.preventDefault();
    if(!inputValue.value || inputValue.value < 0){
        alert('Valor invalido. Informe um valor correto!');
        return;
    }
    else if(!selectedCurrency.value){
        alert('Escolha uma moeda.');
        return;
    }

    converter();
};

function converter(){
    if (selectedCurrency.value === 'eur'){
        convertedValue = inputValue.value * 0.95;
        result.innerHTML = valueFormater('USD', 'EUR');
        animateResult();
    }else if(selectedCurrency.value === 'brl'){
        convertedValue = inputValue.value * 5.02;
        result.innerHTML = valueFormater('USD', 'BRL');
        animateResult();
    }else if(selectedCurrency.value === 'krw'){
        convertedValue = inputValue.value * 1354.39;
        result.innerHTML = valueFormater('USD', 'KRW');
        animateResult();
    }
    inputValue.value = '';
    selectedCurrency.value = '';
};

function valueFormater(locale, currency){
    const value = convertedValue.toLocaleString(`${locale}`, {style: 'currency', currency: `${currency}`});
    return `<span>💲</span> ${value} <span>💲</span> `;
};

function animateResult(){
    return result.animate([
        {transform: 'translateY(-150px)'},
        {transform: 'translateY(0px)'}
    ], {duration: 500})
}