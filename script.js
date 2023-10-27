function mostrarFormulario() {
    const formularioContainer = document.getElementById("formulario-container");

    formularioContainer.classList.toggle("mostrando");

    formularioContainer.classList.remove("escondido");
}