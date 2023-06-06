function validarFormulario(event) {
    event.preventDefault();
    
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;

    if (nombre === "" || email === "" || descripcion === "") {
      alert("Por favor, complete todos los campos.");
      return false;
    }

    var mensajeEnviado = document.getElementById("mensaje-enviado");
    mensajeEnviado.style.display = "block";

    setTimeout(function() {
      mensajeEnviado.style.display = "none";
      document.getElementById("nombre").value = "";
      document.getElementById("email").value = "";
      document.getElementById("descripcion").value = "";
    }, 3000);

    return true;
  }