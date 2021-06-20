var form = document.getElementById('formulario2');

// 1.Fazer uma função no javaScprit que
// recebe uma temperatura em celsius e converte para farenheit.
// F=1.8*C+32
form.addEventListener('submit', (e) => {
    var lado = document.getElementById('value2').value;
    var area = lado * 4;
    var perimetro = lado * lado;
    var text = document.getElementById('side');
    text.innerHTML = area;
    var text = document.getElementById('side2');
    text.innerHTML = perimetro;
    e.preventDefault();

});