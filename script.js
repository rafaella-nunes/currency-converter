const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const inputValue = document.getElementById('value-usd');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let convertedValue = 0;

// TODO: Obter taxas de conversão de uma API externa em caso de conexão disponível
// Taxas de conversão
const currencyRates = {
	'EUR': 0.95,
	'BRL': 5.02,
	'KRW': 1354.39
}

function handleSubmit(event) {
    event.preventDefault();
	errors = []; // Lista contendo os erros de preenchimento

	// Verifica se o valor inserido é válido (value > 0 == true), e então insere o erro na lista
    if (!Number(inputValue.value)) { 
        errors.push('Informe um valor correto!');
    }
	
	// Verifica se a moeda foi selecionada, e então insere o erro na lista
	if(!selectedCurrency.value){
        errors.push('Escolha uma moeda.');
    }

	// Verifica existe algum erro a ser exibido
	if (errors.length) {
		alert(errors.join('\n'));
		return;
	}

	// Chama a função de conversão
    converter();
};

function converter() {

	// Extração do valor inserido e da moeda selecionada
	convertedValue = inputValue.value * currencyRates[selectedCurrency.value];

	// Exibição do resultado
    result.innerHTML = valueFormater(selectedCurrency.value);

	// Animação do resultado
	animateResult();

	// Limpa os campos
    inputValue.value = '';
    selectedCurrency.value = '';
};

function valueFormater(currency) {
    const value = convertedValue.toLocaleString('USD', {style: 'currency', currency: `${currency}`});
    return `<span>💲</span> ${value} <span>💲</span> `;
};

function animateResult() {
    return result.animate(
		[
        	{ transform: 'translateY(-150px)' },
     		{ transform: 'translateY(0px)' }
    	], { duration: 500 })
}