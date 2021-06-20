var form = document.getElementById('formulario6');

form.addEventListener('submit', (e) => {
    var number1 = parseInt(document.getElementById('numb1').value);
    var number2 = parseInt(document.getElementById('numb2').value);
    if (number1 > number2) {
        var text = document.getElementById('bigger');
        text.innerHTML = number1;
    }
    else if (number2 == number1) {
        var res = 'Igual';
        var text = document.getElementById('bigger');
        text.innerHTML = res;

    }
    else {
        var text = document.getElementById('bigger');
        text.innerHTML = number2;

    }



    e.preventDefault();

});