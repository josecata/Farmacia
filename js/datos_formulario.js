function cargarDatosForm() {
    console.log("Leo la localStorage 'datosFormulario'");
    return JSON.parse(localStorage.getItem("datosFormulario"));
}

function mostrarDatos() {
    console.log("Muestro los datos de la localStorage 'datosFormulario' y los imprimo en el Div 'datos_formulario'");
    let datos_formulario = cargarDatosForm();

    let texto = `<p>Nombre: <strong>${datos_formulario.nombre}</strong><br>
                Email: <strong>${datos_formulario.email}</strong><br>
                Provincia: <strong>${datos_formulario.provincia}</strong><br>
                Ciudad: <strong>${datos_formulario.localidad}</strong><br></p>`;
    $("#datos_formulario").html(texto);

    // En caso de querramos imprimir los valores en los campos del Formulario ... para los demás campos se utiliza el mismo criterio...
    $("#resultado_nombre").val(datos_formulario.nombre);
    $("#resultado_email").val(datos_formulario.email);
}

mostrarDatos();