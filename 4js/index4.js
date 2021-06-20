var form = document.getElementById('formulario4');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    var minutos = parseInt(document.getElementById('minute').value);
    var transfminutos = minutos * 60;
    var text = document.getElementById('hour');
    text.innerHTML = transfminutos;


});