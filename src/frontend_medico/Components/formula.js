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

    :host {
      display: block;
      font-family: ;
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

  .container img {
    margin-bottom: 5px;
  }

  .header {
    font-size: 1.5em;
    color: #27ae60;
    margin-bottom: 10px;
  }

  .sub-header {
    color: #666;
    margin-bottom: 20px;
    font-family: Satoshi;
    font-style: normal;
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
  }

  .button-container {
    margin-top: 20px;
  }

  .button-container button {
    width: 300px;
    height: 42px;
    border: 1.5px solid #001b26;
    border-radius: 10px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    background-color: #f4f4f5;
    color: #001b26;
  }

  .button-container button:hover {
    background-color: #001B26;
    color: #f4f4f5;
  }

  .medicamentos{
    border-style: none;
    border-radius: 5px;
    padding: 10px;
    font-family: Satoshi;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: left;
    color: #001b26;
    border: 1px solid #04bf8a;
    border-radius: 21px;
    width: 500px;
    background-color: #f4f4f5;
  }

  .item{
    display: flex;
    padding: 8px;
    border-bottom: 1px solid #04bf8a;
  }

  

    
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
      window.location.href = 'http://localhost:3000/medicoss?medico=Luis_Tobar&id=f5a95abc-e4bc-4c1c-a590-e5d6e9b9c5f0';
    });
  }
  
}



customElements.define('mi-formula', MiFormula);