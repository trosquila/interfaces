document.addEventListener('DOMContentLoaded', function () {
    /* Guardamos los elementos HTML para luego trabajar con ellos */
    const boton = document.getElementById('btnMenuMovil');
    const fondoEnlace = document.getElementById('fondoEnlace');
    const barraLateral = document.getElementById('barraLateralIzquierda');

    const camposKeyUp = ["numDni", "numSoporte", "equipoExp", "telefono", "email"];
    const camposChange = ["tramite", "provincia", "oficina", "fechaCita", "horaCita", "validezDni", "terminos"];

    camposKeyUp.forEach((id) => {
        const campoForm = document.getElementById(id);
        campoForm.addEventListener("keyup", validacionFormulario);
    });

    camposChange.forEach((id) => {
        const campoForm = document.getElementById(id);
        campoForm.addEventListener("change", validacionFormulario);
    });

    if (boton) {
        /* Cuando se haga click en el boton menu */
        boton.addEventListener('click', function (e) {
            e.preventDefault();
            /* Añadimos o quitamos la clase CSS active
               al fondo y la barra lateral */
            fondoEnlace.classList.toggle('active');
            barraLateral.classList.toggle('active');
        });
    }

    /* Lo mismo pero cuando se pulsa el fondo del menu para cerrarlo */
    if (fondoEnlace) {
        fondoEnlace.addEventListener('click', function (e) {
            e.preventDefault();
            fondoEnlace.classList.toggle('active');
            barraLateral.classList.toggle('active');
        });
    }

    //PARA GIRAR LAS CARTAS DE MÁS INFO
    document.querySelectorAll(".btnFlip").forEach((btn) => {
        btn.addEventListener("click", () => {
            //busca elementos por encima de el con esa clase
            const flipCard = btn.closest(".flipCard");
            if (flipCard) flipCard.classList.add("isFlipped");
        });
    });

    document.querySelectorAll(".btnFlipBack").forEach((btn) => {
        btn.addEventListener("click", () => {
            const flipCard = btn.closest(".flipCard");
            if (flipCard) flipCard.classList.remove("isFlipped");
        });
    });
});

// a partir de este punto se validan los campos del formulario
function validacionFormulario() {
    const campoForm = this;

    if (campoForm.id === "tramite") return validarTramite(campoForm);
    if (campoForm.id === "provincia") return validarProvincia(campoForm);
    if (campoForm.id === "oficina") return validarOficina(campoForm);
    if (campoForm.id === "fechaCita") return validarFechaCita(campoForm);
    if (campoForm.id === "horaCita") return validarHoraCita(campoForm);

    if (campoForm.id === "numDni") return validarNumDni(campoForm);
    if (campoForm.id === "numSoporte") return validarNumSoporte(campoForm);
    if (campoForm.id === "equipoExp") return validarEquipoExp(campoForm);
    if (campoForm.id === "validezDni") return validarValidezDni(campoForm);

    if (campoForm.id === "telefono") return validarTelefono(campoForm);
    if (campoForm.id === "email") return validarEmail(campoForm);
    if (campoForm.id === "terminos") return validarTerminos(campoForm);
}

function setValido(campoForm) {
    campoForm.classList.remove("is-invalid");
    campoForm.classList.add("is-valid");
}

function setInvalido(campoForm) {
    campoForm.classList.remove("is-valid");
    campoForm.classList.add("is-invalid");
}

function validarTramite(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarProvincia(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarOficina(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarFechaCita(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarHoraCita(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarNumDni(campoForm) {
    const esValido = /^[0-9]{8}[A-Z]$/.test(campoForm.value.trim());
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarNumSoporte(campoForm) {
    let esValido = campoForm.value.trim().length >= 6;
    esValido = /^[0-9]{6,}$/.test(campoForm.value);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarEquipoExp(campoForm) {
    let esValido = campoForm.value.trim().length >= 4;
    esValido = /^[0-9]{4,}$/.test(campoForm.value);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarValidezDni(campoForm) {
    const esValido = campoForm.value !== "";
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarTelefono(campoForm) {
    const esValido = /^[0-9]{9}$/.test(campoForm.value.trim());
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarEmail(campoForm) {
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoForm.value.trim());
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarTerminos(campoForm) {
    const esValido = campoForm.checked === true;
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}