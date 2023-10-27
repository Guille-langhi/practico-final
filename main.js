function guardar() {
    let nombre = document.getElementById("nombreIngresado").value;
    let apellido = document.getElementById("apellidoIngresado").value;
    let sexo = document.getElementById("sexoIngresado").value;
    let dni = document.getElementById("dniIngresado").value;
    let celular = document.getElementById("celularIngresado").value;
    let curso = document.getElementById("cursoIngresado").value;

    document.getElementById("nombre").innerHTML = nombre;
    document.getElementById("apellido").innerHTML = apellido;
    document.getElementById("sexo").innerHTML = sexo;
    document.getElementById("dni").innerHTML = dni;
    document.getElementById("celular").innerHTML = celular;
    document.getElementById("curso").innerHTML = curso;
};
