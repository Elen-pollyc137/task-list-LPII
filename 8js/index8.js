var form = document.getElementById('formulario8');

// 1.Fazer uma função no javaScprit que
// recebe uma temperatura em celsius e converte para farenheit.
// F=1.8*C+32

form.addEventListener('submit', (e) => {

    var number = parseInt(document.getElementById('numb').value);
    let result = '';

    for (let i = 0; 0 <= number; i++) {
        result = `${result} ${number--}`
    }
    var text = document.getElementById('result');
    text.innerHTML = result;
    e.preventDefault();

});