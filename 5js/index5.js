var form = document.getElementById('formulario5');

form.addEventListener('submit', (e) => {
    var number1 = parseInt(document.getElementById('age').value);
    var number2 = parseInt(document.getElementById('age2').value);
    var number3 = parseInt(document.getElementById('age3').value);
    var number4 = parseInt(document.getElementById('age4').value);
    var mediaresp = (number1 + number2 + number3 + number4) / 4;

    var text = document.getElementById('media');
    text.innerHTML = mediaresp;

    e.preventDefault();

});