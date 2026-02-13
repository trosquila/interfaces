// ====== Estado del formulario ======
const estadoFormulario = [
    { nombre: "tramite", validado: false },
    { nombre: "provincia", validado: false },
    { nombre: "oficina", validado: false },
    { nombre: "fechaCita", validado: false },
    { nombre: "horaCita", validado: false },

    { nombre: "numDni", validado: false },
    { nombre: "numSoporte", validado: false },
    { nombre: "equipoExp", validado: false },
    { nombre: "validezDni", validado: false },

    { nombre: "telefono", validado: false },
    { nombre: "email", validado: false },
    { nombre: "terminos", validado: false },
];

document.addEventListener("DOMContentLoaded", () => {
    const camposKeyUp = ["numDni", "numSoporte", "equipoExp", "telefono", "email"];
    const camposChange = ["tramite", "provincia", "oficina", "fechaCita", "horaCita", "validezDni", "terminos"];

    // Bloquear el enlace nada más cargar
    validarBtn();

    camposKeyUp.forEach((id) => {
        const campoForm = document.getElementById(id);
        if (!campoForm) return;
        campoForm.addEventListener("keyup", validacionFormulario);
    });

    camposChange.forEach((id) => {
        const campoForm = document.getElementById(id);
        if (!campoForm) return;
        campoForm.addEventListener("change", validacionFormulario);
    });
});

function validacionFormulario() {
    const campoForm = this;

    (campoForm.id === "tramite") ? validarTramite(campoForm) : '';
    (campoForm.id === "provincia") ? validarProvincia(campoForm) : '';
    (campoForm.id === "oficina") ? validarOficina(campoForm) : '';
    (campoForm.id === "fechaCita") ? validarFechaCita(campoForm) : '';
    (campoForm.id === "horaCita") ? validarHoraCita(campoForm) : '';

    (campoForm.id === "numDni") ? validarNumDni(campoForm) : '';
    (campoForm.id === "numSoporte") ? validarNumSoporte(campoForm) : '';
    (campoForm.id === "equipoExp") ? validarEquipoExp(campoForm) : '';
    (campoForm.id === "validezDni") ? validarValidezDni(campoForm) : '';

    (campoForm.id === "telefono") ? validarTelefono(campoForm) : '';
    (campoForm.id === "email") ? validarEmail(campoForm) : '';
    (campoForm.id === "terminos") ? validarTerminos(campoForm) : '';
}

function validarBtn() {
    const formValido = estadoFormulario.every(element => element.validado === true);
    const btn = document.getElementById("btnForm");
    if (!btn) return;

    if (formValido) btn.classList.remove("enlaceBloqueado");
    else btn.classList.add("enlaceBloqueado");
}

function setValido(campoForm) {
    campoForm.classList.remove("is-invalid");
    campoForm.classList.add("is-valid");
    validarBtn();
}

function setInvalido(campoForm) {
    campoForm.classList.remove("is-valid");
    campoForm.classList.add("is-invalid");
    validarBtn();
}

function actualizarEstado(campoForm, esValido) {
    const campo = estadoFormulario.find(element => element.nombre === campoForm.id);
    if (campo) campo.validado = esValido;
}

function validarTramite(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarProvincia(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarOficina(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarFechaCita(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarHoraCita(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarNumDni(campoForm) {
    const esValido = /^[0-9]{8}[A-Z]$/.test(campoForm.value.trim());
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarNumSoporte(campoForm) {
    let esValido = campoForm.value.trim().length >= 6;
    esValido = /^[0-9]{6,}$/.test(campoForm.value);
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarEquipoExp(campoForm) {
    let esValido = campoForm.value.trim().length >= 4;
    esValido = /^[0-9]{4,}$/.test(campoForm.value);
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarValidezDni(campoForm) {
    const esValido = campoForm.value !== "";
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarTelefono(campoForm) {
    const esValido = /^[0-9]{9}$/.test(campoForm.value.trim());
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarEmail(campoForm) {
    const esValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campoForm.value.trim());
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}

function validarTerminos(campoForm) {
    const esValido = campoForm.checked === true;
    actualizarEstado(campoForm, esValido);
    esValido ? setValido(campoForm) : setInvalido(campoForm);
    return esValido;
}
