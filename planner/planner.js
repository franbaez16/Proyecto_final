function limpiarcampos(){
document.getElementById("titulo").value ="";
document.querySelector("textarea[name='Descripcion']").value =""; 
document.getElementById("fecha").value ="";
document.getElementById("Hora").value ="";
}

function tareacreada(){
limpiarcampos();
document.getElementById("tareacreada").textContent = "Nueva Tarea Cargada :)";
}

function guardar(){
tareacreada();
}
