var form = document.getElementById('formulario7');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    var altura = parseFloat(document.getElementById('height1').value);
    var peso = parseInt(document.getElementById('weight').value);
    var imc1 = (peso / (altura * altura));

    if (imc1 <= 25) {
        var res = 'Peso Ideal';
        var text = document.getElementById('value7');
        text.innerHTML = res;
    }
    else {
        var res = 'Acima do Peso';
        var text = document.getElementById('value7');
        text.innerHTML = res;
    }
});