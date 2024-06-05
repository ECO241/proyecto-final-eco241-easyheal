class MiFormula extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const qrCode = this.getAttribute('qr_code');
      const pacienteId = this.getAttribute('paciente_id');
      const medicamentos = JSON.parse(this.getAttribute('medicamentos'));
  
      this.shadowRoot.innerHTML = `
        <div>
          <p><strong>ID del Paciente:</strong> ${pacienteId}</p>
          <p><strong>Medicamentos:</strong></p>
          <ul>
            ${medicamentos.map(med => `<li>${med.nombre} - Cantidad: ${med.cantidad}</li>`).join('')}
          </ul>
          <img src="data:image/png;base64,${qrCode}" alt="Código QR">
        </div>
      `;
    }
  }
  
  customElements.define('mi-formula', MiFormula);
  