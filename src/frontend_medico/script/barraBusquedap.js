document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll("mi-paciente").forEach(pacienteElem => {
            const pacienteShadow = pacienteElem.shadowRoot;
            const nombreElem = pacienteShadow.querySelector('h2');
            const pacienteDiv = pacienteShadow.querySelector('.paciente');

            if (nombreElem.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            pacienteDiv.classList.remove("filtro");
            } else {
            pacienteDiv.classList.add("filtro");
            }
        });
        }
    });