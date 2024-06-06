
class MiFormula extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const medicamentos = JSON.parse(this.getAttribute('medicamentos'));

    this.shadowRoot.innerHTML = `
      <style>
      :host {
        display: block;
        font-family: Arial, sans-serif;
        text-align: center;
      }
      
      .container {
        border: 1px solid #e0e0e0;
        border-radius: 8px;
        padding: 20px;
        max-width: 500px;
        margin: 20px auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background-color: #f4f4f5;
      }
      
      .medicamentos {
        text-align: left;
        margin: 0 auto;
        max-width: 300px;
      }
      
      .medicamentos p {
        margin: 5px 0;
      
      }
      
      .medicamentos .item {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border-bottom: 1px solid #04bf8a;
        margin-bottom: 10px; /* Añade esta línea para separar las filas */
      }
      </style>
      <div class="container">
        <div class="medicamentos">
          <p class="item"><strong>Nombre</strong> <strong>Cantidad</strong></p>
          ${medicamentos.map(med => `
            <p class="item"><span>${med.nombre}</span> <span>${med.cantidad}</span></p>
          `).join('')}
        </div>
      </div>
    `;
  }
}

customElements.define('mi-formula', MiFormula);