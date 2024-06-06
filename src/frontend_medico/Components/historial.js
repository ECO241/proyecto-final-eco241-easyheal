class Historial extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const medicamentos = JSON.parse(this.getAttribute('medicamentos'));

        this.shadowRoot.innerHTML = `
        <style>
            .medicamentos {
                display: grid;
                grid-template-columns: 1fr 1fr; /* Dividir en dos columnas */
                gap: 10px; /* Espacio entre columnas */
                padding: 10px;
                font-family: Satoshi;
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                line-height: 45px;
                text-align: left;
                color: #001b26;
                border: 1px solid #04bf8a;
                border-radius: 21px;
                width: 1400px;
                margin-left: 50px;
            }

            .titulo {
                font-weight: bold;
                border-bottom: 1px solid #ccc;
                padding: 5px;
            }

            .medicamento, .cantidad {
                padding: 5px;
                border-bottom: 1px solid #ccc;
            }
        </style>
        <div class="medicamentos">
            <div class="titulo">Medicamento</div>
            <div class="titulo">Cantidad</div>
            ${medicamentos.map(med => `
                <div class="medicamento">${med.nombre}</div>
                <div class="cantidad">${med.cantidad}</div>
            `).join('')}
        </div>`;
    }
}

customElements.define('mi-historial', Historial);
