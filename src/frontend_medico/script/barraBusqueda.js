document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        document.querySelectorAll("mi-medicamento").forEach(medicamentoElem => {
            const medicamentoShadow = medicamentoElem.shadowRoot;
            const nombreElem = medicamentoShadow.querySelector('h2');
            const medicamentoDiv = medicamentoShadow.querySelector('.medicamento');

            if (nombreElem.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
            medicamentoDiv.classList.remove("filtro");
            } else {
            medicamentoDiv.classList.add("filtro");
            }
        });
        }
    });