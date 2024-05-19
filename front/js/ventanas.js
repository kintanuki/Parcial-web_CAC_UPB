document.getElementById('carta').addEventListener('click', abrir);

function abrir() {
    document.getElementById('tipocarta').style.display = 'block';

}
function cerrar() {
    document.getElementById('tipocarta').style.display = 'none';
    document.getElementById('tipoheroe').style.display = 'none';
    document.getElementById('tipoitem').style.display = 'none';

;
}
