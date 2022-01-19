function cargarFormulario() {
 
 var provincias = ["Seleccionar","Buenos Aires","Capital Federal","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos",
"Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz",
"Santa Fe","Santiago del Estero","Tierra del Fuego","Tucumán"];

    function cargarProvincias(provincias) {
        var select_provincia = $("#provinciaUser");
    
        for (let provincia of provincias) {
            select_provincia.append("<option value='" + provincia + "'>" + provincia + "</option>");
        }
    }


    function camposValidos(nombre1, nombre2, estado) {
        var nombre1 = $("#" + nombre1);
        var nombre2 = $("#" + nombre2);
    
        if (estado == "ok") {
            nombre1.removeClass("borde_error");
            nombre1.addClass("borde_ok");
            nombre2.removeClass("texto_error");
            nombre2.addClass("texto_ok");
        } else {
            nombre1.removeClass("borde_ok");
            nombre1.addClass("borde_error");
            nombre2.removeClass("texto_ok");
            nombre2.addClass("texto.error");
        }
    }

    function validarProvincia() {
        var provincia = $("#provinciaUser");

        if (provincia.val() == "Salta") {
            $("#localidadUser").val("Salta");
        } else {
            $("#localidadUser").val("");
        }
    }

    function guardarDatosForm() {
        console.log("Guardo los datos del formulario en la localStorage 'datosFormulario'");
        var nombre = $("#nombreUser").val();
        var email = $("emailUser").val();
        var provincia = $("#provinciaUser").val();
        var localidad = $("#localidadUser").val();
        localStorage.setItem("datosFormulario", JSON.stringify({nombre:nombre, email:email, provincia:provincia, localidad:localidad}));
    }

    function validarFormulario() {
    var nombre = $("#nombreUser");
    var textoNombre = $("#textoNombre");

    if (nombre.val() == "") {
        textoNombre.html("Error! Ingrese un nombre!");
        camposValidos("nombreUser", "textoNombre","error");       
        nombre.focus();
        return false;  // no continua la validacion
    } else {
        textoNombre.html("Dato Validado");
        camposValidos("nombreUser", "textoNombre","ok");   
    }

    var correo = $("#mailUser");
    var textoCorreo = $("#textoCorreo");

    if (correo.val() == "") {
        textoCorreo.html("Error! Ingrese un Email!");
        camposValidos("mailUser", "textoCorreo","error");
        correo.focus();
        return false;  // no continua la validacion
    } else {
        textoCorreo.html("Dato Validado");
        camposValidos("mailUser", "textoCorreo","ok");  
    }

    var provincia = $("#provinciaUser");
    var textoProvincia = $("#textoProvincia");

    if (provincia.val() == "Seleccionar") {
        textoProvincia.html("Error! Seleccione una Provincia!");
        camposValidos("provinciaUser", "textoProvincia", "error");
        provincia.focus();
        return false; // Detengo la validación en este lugar
    } else {

        textoProvincia.html("Dato validado")  ;
        camposValidos("provinciaUser", "textoProvincia", "ok"); 

    }
        
    var localidad = $("#localidadUser");
    var textoLocalidad = $("#textoLocalidad");

    if (localidad.val() == "") {
        textoLocalidad.html("Error! Ingrese una Localidad!");
        camposValidos("localidadUser", "textoLocalidad","error");
        localidad.focus();
        return false;  // no continua la validacion
    } else {
        textoLocalidad.html("Dato Validado");
        camposValidos("localidadUser", "textoLocalidad","ok");  
    }

    var tyc = $("#tyc");
        var textoTYC = $("#textoTYC");
    
        if (!tyc.is(':checked')) {
            textoTYC.html("Error! Por favor, confirme los Términos y Condiciones!");
            camposValidos("tyc", "textoTYC", "error");
            tyc.focus();
            return false; // Detengo la validación en este lugar
        } else {
            textoTYC.html("Términos y Condiciones aprobados!");
            camposValidos("tyc", "textoTYC", "ok");
        }
    
    guardarDatosForm();
    //$("#formUser").submit();
    console.log("Formulario Enviado!");
    
}

cargarProvincias(provincias);

$("#registrar").click(function() {
    validarFormulario();
})

$("#nombreUser").focusout(function() {
    validarFormulario();
})

$("#mailUser").focusout(function() {
    validarFormulario();
})

$("#provinciaUser").focusout(function() {
    validarFormulario();
})

$("#provinciaUser").change(function() {
    validarProvincia();
})
$("#localidadUser").focusout(function() {
    validarFormulario();
})


}

cargarFormulario ();
