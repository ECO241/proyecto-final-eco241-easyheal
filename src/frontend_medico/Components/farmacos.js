class Medicamento extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const nombre = this.getAttribute('nombre');
      const tipo = this.getAttribute('tipo');
      const precio_unitario = this.getAttribute('precio_unitario');
  
      this.shadowRoot.innerHTML = `
        <style>
          .medicamento {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
            border-radius: 5px;
          }
          .medicamento h2 {
            margin: 0;
            font-size: 1.2em;
          }
          .medicamento button {
            margin-top: 10px;
          }
        </style>
        <div class="medicamento">
          <h2>${nombre}</h2>
          <p>Tipo: ${tipo}</p>
          <p>Precio Unitario: ${precio_unitario}</p>
          <button id="add-to-cart">Agregar a la formula</button>
        </div>
      `;
  
      this.shadowRoot.querySelector('#add-to-cart').addEventListener('click', () => {
        const event = new CustomEvent('add-to-cart', {
          detail: {
            nombre,
            tipo,
            precio_unitario,
          }
        });
        this.dispatchEvent(event);
      });
    }
  }
  
  customElements.define('mi-medicamento', Medicamento);
  