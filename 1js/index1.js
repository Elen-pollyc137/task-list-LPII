var form = document.getElementById('formulario');

// 1.Fazer uma função no javaScprit que
// recebe uma temperatura em celsius e converte para farenheit.
// F=1.8*C+32
form.addEventListener('submit', (e) => {
    var valor = document.getElementById('value1').value;
    var farenheit = 1.8 * valor + 32
    var text = document.getElementById('temperes');
    text.innerHTML = farenheit;
    e.preventDefault();

});