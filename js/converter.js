const rates = {
    RUB: 1,
    USD: 92.5,
    EUR: 100.2,
    GBP: 118.3,
    CNY: 12.7,
    JPY: 0.61
};
const amount = document.getElementById('amount');
const from = document.getElementById('fromCurrency');
const to = document.getElementById('toCurrency');
const result = document.getElementById('result');
function convert() {
    const value = parseFloat(amount.value);
    if (!amount.value) {
        result.textContent = 'Введите сумму';
        return;
    }
    if (value <= 0) {
        result.textContent = 'Сумма должна быть больше нуля';
        return;
    }
    if (from.value === to.value) {
        result.textContent = 'Выберите разные валюты';
        return;
    }
    const rub = value * rates[from.value];
    const converted = rub / rates[to.value];
    result.textContent = `${value.toFixed(2)} ${from.value} = ${converted.toFixed(2)} ${to.value}`;
}
document.getElementById('convertBtn').addEventListener('click', convert);
amount.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') convert();
});
amount.value = 1000;
convert();