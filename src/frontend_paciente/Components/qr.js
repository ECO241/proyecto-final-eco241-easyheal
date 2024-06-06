class MiFormula extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const qrCode = this.getAttribute('qr_code');
      const medicamentos = JSON.parse(this.getAttribute('medicamentos'));
  
      this.shadowRoot.innerHTML = `
        <style>
          
        </style>
  
        <div class="container">
        
          <img src="data:image/png;base64,${qrCode}" alt="Código QR">
          <div class="sub-header">La fórmula ha sido enviada al paciente</div>
          <div class="medicamentos">
            <p class="item"><span><strong>Nombre</strong></span> <span><strong>Cantidad</strong></span></p>
            ${medicamentos.map(med => `
              <p class="item"><span>${med.nombre}</span> <span>${med.cantidad}</span></p>
            `).join('')}
          </div>
          <div class="button-container">
            <button id="next">Volver a lista de pacientes</button>
          </div>
        </div>
      `;
  
      this.shadowRoot.querySelector('#next').addEventListener('click', () => {
        window.location.href = 'http://localhost:3000/pacientes';
      });
    }
  }
  
  customElements.define('mi-formula', MiFormula);