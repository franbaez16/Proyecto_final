function login() {
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;

  if (usuario === "admin" && clave === "1234") {
    alert("Bienvenido"); 
    
  } else {
    alert ("Usuario o contraseña incorrectos.");
  }
}

