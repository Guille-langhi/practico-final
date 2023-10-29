function guardar() {
    let nombre = document.getElementById("nombreIngresado").value;
    let apellido = document.getElementById("apellidoIngresado").value;
    let email = document.getElementById("emailIngresado").value;
    let dni = document.getElementById("dniIngresado").value;
    let celular = document.getElementById("celularIngresado").value;
    let curso = document.getElementById("cursoIngresado").value;

    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("apellido").innerHTML = apellido;
    document.getElementById("email").innerHTML = email;
    document.getElementById("dni").innerHTML = dni;
    document.getElementById("celular").innerHTML = celular;
    document.getElementById("curso").innerHTML = curso;
}
