var form = document.getElementById('formulario3');

form.addEventListener('submit', (e) => {
    var altura = document.getElementById('height').value;
    var largura = document.getElementById('width').value;
    var area = altura * largura;

    var text = document.getElementById('answer');
    text.innerHTML = area;
    var perimeter = 2 * altura + 2 * largura;
    var text = document.getElementById('answer2');
    text.innerHTML = perimeter;
    e.preventDefault();

});